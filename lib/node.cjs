const config = require('@koshikishi/eslint-config');
const node = require('eslint-plugin-n');
const unicorn = require('eslint-plugin-unicorn');
const rules = require('./rules/node.cjs');

module.exports = [
  ...config,
  node.configs['flat/recommended'],
  unicorn.configs.recommended,
  {
    rules,
  },
];
