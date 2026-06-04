# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [5.1.0] - 2026-06-04

### Changed

- Enabled globals for a browser environment in **Vanilla JS** configuration file.
- Enabled globals for a Node.js environment in **Node.js** configuration file.
- Updated README.md.

### Fixed

- Error when loading recommended configuration files from `eslint-plugin-n` and `eslint-plugin-unicorn` in CommonJS modules.

## [5.0.0] - 2026-06-04

### Added

- New dependency `eslint-plugin-unicorn`.
- Many new rules for **Vanilla JS** configuration file.
  - `array-callback-return` requires `return` statements in callbacks of array methods.
  - `no-promise-executor-return` disallows returning values from Promise executor functions.
  - `no-self-compare` disallows comparisons to itself.
  - `no-unused-vars` disallows unused variables, except for those whose names begin with `_` (moved from **Node.js** config).
  - `consistent-return` requires `return` statements to either always or never specify values.
  - `default-case-last` requires `default` clauses in `switch` statements to be last.
  - `default-param-last` requires default parameters to be last.
  - `dot-notation` requires dot notation instead of square-bracket notation.
  - `guard-for-in` requires `for-in` loops to include an `if` statement.
  - `logical-assignment-operators` requires logical assignment operator shorthand.
  - `max-nested-callbacks` enforces a maximum depth that callbacks can be nested.
  - `new-cap` requires constructor names to begin with a capital letter.
  - `no-array-constructor` disallows `Array` constructors.
  - `no-caller` disallows the use of `arguments.caller` or `arguments.callee`.
  - `no-else-return` disallows `else` blocks after `return` statements in `if` statements.
  - `no-eval` disallows the use of `eval()`.
  - `no-extend-native` disallows extending builtin objects.
  - `no-extra-bind` disallows the unnecessary use of `.bind()`.
  - `no-implicit-coercion` disallows the type conversions with shorter notations.
  - `no-implied-eval` disallows the use of `eval()`-like methods.
  - `no-invalid-this` disallows `this` in contexts where the value of `this` is `undefined`.
  - `no-iterator` disallows the use of the `__iterator__` property.
  - `no-label-var` disallows labels that share a name with a variable.
  - `no-labels` disallows labeled statements.
  - `no-lone-blocks` disallows unnecessary nested blocks.
  - `no-loop-func` disallows functions that contain unsafe references inside loop statements.
  - `no-multi-str` disallows multiline strings.
  - `no-new` disallows `new` operators outside of assignments or comparisons.
  - `no-new-func` disallows `new` operators with the `Function` object.
  - `no-new-wrappers` disallows `new` operators with the `String`, `Number`, and `Boolean` objects.
  - `no-object-constructor` disallows calls to the `Object` constructor without an argument.
  - `no-octal-escape` disallows octal escape sequences in string literals.
  - `no-proto` disallows the use of the `__proto__` property.
  - `no-script-url` disallows `javascript:` URLs.
  - `no-sequences` disallows comma operators.
  - `no-throw-literal` disallows throwing literals as exceptions.
  - `no-undef-init` disallows initializing variables to `undefined`.
  - `no-useless-computed-key` disallows unnecessary computed property keys in objects and classes.
  - `no-useless-rename` disallows renaming import, export, and destructured assignments to the same name.
  - `object-shorthand` requires method and property shorthand syntax for object literals.
  - `one-var` requires multiple variable declarations per scope (one declaration for each variable).
  - `prefer-object-has-own` requires `Object.hasOwn()` instead of `Object.prototype.hasOwnProperty.call()`.
  - `prefer-object-spread` requires the use of object spread instead of `Object.assign` with an object literal as the first argument.
  - `prefer-promise-reject-errors` requires using Error objects as Promise rejection reasons.
  - `prefer-regex-literals` requires regular expression literals instead of the `RegExp` constructor.
  - `prefer-rest-params` requires rest parameters instead of `arguments`.
  - `prefer-spread` requires spread operators instead of `.apply()`.
  - `require-await` disallows async functions which have no `await` expression.
  - `yoda` disallows putting the literal value of the condition before the variable.
  - `unicode-bom` disallows Unicode byte order mark (BOM).
- Many new formatting rules.
  - `@stylistic/array-bracket-spacing` disallows spaces between array brackets and other tokens.
  - `@stylistic/block-spacing` requires spaces inside of single line blocks after opening block and before closing block.
  - `@stylistic/comma-dangle` requires trailing commas when the last element or property is in a different line than the closing bracket.
  - `@stylistic/comma-spacing` disallows spaces before commas and requires one or more spaces after commas.
  - `@stylistic/comma-style` requires a comma after and on the same line as an array element, object property, or variable declaration.
  - `@stylistic/computed-property-spacing` disallows spaces inside computed property brackets.
  - `@stylistic/function-call-spacing` disallows spaces between the function name and the opening parenthesis.
  - `@stylistic/generator-star-spacing` disallows spaces between the `*` and the `function` keyword and requires spacing between the `*` and the function name.
  - `@stylistic/key-spacing` disallows spaces between the key and the colon in object literals and requires exactly one space between the colon and the value.
  - `@stylistic/keyword-spacing` requires at least one space before and after keywords.
  - `@stylistic/new-parens` requires parentheses when invoking a constructor with no arguments.
  - `@stylistic/no-extra-semi` disallows unnecessary semicolons.
  - `@stylistic/no-floating-decimal` disallows leading or trailing decimal points in numeric literals.
  - `@stylistic/object-curly-spacing` disallows spacing inside of curly braces.
  - `@stylistic/quote-props` requires consistency in quotes around object literal property names.
  - `@stylistic/rest-spread-spacing` disallows spaces between rest and spread operators and their expressions.
  - `@stylistic/semi-spacing` disallows spacing before semicolons and requires spacing after semicolons.
  - `@stylistic/space-before-blocks` requires at least one space before blocks.
  - `@stylistic/space-before-function-paren` disallows spacing before parentheses for named function expressions and requires a space for anonymous function expressions.
  - `@stylistic/space-unary-ops` enforces consistent spacing before or after unary operators.
  - `@stylistic/spaced-comment` requires at least one space after the `//` or `/*` in a comment.
  - `@stylistic/yield-star-spacing` disallows spaces before the `*` in `yield*` expressions and requires spacing after the `*`.
- New rules for **Node.js** configuration file.
  - `n/no-hide-core-modules` disallows third-party modules which are hiding core modules.
  - `n/no-new-require` disallows `new` operators with calls to `require`.
  - `n/no-process-env` disallows the use of `process.env`, except for `NODE_ENV` variable.
  - `n/no-sync` disallows synchronous methods.
  - All rules from the `eslint-plugin-unicorn` recommended config, except for the following:
    - `unicorn/consistent-function-scoping`
    - `unicorn/expiring-todo-comments`
    - `unicorn/filename-case`
    - `unicorn/no-null`
    - `unicorn/numeric-separators-style`
    - `unicorn/prevent-abbreviations`

### Changed

- **Breaking changes:**
  - Bumped the minimum supported Node.js version to >=24.0.
  - Bumped the required ESLint version to >= 10.0.
- Some rules for **Vanilla JS** configuration file.
  - `no-use-before-define` no longer ignores function declarations.
  - `strict` now disallows strict mode directives.
  - `@stylistic/quotes` now allows double-quotes to define strings if the string contains a quote that would have to be escaped otherwise.
  - `check-file/filename-naming-convention` no longer targets `*.jsx` or `*.tsx` files.
- Some rules for **Node.js** configuration file.
  - `no-unused-vars` moved to **Vanilla JS** configuration file.
  - `no-console` now allows the use of `console.warn` and `console.error` methods.
  - `n/prefer-global/*` now require importing builtins using `require()` instead of global variables, except for `console`. This affects `Buffer`, `crypto`, `process`, `TextDecoder`, `TextEncoder`, global timer functions, `URL`, `URLSearchParams`.
  - `n/prefer-node-protocol` replaced by `unicorn/prefer-node-protocol` (in the recommended config).
  - Re-enabled a few disabled rules from the `eslint-plugin-n` recommended config.
    - `n/hashbang` requires correct usage of hashbang.
    - `n/no-exports-assign` disallows the assignment to `exports`.
    - `n/no-extraneous-import` disallows `import` declarations of extraneous modules.
    - `n/no-extraneous-require` disallows `require()` of extraneous modules.
    - `n/no-missing-require` disallows `require()` of missing modules.
    - `n/no-unpublished-require` disallows `require()` of private modules.
- Updated README.md and LICENSE.
- Updated dependencies.

## [4.0.0] - 2025-07-01

### Changed

- **Breaking change:** bumped the minimum supported Node.js version to >=20.0.
- Updated README.md.
- Updated dependencies.

## [3.0.0] - 2024-05-21

### Changed

- Switched from `eslint-plugin-unicorn` to `eslint-plugin-n` for `prefer-node-protocol` rule.
- Removed `eslint-plugin-unicorn` dependency.
- Added `globals` as a dependency.
- Updated dependencies.

### Removed

- **Breaking change:** dropped support for the legacy (`.eslintrc.*`) configuration files.

## [2.0.0] - 2024-02-12

### Changed

- `no-use-before-define` rule options to a shortened variant.
- `no-unused-vars` rule to ignore arguments whose names begin with `_` (**Node.js** config).
- Updated README.md.
- Updated dependencies.

## [1.1.0] - 2024-01-18

### Added

- Compatibility with CommonJS modules.

### Changed

- Minor styling changes.

## [1.0.1] - 2024-01-15

### Added

- README.md section addressing the `globals` issue.

### Changed

- Updated linter configuration file.

## [1.0.0] - 2024-01-12

### Added

- Basic project configuration files.
- ESLint configuration files in both [flat](https://eslint.org/docs/latest/use/configure/configuration-files-new) and [legacy](https://eslint.org/docs/latest/use/configure/configuration-files) formats for validating **Vanilla JS** and **Node.js** projects.

[5.1.0]: https://github.com/koshikishi/eslint-config/compare/v5.0.0...HEAD
[5.0.0]: https://github.com/koshikishi/eslint-config/compare/v4.0.0...v5.0.0
[4.0.0]: https://github.com/koshikishi/eslint-config/compare/v3.0.0...v4.0.0
[3.0.0]: https://github.com/koshikishi/eslint-config/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/koshikishi/eslint-config/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/koshikishi/eslint-config/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/koshikishi/eslint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/koshikishi/eslint-config/releases/tag/v1.0.0
