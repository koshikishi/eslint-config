import config from '@koshikishi/eslint-config/node';
import globals from 'globals';

export default [
  ...config,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
];
