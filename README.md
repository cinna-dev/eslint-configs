# Eslint Configs

a collection of eslint configs

## Publish workflow

### 1. check outdated node modules

```shell
pnpm outdated
```

### 2. Update Node Modules

```shell
pnpm update
```

update dependencies of all packages

```shell
pnpm run update-all-dependencies@latest
```

### 3. git commit and git push

### 4. Build all packages

```shell
pnpm run lerna:build
```
### 5. Check Changes (optional)

```shell
pnpm run lerna:changed
```
### 6. Versioning (optional)

```shell
pnpm run lerna:version
```
### 7. Publish

```shell
pnpm run lerna:publish 
```

_Explanation:_
> `pnpm run lerna:publish` is composed of
> ```shell
> lerna pulbish --no-private
> ```
> will ensure `private: true` packages are not published to the `npm` registry.
> ```shell
> lerne publish
> ```

will also automatically increase the `versioning` fo each `package`.

---


## Lerna

by default `lerna` weil look in the `packages` dir for node packages

### Build all packages

```shell
    lerna build
```
_will build all packages_


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
