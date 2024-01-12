const rules = require('./src/rules/vanilla.cjs');

module.exports = {
  extends: 'eslint:recommended',
  plugins: ['@stylistic', 'check-file'],
  rules,
};
