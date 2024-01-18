const node = require('eslint-plugin-n');
const unicorn = require('eslint-plugin-unicorn');
const config = require('@koshikishi/eslint-config');
const rules = require('./rules/node.cjs');

module.exports = [
  ...config,
  node.configs['flat/recommended'],
  {
    plugins: {
      unicorn,
    },
    rules,
  },
];
