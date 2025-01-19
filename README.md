# micromark bug reproduction

micromark doesn't recognize non-BMP punctuation marks and symbols (e.g. [𝜵 (U+1D735)](https://www.compart.com/en/unicode/U+1D735))

## How to use

Run after cloning this repository:

```sh
npm i
node --run test
```

The test will be run and fail. The test will pass after the bug is fixed.

## Related

- commonmark.js (fixed): https://github.com/commonmark/commonmark.js/issues/296 (PR: https://github.com/commonmark/commonmark.js/pull/297)
- markdown-it: https://github.com/markdown-it/markdown-it/issues/1071 (PR: https://github.com/markdown-it/markdown-it/pull/1072)
