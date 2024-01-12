const rules = require('./src/rules/node.cjs');

module.exports = {
  extends: ['@koshikishi/eslint-config/legacy', 'plugin:n/recommended'],
  plugins: ['unicorn'],
  rules,
};
