import {defineConfig} from 'eslint/config';
import config from '@koshikishi/eslint-config/node';
import globals from 'globals';

export default defineConfig([
  {
    extends: [config],
    languageOptions: {
      globals: globals.node,
    },
  },
]);
