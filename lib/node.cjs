const config = require('@koshikishi/eslint-config');
const node = require('eslint-plugin-n').default;
const unicorn = require('eslint-plugin-unicorn').default;
const globals = require('globals');
const rules = require('./rules/node.cjs');

module.exports = [
  ...config,
  node.configs['flat/recommended'],
  unicorn.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
    rules,
  },
];
