# Import a new document

pip install "rst-to-myst[sphinx]"
wget https://raw.githubusercontent.com/NethServer/ns8-docs/refs/heads/main/nethvoice_proxy.rst

rst2myst convert nethvoice_proxy.rst
mv nethvoice_proxy.md docs/administrator-manual/



Replace admonitions with Docusaurus admonitions: https://docusaurus.io/docs/markdown-features/admonitions