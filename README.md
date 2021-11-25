```yaml
uses: packettide/url-extractor-gh-action@main
with:
  body: ${{ github.event.pull_request.body }}
  pattern: "(https:\/\/github.com\/packettide\/ExpressionEngine\/tree\/[^\s]+)"
```
