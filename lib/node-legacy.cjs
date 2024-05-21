const rules = require('./rules/node.cjs');

module.exports = {
  extends: ['@koshikishi/eslint-config/legacy', 'plugin:n/recommended'],
  rules,
};
