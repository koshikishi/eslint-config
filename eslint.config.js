import {defineConfig} from 'eslint/config';
import config from '@koshikishi/eslint-config/node';

export default defineConfig([
  {
    extends: [config],
  },
]);
