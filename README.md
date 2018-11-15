# React project

## TODO

- Add Husky https://www.npmjs.com/package/husky (adds git hooks)

## Install for react

```
$ npm install -D babel-eslint eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react
```

- babel-eslint: to use flow or another experimental features
- eslint-plugin-import: lint for es2015+
- eslint-plugin-jsx-a11y: plugin for accesibility
- eslint-plugin-react: specific rules for react

## Install for pretier

```
$ npm install -D eslint-config-prettier
```

- eslint-config-prettier: prettier rules for eslint

## UTILS

- With _--_ is posible to pass extra params to npm scripts

```
$ npm run lint -- --debug
```

## Eslint

- Rules in the file .eslintrc.json, the attrbiute extends must be ordered (prettier last).

- "react/prop-types": 0 => is useful when not doing typescript
