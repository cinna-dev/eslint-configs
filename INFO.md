# Info

## Configuration Values

> - parser: '@typescript-eslint/parser' tells ESLint to use the @typescript-eslint/parser package you installed to parse your source files.
>   - This is required, or else ESLint will throw errors as it tries to parse TypeScript code as if it were regular JavaScript.
> - plugins: ['@typescript-eslint'] tells ESLint to load the @typescript-eslint/eslint-plugin package as a plugin.
>   - This allows you to use typescript-eslint's rules within your codebase.
> - extends: [ ... ] tells ESLint that your config extends the given configurations.
>   - eslint:recommended is ESLint's inbuilt "recommended" config - it turns on a small, sensible set of rules which lint for well-known best-practices.
>   - plugin:@typescript-eslint/recommended is our "recommended" config - it's just like eslint:recommended, except it only turns on rules from our TypeScript-specific plugin.

## Style Guide

<https://github.com/basarat/typescript-book/blob/master/docs/styleguide/styleguide.md#class>

## Do's and Don'ts

<https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html>

## Anti-patterns

### Infer return types

<https://dev.to/arnelenero/why-explicit-return-type-is-a-good-thing-43lj>

## Debug

```bash
export TIMING=1
```

## run eslint

```bash
npx eslint <file>
```

## install package in workspace

```bash
npm i <package> -w <workspace>
```

  **important!** workspace name must include namespace if existent

## Updating your published package version number

To change the version number in package.json, on the command line, in the package root directory, run the following command, replacing <update_type> with one of the semantic versioning release types (patch, major, or minor):

```bash
npm version <update_type>
```

## Check for naming collisions

You can check for naming collisions by doing a search on npm, or through the `npm search` command

## init with scope

Run `npm init --scope=username` instead of `npm init`

If your repository has a scope, you need to adjust the publish command slightly:

``` bash
npm publish --access public
```

## Expensive rules

| Rules                                   | Time      | package |
|:----------------------------------------|----------:|:--------|
| @typescript-eslint/no-misused-promises  |   170.857 | typescript |
| @typescript-eslint/no-unsafe-assignment |    34.210 | typescript |
| import/extensions                       |    27.913 |
| react/display-name                      |    13.106 |
| indent                                  |    10.412 |
| @typescript-eslint/no-floating-promises    |    11.409 |

## plugins

- <https://www.npmjs.com/package/eslint-plugin-import>

## Fix linting error

| error | solution |
|:---------------------|:--------|
| import/no-named-as-default | make sure the Symbol is only exported as default. Make sure there is not type export with the same name |
