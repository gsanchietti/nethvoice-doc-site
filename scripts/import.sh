#!/bin/bash

set -e

# Check for URL argument
if [[ $# -lt 1 ]]; then
    echo "Usage: $0 <url>"
    exit 1
fi

URL="$1"
FILENAME=$(basename "$URL")

# Activate venv only if not already active
if [[ -z "$VIRTUAL_ENV" ]]; then
    python3 -m venv venv
    source venv/bin/activate
fi

# Install pip deps only if not already installed
if ! python -c "import rst_to_myst" &>/dev/null; then
    pip install "rst-to-myst[sphinx]"
fi

wget "$URL" -O "$FILENAME"
rst2myst convert "$FILENAME"
MD_FILE="${FILENAME%.rst}.md"

# Post-process for Docusaurus compatibility
# Replace all {note} with note, {warning} with warning, remove all {guilabel}
sed -i \
    -e 's/{note}/note/g' \
    -e 's/{hint}/tip/g' \
    -e 's/{warning}/warning/g' \
    -e 's/{guilabel}//g' \
    -e 's/{ref}//g' \
    -e 's/^([^)]*)=//g' \
    "$MD_FILE"

# Extract the file name without extension and capitalize it for the title
TITLE="$(basename "$MD_FILE" .md | sed -E 's/(^|_|\-)([a-z])/\U\2/g')"

# Add frontmatter title
sed -i "1i---\ntitle: $TITLE\n---\n" "$MD_FILE"
mv "$MD_FILE" ../docs/administrator-manual/

rm "$FILENAME"