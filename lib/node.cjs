const node = require('eslint-plugin-n');
const config = require('@koshikishi/eslint-config');
const rules = require('./rules/node.cjs');

module.exports = [
  ...config,
  node.configs['flat/recommended'],
  {
    rules,
  },
];
