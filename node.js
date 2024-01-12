import node from 'eslint-plugin-n';
import unicorn from 'eslint-plugin-unicorn';
import config from '@koshikishi/eslint-config';

export default [
  ...config,
  node.configs['flat/recommended'],
  {
    plugins: {
      unicorn,
    },
    rules: {
      'no-console': 'off',

      'n/callback-return': 'error',
      'n/file-extension-in-import': 'error',
      'n/global-require': 'error',
      'n/handle-callback-err': ['error', '^.*(e|E)rr'],
      'n/no-callback-literal': 'error',
      'n/no-exports-assign': 'off',
      'n/no-extraneous-import': 'off',
      'n/no-extraneous-require': 'off',
      'n/no-missing-import': 'off',
      'n/no-missing-require': 'off',
      'n/no-mixed-requires': 'error',
      'n/no-path-concat': 'error',
      'n/no-unpublished-bin': 'off',
      'n/no-unpublished-import': 'off',
      'n/no-unpublished-require': 'off',
      'n/no-unsupported-features/es-builtins': 'off',
      'n/no-unsupported-features/node-builtins': 'off',
      'n/prefer-global/buffer': 'error',
      'n/prefer-global/text-decoder': 'error',
      'n/prefer-global/text-encoder': 'error',
      'n/prefer-global/url': 'error',
      'n/prefer-global/url-search-params': 'error',
      'n/prefer-promises/dns': 'error',
      'n/prefer-promises/fs': 'error',
      'n/shebang': 'off',

      'unicorn/prefer-node-protocol': 'warn',
    },
  },
];
