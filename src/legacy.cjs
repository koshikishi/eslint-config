const rules = require('./rules/vanilla.cjs');

module.exports = {
  extends: 'eslint:recommended',
  plugins: ['@stylistic', 'check-file'],
  rules,
};
