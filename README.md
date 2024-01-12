# @koshikishi/eslint-config

[![NPM Version][npm-image]][npm-url]
[![GitHub License][license-image]][license-url]
[![Check Workflow Status][workflow-image]][workflow-url]

The ESLint shareable config designed for my personal projects.

Use it as is or as a foundation for your own configuration file.

This config bundles the following plugins and uses additional rules from them:

- [@stylistic/eslint-plugin](https://www.npmjs.com/package/@stylistic/eslint-plugin) to replace deprecated formatting rules
- [eslint-plugin-check-file](https://www.npmjs.com/package/eslint-plugin-check-file) to enforce a consistent naming pattern
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n) and [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) for Node.js related rules

## Installation

Install the package and `eslint` in your project:

```sh
npm i -D eslint @koshikishi/eslint-config
```

## Usage

This config is designed to validate **Vanilla JS** and **Node.js** projects, and also supports both [flat](https://eslint.org/docs/latest/use/configure/configuration-files-new) (`eslint.config.js`) and [legacy](https://eslint.org/docs/latest/use/configure/configuration-files) (`.eslintrc.*`) ESLint configuration files systems.

### eslint.config.js

**Note:** use of the flat config system requires ESLint v8.21.0 or higher.

For validating your **Vanilla JS** project use the default config:

```js
import config from '@koshikishi/eslint-config';
import globals from 'globals';

export default [
  ...config,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
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
      globals: {
        ...globals.node,
      },
    },
  },
];
```

### .eslintrc.*

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

## Rule overrides

You can specify additional rules and override or turn off already set ones in the `rules` section of your config.

```js
import config from '@koshikishi/eslint-config';
import globals from 'globals';

export default [
  ...config,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // Additional rule
      'no-eval': 'error',

      // This rule is turned off
      'no-console': 'off',

      // This rule has been changed
      '@stylistic/quotes': ['error', 'double'],
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
    // Additional rule
    "no-eval": "error",

    // This rule is turned off
    "no-console": "off",

    // This rule has been changed
    "@stylistic/quotes": ["error", "double"]
  }
}
```

## Usage in VS Code

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
