const config = require('@koshikishi/eslint-config');
const node = require('eslint-plugin-n').default;
const unicorn = require('eslint-plugin-unicorn').default;
const rules = require('./rules/node.cjs');

module.exports = [
  ...config,
  node.configs['flat/recommended-module'],
  unicorn.configs.recommended,
  {
    rules,
  },
];
