// ESLint v9 flat config for tree-sitter-toml (CommonJS syntax to avoid ESM warning)
const js = require('@eslint/js');

module.exports = [
  js.configs.recommended,
  {
    files: ['grammar.js'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'commonjs',
    },
    rules: {
      // Tree-sitter DSL exposes globals (grammar, seq, choice, etc.)
      // Disable no-undef to avoid false positives for the DSL helpers.
      'no-undef': 'off',
      // The grammar DSL passes `$` but many rules don't use it; that's OK.
      'no-unused-vars': 'off',
      'comma-dangle': ['error', 'always-multiline'],
    },
  },
];
