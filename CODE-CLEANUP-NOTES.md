# Code Cleanup Notes — v5

- Premium UI preserved.
- Removed all CSS `!important` declarations after verifying that theme selectors are placed after the base rules and use higher/equal specificity where needed.
- Moved the clickable logo cursor behavior from inline HTML into `.logo-title-wrapper`.
- No data JS files were intentionally changed.
- Existing tab structure and data-loading order preserved.
- This pass focuses on CSS cascade cleanup; visual/function regression should still be checked in the live GitHub Pages site, especially all three themes.

