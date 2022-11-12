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
