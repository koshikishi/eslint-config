import node from 'eslint-plugin-n';
import unicorn from 'eslint-plugin-unicorn';
import config from '@koshikishi/eslint-config';
import rules from './src/rules/node.cjs';

export default [
  ...config,
  node.configs['flat/recommended'],
  {
    plugins: {
      unicorn,
    },
    rules,
  },
];
