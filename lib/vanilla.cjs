const js = require('@eslint/js');
const globals = require('globals');
const stylistic = require('@stylistic/eslint-plugin');
const checkFile = require('eslint-plugin-check-file');
const rules = require('./rules/vanilla.cjs');

module.exports = [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic,
      'check-file': checkFile,
    },
    rules,
  },
];
