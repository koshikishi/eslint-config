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
- [eslint-plugin-n](https://www.npmjs.com/package/eslint-plugin-n) for Node.js related rules

All plugins are direct dependencies and will be installed automatically.

## Usage

This config is designed to validate **Vanilla JS** and **Node.js** projects and only supports flat (`eslint.config.js`) configuration files.

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

### Extending the config

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

## Integration with VS Code

1. Install the ESLint [extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) for VS Code.
2. Install `eslint` and this config in your project following the [Installation](#installation) section.
3. Add an ESLint configuration file (`eslint.config.js`) and extend it with this shareable config following the [Usage](#usage) section.

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
