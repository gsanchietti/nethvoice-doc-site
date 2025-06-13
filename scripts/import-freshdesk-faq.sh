#!/usr/bin/env bash

set -e

if [ $# -lt 1 ]; then
    echo "Usage: $0 <freshdesk_solution_url>"
    exit 1
fi

if [ -z "$FRESHDESK_API_TOKEN" ]; then
    echo "FRESHDESK_API_TOKEN environment variable not set"
    exit 2
fi

url="$1"
article_id=$(echo "$url" | grep -oE '[0-9]+$')
if [ -z "$article_id" ]; then
    echo "Could not extract article ID from URL"
    exit 3
fi
echo "Fetching article ID: $article_id"

api_url="https://nethesis.freshdesk.com/api/v2/solutions/articles/$article_id"
resp=$(curl -s -u "$FRESHDESK_API_TOKEN:x" "$api_url")
if [ -z "$resp" ] || [ "$(echo "$resp" | jq -r '.id // empty')" = "" ]; then
    echo "Failed to fetch article"
    exit 4
fi

title=$(echo "$resp" | jq -r '.title // empty')

body=$(echo "$resp" | jq -r '.description_text // empty')
if [ -z "$title" ] || [ -z "$body" ]; then
    echo "Failed to fetch article or missing fields"
    exit 4
fi

# Sanitize title for filename
title_sanitized=$(echo "$title" | sed 's/[\/:*?"<>|]/_/g; s/ /_/g')
markdown_file="../docs/tutorial/${title_sanitized}.md"

echo "$body" > "$markdown_file"

# Add frontmatter with title and tags from JSON response
tags=$(echo "$resp" | jq -r '.tags // empty | join(", ")')
echo "Tags: $tags"
if [ -z "$tags" ]; then
    tags_list="[]"
else
    # Convert comma-separated to YAML array
    tags_list=$(echo "$tags" | awk -F', ' '{for(i=1;i<=NF;i++){printf "\n  - %s\n", $i}}')
fi

tmp_markdown=$(mktemp --suffix=.md)
{
    echo "---"
    echo "title: \"$title\""
    echo "tags: $tags_list"
    echo "---"
    cat "$markdown_file"
} > "$tmp_markdown"

mv "$tmp_markdown" "$markdown_file"

echo "Saved to $markdown_file"
rm -f "$tmp_html"
