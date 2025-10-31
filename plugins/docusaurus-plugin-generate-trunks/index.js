// plugins/docusaurus-plugin-generate-trunks/index.js
// Docusaurus plugin that, at build time, downloads an SQL file from the given URL,
// extracts provider/trunk names, and writes a docs/generated/trunks.md file
// so the generated page becomes part of the site.
//
// Behavior:
// - During loadContent(), it fetches the remote SQL file.
// - It parses INSERT statements for a providers table and extracts the first
//   quoted column from each VALUES tuple (common pattern: ('name', ...), ...).
// - It writes docs/generated/trunks.md (creating directories as needed).
//
// Notes:
// - This plugin runs inside the Docusaurus build lifecycle so you don't need an extra npm pre-step.
// - If the remote fetch fails in CI, the plugin logs the error and writes a fallback page.
// - Customize SQL parsing if the source file structure differs.

const fs = require('fs');
const path = require('path');
const https = require('https');

const PROVIDERS_SQL_URL =
  'https://raw.githubusercontent.com/nethesis/ns8-nethvoice/main/mariadb/docker-entrypoint-initdb.d/50_asterisk.providers.sql';

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, (res) => {
      if (res.statusCode && res.statusCode >= 400) {
        reject(new Error(`HTTP ${res.statusCode} when fetching ${url}`));
        return;
      }
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => (data += chunk));
      res.on('end', () => resolve(data));
    });
    req.on('error', (err) => reject(err));
    req.end();
  });
}

function extractProviderNamesFromSQL(sql) {
  const providers = [];

  // The SQL file has format: INSERT INTO `providers` (...) VALUES ("id1","Description1",...),("id2","Description2",...);
  // We want to extract the description (second field), not the ID (first field)
  
  // Match the entire VALUES clause
  const valuesRegex = /INSERT\s+INTO\s+`providers`.*?VALUES\s*(.+);/is;
  const match = valuesRegex.exec(sql);
  
  if (match && match[1]) {
    const valuesContent = match[1];
    
    // Match each tuple with two double-quoted strings: ("id","description",...)
    // We capture both the ID and description
    const tupleRegex = /\("([^"]+)","([^"]+)"/g;
    let tupleMatch;
    
    while ((tupleMatch = tupleRegex.exec(valuesContent)) !== null) {
      const id = tupleMatch[1].trim();
      const description = tupleMatch[2].trim();
      if (description.length > 0) {
        providers.push(description);
      }
    }
  }

  // Sort alphabetically by description
  return providers.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

module.exports = function generateTrunksPlugin(context, options) {
  return {
    name: 'docusaurus-plugin-generate-trunks',
    async loadContent() {
      console.log(`[generate-trunks] Fetching providers SQL from ${PROVIDERS_SQL_URL}`);
      let sqlText = '';
      try {
        sqlText = await fetchText(PROVIDERS_SQL_URL);
      } catch (err) {
        console.warn(`[generate-trunks] Failed to fetch providers SQL: ${err.message}`);
      }

      let providerNames = [];
      if (sqlText && sqlText.length > 0) {
        providerNames = extractProviderNamesFromSQL(sqlText);
        console.log(`[generate-trunks] Extracted ${providerNames.length} provider names`);
      } else {
        console.warn('[generate-trunks] No SQL text retrieved; provider list will be empty or fallback applied.');
      }

      // Only generate file if we have provider names
      if (providerNames.length === 0) {
        console.warn('[generate-trunks] No providers found, skipping file generation');
        return { providerNames: [], mdPath: null };
      }

      // Prepare output markdown content
      const now = new Date().toISOString();
      const docsDir = path.join(context.siteDir, 'docs', 'administrator-manual', 'provisioning');
      if (!fs.existsSync(docsDir)) fs.mkdirSync(docsDir, { recursive: true });

      const mdPath = path.join(docsDir, 'supported_trunks.md');

      let mdContent = `---
id: supported-trunks
title: Supported VoIP trunks
---

`;

      for (const name of providerNames) {
        mdContent += `- \`${name}\`\n`;
      }
      mdContent += '\n';

      mdContent += `This document was automatically generated from [source code](${PROVIDERS_SQL_URL}).\n`;

      try {
        // Check if file exists and compare content
        let shouldWrite = true;
        if (fs.existsSync(mdPath)) {
          const existingContent = fs.readFileSync(mdPath, 'utf8');
          if (existingContent === mdContent) {
            console.log(`[generate-trunks] File content unchanged, skipping write to ${mdPath}`);
            shouldWrite = false;
          }
        }

        if (shouldWrite) {
          fs.writeFileSync(mdPath, mdContent, 'utf8');
          console.log(`[generate-trunks] Wrote generated docs to ${mdPath}`);
        }
      } catch (err) {
        console.error(`[generate-trunks] Failed to write generated doc: ${err.message}`);
      }

      // Returning providerNames could be used elsewhere if needed
      return { providerNames, mdPath };
    },
  };
};
