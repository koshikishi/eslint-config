import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import * as checkFile from 'eslint-plugin-check-file';
import rules from './rules/vanilla.cjs';

export default [
  js.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
      'check-file': checkFile,
    },
    rules,
  },
];
