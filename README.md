# [VRZ eslint config standard](https://github.com/athospg/vrz-eslint-config-standard)

Eslint rules for javascript and typescript

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

A step by step series of examples that tell you how to get a development env running

```bash
npm i -D @vrz/eslint-config-standard
```

#### Install ESLint plugins

ESLint plugins used by this config must also be installed within your project. This is a limitation within ESLint (see [RFC](https://github.com/eslint/rfcs/tree/master/designs/2019-config-simplification) and [progress](https://github.com/eslint/eslint/issues/13481)).

```bash
npm i -D eslint@latest \
         eslint-plugin-angular@latest \
         eslint-plugin-import@latest \
         eslint-plugin-node@latest \
         eslint-plugin-promise@latest \
         @typescript-eslint/eslint-plugin@latest
```

If you need React support run this also:

```bash
npm i -D eslint-plugin-jsx-a11y@latest \
         eslint-plugin-react@latest \
         eslint-plugin-react-hooks@latest
```

#### Configure ESLint

Add `"extends": "@vrz/eslint-config-standard"` to your ESLint config file.

An example `.eslintrc.js`:

```js
module.exports = {
  extends: ['@vrz/eslint-config-standard'],
};
```

### 4) Configure the ESLint TypeScript parser

This config requires knowledge of your TypeScript config.

In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json`.

For example:

```diff
 module.exports = {
   extends: ['@vrz/eslint-config-standard'],
+  parserOptions: {
+    project: './tsconfig.json',
+ }
 };
```

## Developing

### Publish

```bash
npm login
npm publish --access public
```

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/athospg/vrz-eslint-config-standard/tags).

## Authors

- **Athos Póvoa Garcia** - [athospg](https://github.com/athospg)

See also the list of [contributors](https://github.com/athospg/vrz-eslint-config-standard/contributors) who participated in this project.

## License

This project is licensed under the GNU Affero General Public License - see the [LICENSE.md](LICENSE.md) file for details

```text
    VRZ eslint config standard
    Copyright (C) 2021 Athos Póvoa Garcia

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <https://www.gnu.org/licenses/>.
```

## Acknowledgments

- Thanks to ...
