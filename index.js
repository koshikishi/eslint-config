import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import * as checkFile from 'eslint-plugin-check-file';

export default [
  js.configs.recommended,
  {
    plugins: {
      '@stylistic': stylistic,
      'check-file': checkFile,
    },
    rules: {
      'no-template-curly-in-string': 'error',
      'no-use-before-define': ['error', {
        'functions': false,
      }],

      'accessor-pairs': 'error',
      'arrow-body-style': 'error',
      'camelcase': 'error',
      'curly': 'error',
      'eqeqeq': 'error',
      'no-alert': 'error',
      'no-console': 'error',
      'no-nested-ternary': 'error',
      'no-return-assign': 'error',
      'no-shadow': ['error', {
        'hoist': 'all',
      }],
      'no-unneeded-ternary': 'error',
      'no-unused-expressions': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-var': 'error',
      'prefer-arrow-callback': 'error',
      'prefer-const': 'error',
      'prefer-template': 'error',
      'radix': 'error',
      'strict': ['error', 'global'],

      '@stylistic/arrow-parens': 'error',
      '@stylistic/brace-style': 'error',
      '@stylistic/eol-last': 'error',
      '@stylistic/indent': ['error', 2, {
        'SwitchCase': 1,
      }],
      '@stylistic/lines-between-class-members': ['error', 'always', {
        'exceptAfterSingleLine': true,
      }],
      '@stylistic/no-multi-spaces': 'error',
      '@stylistic/no-multiple-empty-lines': 'error',
      '@stylistic/no-trailing-spaces': 'error',
      '@stylistic/quotes': ['error', 'single'],
      '@stylistic/semi': 'error',
      '@stylistic/semi-style': 'error',
      '@stylistic/space-in-parens': 'error',
      '@stylistic/space-infix-ops': 'error',

      'check-file/filename-naming-convention': ['error', {
        '**/*.{js,jsx,ts,tsx}': 'KEBAB_CASE',
      }, {
        'ignoreMiddleExtensions': true,
      }],
      'check-file/folder-naming-convention': ['error', {
        '**/': 'KEBAB_CASE',
      }],
    },
  },
];
