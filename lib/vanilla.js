import js from '@eslint/js';
import globals from 'globals';
import stylistic from '@stylistic/eslint-plugin';
import checkFile from 'eslint-plugin-check-file';
import rules from './rules/vanilla.cjs';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      '@stylistic': stylistic,
      'check-file': checkFile,
    },
    rules,
  },
];
