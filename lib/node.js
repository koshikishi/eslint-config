import node from 'eslint-plugin-n';
import config from '@koshikishi/eslint-config';
import rules from './rules/node.cjs';

export default [
  ...config,
  node.configs['flat/recommended'],
  {
    rules,
  },
];
