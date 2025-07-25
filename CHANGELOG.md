# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

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

[4.0.0]: https://github.com/koshikishi/eslint-config/compare/v3.0.0...HEAD
[3.0.0]: https://github.com/koshikishi/eslint-config/compare/v2.0.0...v3.0.0
[2.0.0]: https://github.com/koshikishi/eslint-config/compare/v1.1.0...v2.0.0
[1.1.0]: https://github.com/koshikishi/eslint-config/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/koshikishi/eslint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/koshikishi/eslint-config/releases/tag/v1.0.0
