# @koshikishi/eslint-config

[![NPM Version][npm-image]][npm-url]
[![GitHub License][license-image]][license-url]
[![Check Workflow Status][workflow-image]][workflow-url]

The ESLint shareable config designed for my personal projects.

Use it as is or as a foundation for your own configuration file.

## Installation

Install the package and `eslint` in your project:

```sh
npm i -D eslint @koshikishi/eslint-config
```

### Plugins

This config bundles the following plugins and uses additional rules from them:

- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin) to replace deprecated formatting rules
- [eslint-plugin-check-file](https://www.npmjs.com/package/eslint-plugin-check-file) to enforce a consistent naming pattern
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n) and [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) for Node.js related rules

All plugins are direct dependencies and will be installed automatically.

## Usage

This config is designed to validate **Vanilla JS** and **Node.js** projects, and also supports both [flat](https://eslint.org/docs/latest/use/configure/configuration-files-new) (`eslint.config.js`) and [legacy](https://eslint.org/docs/latest/use/configure/configuration-files) (`.eslintrc.*`) ESLint configuration files systems.

### `eslint.config.js`

**Note:** usage of the flat config system requires ESLint v8.21.0 or higher.

For validating your **Vanilla JS** project use the default config:

```js
import config from '@koshikishi/eslint-config';
import globals from 'globals';

export default [
  ...config,
  {
    languageOptions: {
      globals: globals.browser,
    },
  },
];
```

For validating your **Node.js** project use the `node` config:

```js
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
```

#### `globals` issue

To specify global variables in your config, you will need the [globals](https://www.npmjs.com/package/globals) package, which is a direct dependency of ESLint. *Usually* you don't need to worry about it, but in some cases your other dependencies may require an older version of `globals`, which can lead to unexpected errors during linter checks.

If you have this issue, you can work around it by importing global variables from `@eslint/eslintrc` rather than from `globals`:

```js
import config from '@koshikishi/eslint-config';
import {Legacy} from '@eslint/eslintrc';

const {globals} = Legacy.environments.get('browser');

export default [
  ...config,
  {
    languageOptions: {
      globals,
    },
  },
];
```

### `.eslintrc.*`

**Note:** this config system will be deprecated in ESLint v9.0.0. Use it only if you need compatibility with older linter versions.

For validating your **Vanilla JS** project use the `legacy` config:

```json
{
  "root": true,
  "extends": "@koshikishi/eslint-config/legacy",
  "env": {
    "browser": true,
    "es2024": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  }
}
```

For validating your **Node.js** project use the `node-legacy` config:

```json
{
  "root": true,
  "extends": "@koshikishi/eslint-config/node-legacy",
  "env": {
    "node": true,
    "es2024": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  }
}
```

## Extending the config

Add a `rules` key to your config, then add your overrides and additions there.

For example, to add the `no-eval` rule and turn off the `no-console` rule:

```js
import config from '@koshikishi/eslint-config';
import globals from 'globals';

export default [
  ...config,
  {
    languageOptions: {
      globals: globals.browser,
    },
    rules: {
      'no-eval': 'error',
      'no-console': 'off',
    },
  },
];
```

You can also override the additional rules from plugins:

```js
import config from '@koshikishi/eslint-config/node';
import globals from 'globals';

export default [
  ...config,
  {
    languageOptions: {
      globals: globals.node,
    },
    rules: {
      '@stylistic/quotes': ['error', 'double'],
      'n/file-extension-in-import': 'off',
    },
  },
];
```

Rule override for the legacy config is very similar in that it has the same syntax for configuring rules.

```json
{
  "root": true,
  "extends": "@koshikishi/eslint-config/legacy",
  "env": {
    "browser": true,
    "es2024": true
  },
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "rules": {
    "no-eval": "error",
    "no-console": "off",
    "@stylistic/quotes": ["error", "double"]
  }
}
```

## Integration with VS Code

1. Install the ESLint [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VS Code.
2. Install `eslint` and this config in your project following the [Installation](#installation) section.
3. Add an ESLint configuration file (`eslint.config.js` or `.eslintrc.*`) and extend it with this shareable config following the [Usage](#usage) section.

**Note:** since support for the flat config system in VS Code ESLint extension is still experimental, you may need to enable it using the `eslint.experimental.useFlatConfig` setting.

## Useful links

- [Changelog](CHANGELOG.md)
- [ESLint documentation](https://eslint.org/docs/latest/)
- [ESLint Stylistic](https://eslint.style/)

[npm-image]: https://img.shields.io/npm/v/@koshikishi/eslint-config
[npm-url]: https://www.npmjs.com/package/@koshikishi/eslint-config
[license-image]: https://img.shields.io/github/license/koshikishi/eslint-config
[license-url]: https://github.com/koshikishi/eslint-config/blob/main/LICENSE
[workflow-image]: https://github.com/koshikishi/eslint-config/actions/workflows/check.yml/badge.svg
[workflow-url]: https://github.com/koshikishi/eslint-config/actions
