import config from '@koshikishi/eslint-config';
import node from 'eslint-plugin-n';
import unicorn from 'eslint-plugin-unicorn';
import globals from 'globals';
import rules from './rules/node.cjs';

export default [
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
