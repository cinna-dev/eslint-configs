# Eslint Configs

a collection of eslint configs

## Lerna

by default `lerna` weil look in the `packages` dir for node packages

### Build all packages

```shell
    lerna build
```
_will build all packages_

### Versioning

### Publish

```shell
lerne publish
```

 will also automatically increase the `versioning` fo each `package`.

```shell
lerna pulbish --no-private
```

will ensure `private: true` packages are not published to the `npm` registry.


## Pnpm

### install a workspace dependency

_--filter_

```shell
pnpm add <package_to_add> --filter <workspace_name>
```

### install a root dependency

_-w --workspace-root_

```shell
pnpm add -w <package_to_add>
```

## Package.json

### ESM

when exporting **ecma script modules** use `"type": "module`


import/group-exports

suggestions

### Test

Validate the Config

```shell
npx eslint --print-config packages/eslint-config-react/dist/
```
