const eslintPluginImport = require('eslint-plugin-import');
const configs = require('eslint-plugin-import').configs;
const {fixupPluginRules} = require("@eslint/compat");

/** @type { import("eslint").Linter.FlatConfig[] } */
module.exports = [
    {
        ...configs['typescript'],
        plugins: {
            "import": fixupPluginRules(eslintPluginImport)
        },
        settings: {
            "import/internal-regex": "^packages/",
            "import/parsers": {
                "@typescript-eslint/parser": [
                    ".ts",
                    ".tsx"
                ]
            },
            "import/extensions": [
                ".js",
                ".jsx"
            ],
            "import/resolver": {
                "typescript": {
                    "alwaysTryTypes": true
                },
                "node": {
                    "extensions": [
                        ".js",
                        ".jsx"
                    ]
                }
            }
        },
        files: ["**/*.js", "**/*.ts", "**/*.mjs","**/*.cjs", "*cts", "*mts","**/*.jsx","**/*.tsx"],
        rules: {
            /* helpful Warning */

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/export.md
            // Reports funny business with exports, like repeated exports of names or defaults.
            "import/export": 2,

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-deprecated.md
            // Reports use of a deprecated name, as indicated by a JSDoc block with a `@deprecated` tag or TomDoc `Deprecated:` comment.
            // * ci | continuous integration
            // ! ci
            "import/no-deprecated": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-empty-named-blocks.md
            // Reports the use of empty named import blocks.
            "import/no-empty-named-blocks": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md
            // Forbid the import of external modules that are not declared in the package.json's dependencies, devDependencies, optionalDependencies, peerDependencies, or bundledDependencies.
            // The closest parent package.json will be used. If no package.json is found, the rule will not lint anything.
            // This behavior can be changed with the rule option packageDir.
            // Normally ignores imports of modules marked internal, but this can be changed with the rule option includeInternal.
            // Type imports can be verified by specifying includeTypes.
            "import/no-extraneous-dependencies": [
                "off",
                {
                    "devDependencies": [
                        "**/*.test.js",
                        "**/*.test.ts",
                        "packages/**/*"
                    ],
                    "includeInternal": true,
                    "optionalDependencies": false,
                    "peerDependencies": false,
                    "packageDir": "."
                }
            ],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md
            // Forbids the use of mutable exports with `var` or `let`.
            "import/no-mutable-exports": 2,

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default.md
            // Reports use of an exported name as the locally imported name of a default export.
            // Rationale: using an exported name as the name of the default export is likely...
            // - misleading: others familiar with foo.js probably expect the name to be foo
            // - a mistake: only needed to import bar and forgot the brackets (the case that is prompting this)
            // ! ci only
            // * when accounting an error make sure your not accidentally also exporting a type with the same name.
            "import/no-named-as-default": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-as-default-member.md
            // Reports use of an exported name as a property on the default export.
            // Rationale: Accessing a property that has a name that is shared by an exported name from the same module is likely to be a mistake.
            // Named import syntax looks very similar to destructuring assignment. It's easy to make the (incorrect) assumption that named exports are also accessible as properties of the default export.
            // Furthermore, in Babel 5 this is actually how things worked. This was fixed in Babel 6. Before upgrading an existing codebase to Babel 6, it can be useful to run this lint rule.
            // ! overlap with @typescript-eslint
            "import/no-named-as-default-member": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unused-modules.md
            // Reports:
            // - modules without any exports
            // - individual exports not being statically imported or required from other modules in the same project
            // - dynamic imports are supported if argument is a literal string
            // ! ci
            "import/no-unused-modules": ["off", {
                "unusedExports": true,
                "ignoreExports": ["node_modules/*"],
                "src": ["components"]
            }],

            /* Module systems */

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md
            // Reports `require([array], ...)` and `define([array], ...)` function calls at the module scope.
            // Will not report if !=2 arguments, or first argument is not a literal array.
            // Intended for temporary use when migrating to pure ES6 modules.
            "import/no-amd": 2,

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md
            // Reports require([string]) function calls. Will not report if >1 argument, or single argument is not a literal string.
            // Reports module.exports or exports.*, also.
            // Intended for temporary use when migrating to pure ES6 modules.
            "import/no-commonjs": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-import-module-exports.md
            // Reports the use of import declarations with CommonJS exports in any module except for the main module.
            // If you have multiple entry points or are using `js:next` this rule includes an `exceptions` option which you can use to exclude those files from the rule.
            "import/no-import-module-exports": 2,

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-nodejs-modules.md
            // Forbid the use of Node.js builtin modules. Can be useful for client-side web projects that do not have access to those modules.
            "import/no-nodejs-modules": 0,

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/unambiguous.md
            // Warn if a `module` could be mistakenly parsed as a `script` by a consumer leveraging `Unambiguous JavaScript Grammar` to determine correct parsing goal.
            // Will respect the `parserOptions.sourceType` from ESLint config, i.e. files parsed as `script` per that setting will not be reported.
            // This plugin uses `Unambiguous JavaScript Grammar` internally to decide whether dependencies should be parsed as modules and searched for exports matching the `import`ed names,
            // so it may be beneficial to keep this rule on even if your application will run in an explicit `module`-only environment.
            "import/unambiguous": 2,

            /* Static analysis */

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/default.md
            // If a default import is requested, this rule will report if there is no default export in the imported module.
            // For `ES7`, reports if a default is named and exported but is not found in the referenced module.
            // Note: for packages, the plugin will find exported names from `jsnext:main`, if present in `package.json`.
            // Redux's npm module includes this key, and thereby is lintable, for example.
            // A module path that is `ignored` or not `unambiguously an ES module` will not be reported when imported.
            // ! overlap with @typescript-eslint
            "import/default": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/named.md
            // Verifies that all named imports are part of the set of named exports in the referenced module.
            // For `export`, verifies that all named exports exist in the referenced module.
            // Note: for packages, the plugin will find exported names from `jsnext:main` (deprecated) or `module`, if present in `package.json`. Redux's npm module includes this key, and thereby is lintable, for example.
            // A module path that is `ignored` or not `unambiguously an ES module` will not be reported when imported. Note that type imports and exports, as used by `Flow`, are always ignored.
            // ! overlap with @typescript-eslint
            "import/named": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/namespace.md
            // Enforces names exist at the time they are dereferenced,
            // when imported as a full namespace (i.e. `import * as foo from './foo'; foo.bar();` will report if `bar` is not exported by `./foo`.).
            // Will report at the import declaration if there are no exported names found.
            // Also, will report for computed references (i.e. `foo["bar"]()`).
            // Reports on assignment to a member of an imported namespace.
            // Note: for packages, the plugin will find exported names from `jsnext:main`, if present in `package.json`.
            // Redux's npm module includes this key, and thereby is lintable, for example.
            // A module path that is `ignored` or not `unambiguously an ES module` will not be reported when imported.
            // ! overlap with @typescript-eslint
            "import/namespace": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-absolute-path.md
            // Node.js allows the import of modules using an absolute path such as `/home/xyz/file.js`.
            // That is a bad practice as it ties the code using it to your computer,
            // and therefore makes it unusable in packages distributed on `npm` for instance.
            // This rule forbids the import of modules using absolute paths.
            "import/no-absolute-path": 2,

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md
            // Ensures that there is no resolvable path back to this module via its dependencies.
            // This includes cycles of depth 1 (imported module imports me) to `"∞"` (or Infinity), if the `maxDepth` option is not set.
            // By default, this rule only detects cycles for ES6 imports, but see the `no-unresolved options` as this rule also supports the same `commonjs` and `amd` flags.
            // However, these flags only impact which import types are linted; the import/export infrastructure only registers `import` statements in dependencies,
            // so cycles created by `require` within imported modules may not be detected.
            // ! ci
            "import/no-cycle": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-dynamic-require.md
            // The `require` method from CommonJS is used to import modules from different files.
            // Unlike the ES6 `import` syntax, it can be given expressions that will be resolved at runtime.
            // While this is sometimes necessary and useful, in most cases it isn't.
            // Using expressions (for instance, concatenating a path and variable) as the argument makes it harder for tools to do static code analysis,
            // or to find where in the codebase a module is used.
            // This rule forbids every call to `require()` that uses expressions for the module name argument.
            "import/no-dynamic-require": 2,

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-internal-modules.md
            // Use this rule to prevent importing the submodules of other modules.
            // This rule has two mutally exclusive options that are arrays of `minimatch/glob patterns` patterns:
            // - `allow` that include paths and import statements that can be imported with reaching.
            // - `forbid` that exclude paths and import statements that can be imported with reaching.
            // * nx requires relative imports for apps
            "import/no-internal-modules": [
                "off",
                {
                    "allow": [
                        "@mui/icons-material/*",
                        "@mui/material/*",
                        "next/*",
                        "@apollo/*",
                        "next-i18next/*",
                        "nextjs-routes/*",
                        "next-seo/**",
                        "@apollo/*",
                        "@hoc/*",
                        "@graphql/generated/*",
                        "lodash/*",
                        "@public/**/*",
                        "react-mui/*",
                        "@graphql/*",
                        "@graphql/generated/*",
                        "@iconify/**",
                        "next-auth/*",
                        "@theme/*",
                        "**/*.css"
                    ]
                }
            ],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-packages.md
            // Use this rule to prevent importing packages through relative paths.
            // It's useful in Yarn/Lerna workspaces, were it's possible to import a sibling package using `../package` relative path,
            // while direct `package` is the correct one.
            // +(fixable) The `--fix` option on the [command line] automatically fixes problems reported by this rule.
            "import/no-relative-packages": 2,

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
            // Ensures an imported module can be resolved to a module on the local filesystem,
            // as defined by standard Node require.resolve behavior.
            // See settings for customization options for the resolution (i.e. additional filetypes, NODE_PATH, etc.)
            // This rule can also optionally report on unresolved modules in CommonJS require('./foo')
            // calls and AMD require(['./foo'], function (foo) {...}) and define(['./foo'], function (foo) {...}).
            // To enable this, send { commonjs: true/false, amd: true/false } as a rule option.
            // Both are disabled by default.
            // If you are using Webpack, see the section on resolvers.
            "import/no-unresolved": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-relative-parent-imports.md
            // Use this rule to prevent imports to folders in relative parent paths.
            // This rule is useful for enforcing tree-like folder structures instead of complex graph-like folder structures.
            // While this restriction might be a departure from Node's default resolution style, it can lead large,
            // complex codebases to be easier to maintain.
            // If you've ever had debates over "where to put files" this rule is for you.
            // ! can not resolve path aliases from typescript and node
            "import/no-relative-parent-imports": "off",

            // * used in favor for import/no-relative-parent-imports
            // ! nx requires relative imports for apps
            "no-restricted-imports": [
                "off",
                {
                    "patterns": [
                        {
                            "group": [
                                "..*"
                            ],
                            "message": "Usage of relative parent imports is not allowed."
                        }
                    ]
                }
            ],
            /* Style guide */

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/consistent-type-specifier-style.md
            // This rule either enforces or bans the use of inline type-only markers for named imports.
            /* !deactivated because it causes error */
            "import/consistent-type-specifier-style": ["off", "prefer-top-level"],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/dynamic-import-chunkname.md
            // This rule runs against `import()` by default,
            // but can be configured to also run against an alternative dynamic-import function,
            // e.g. 'dynamicImport.' You can also configure the regex format you'd like to accept for the webpackChunkName - for example,
            // if we don't want the number 6 to show up in our chunk names:
            /* !deactivated because it causes error */
            "dynamic-import-chunkname": ["off", {
                importFunctions: ["dynamicImport"],
                webpackChunknameFormat: "[a-zA-Z0-57-9-/_]+"
            }],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/exports-last.md
            // This rule enforces that all exports are declared at the bottom of the file.
            // This rule will report any export declarations that comes before any non-export statements.
            "import/exports-last": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md
            // Some file resolve algorithms allow you to omit the file extension within the import source path.
            // For example the `node` resolver can resolve `./foo/bar` to the absolute path `/User/someone/foo/bar.js`
            // because the `.js` extension is resolved automatically by default.
            // Depending on the resolver you can configure more extensions to get resolved automatically.
            // In order to provide a consistent use of file extensions across your code base,
            // this rule can enforce or disallow the use of certain file extensions.
            // ! https://typescript-eslint.io/linting/troubleshooting/performance-troubleshooting/#importextensions
            // ! you want to enforce file extensions are always used and you're NOT using `moduleResolution`
            // ! `node16` or `nodenext`, then there's not really a good alternative for you,
            // ! and you should continue using the `import/extensions` lint rule.
            "import/extensions": [
                "off",
                "always",
                {
                    ignorePackages: true,
                    pattern: {
                        "svg": "always",
                        "js": "never",
                        "ts": "never",
                        "tsc": "never",
                        "jsx": "never",
                        "tsx": "never",
                        "json": "never"
                    }
                }
            ],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/first.md
            // This rule reports any imports that come after non-import statements.
            "import/first": "warn",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/group-exports.md
            // Reports when named exports are not grouped together in a single export declaration
            // or when multiple assignments to CommonJS module.exports or
            // exports object are present in a single file.
            // Rationale: An export declaration or module.exports assignment can appear anywhere in the code.
            // By requiring a single export declaration all your exports will remain at one place,
            // making it easier to see what exports a module provides.
            "import/group-exports": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/max-dependencies.md
            // Forbid modules to have too many dependencies (`import` or `require` statements).
            // This is a useful rule because a module with too many dependencies is a code smell, and usually indicates the module is doing too much and/or should be broken up into smaller modules.
            // Importing multiple named exports from a single module will only count once (e.g. `import {x, y, z} from './foo'` will only count as a single dependency).
            "import/max-dependencies": ["warn", {
                "max": 10,
                "ignoreTypeImports": true,
            }],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
            // Enforces having one or more empty lines after the last top-level import statement or require call. +(fixable) The `--fix` option on the [command line] automatically fixes problems reported by this rule.
            // * let a formatter do the work
            "import/newline-after-import": ["off", {"count": 2}],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-anonymous-default-export.md
            // Reports if a module's default export is unnamed. This includes several types of unnamed data types; literals, object expressions, arrays, anonymous functions, arrow functions, and anonymous class declarations.
            // Ensuring that default exports are named helps improve the grepability of the codebase by encouraging the re-use of the same identifier for the module's default export at its declaration site and at its import sites.
            "import/no-anonymous-default-export": ["error", {
                "allowArray": false,
                "allowArrowFunction": false,
                "allowAnonymousClass": false,
                "allowAnonymousFunction": false,
                "allowCallExpression": true, // The true value here is for backward compatibility
                // "allowNew": false, // creates error
                "allowLiteral": false,
                "allowObject": false
            }],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-default-export.md
            // Prohibit default exports. Mostly an inverse of `prefer-default-export`.
            // * should prefer names export and prohibit default exports
            "import/no-default-export": "error",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-duplicates.md
            // Reports if a resolved path is imported more than once. +(fixable) The --fix option on the [command line] automatically fixes some problems reported by this rule.
            // ESLint core has a similar rule (no-duplicate-imports), but this version is different in two key ways:
            // the paths in the source code don't have to exactly match, they just have to point to the same module on the filesystem. (i.e. ./foo and ./foo.js)
            // this version distinguishes Flow type imports from standard imports. (#334)
            "import/no-duplicates": "error",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-default.md
            // Reports use of a default export as a locally named import.
            // Rationale: the syntax exists to import default exports expressively, let's use it.
            // Note that type imports, as used by `Flow`, are always ignored.
            "import/no-named-default": "error",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-named-export.md
            // Prohibit named exports. Mostly an inverse of `no-default-export`.
            // * in favor of named exports
            "import/no-named-export": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-namespace.md
            // Enforce a convention of not using namespace (a.k.a. "wildcard" *) imports.
            "import/no-namespace": "warn",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unassigned-import.md
            // With both CommonJS' `require` and the ES6 modules' `import` syntax,
            // it is possible to import a module but not to use
            // its result. This can be done explicitly by not assigning the module to as variable.
            // Doing so can mean either of the following things:
            // The module is imported but not used
            // - The module has side-effects (like should).
            // - Having side-effects, makes it hard to know whether the module is actually used or can be removed.
            //   It can also make it harder to test or mock parts of your application.
            // This rule aims to remove modules with side-effects by reporting when a module is imported but not assigned.
            "import/no-unassigned-import": [
                "error",
                {
                    "allow": [
                        "**/*.css"
                    ]
                }
            ],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md
            // Enforce a convention in the order of `require()` / `import` statements.
            "import/order": [
                "warn",
                {
                    "groups": [
                        "builtin",
                        "external",
                        "internal",
                        "parent",
                        "sibling",
                        "index",
                        "object",
                        "type"
                    ],
                    "newlines-between": "always",
                    "alphabetize": {"order": "asc", "caseInsensitive": true},
                    "warnOnUnassignedImports": true
                }
            ],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/prefer-default-export.md
            // In exporting files, this rule checks if there is default export or not.
            "import/prefer-default-export": [
                "off",
                //{ "target": "single"  }  // no items allowed
            ],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-restricted-paths.md
            // Some projects contain files which are not always meant to be executed in the same environment.
            // For example consider a web application that contains specific code for the server and some specific code for the browser/client.
            // In this case you don’t want to import server-only files in your client code.
            // In order to prevent such scenarios this rule allows you to define restricted zones where you can forbid files from imported if they match a specific path.
            "import/no-restricted-paths": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-self-import.md
            // Forbid a module from importing itself. This can sometimes happen during refactoring.
            "import/no-self-import": "error",

            // // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md
            // // Ensures an imported module can be resolved to a module on the local filesystem,
            // // as defined by standard Node `require.resolve` behavior.
            // "import/no-unresolved": "off",

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md
            // Use this rule to prevent unnecessary path segments in import and require statements.
            "import/no-useless-path-segments": ["error", {
                noUselessIndex: true
            }],

            // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-webpack-loader-syntax.md
            // Forbid Webpack loader syntax in imports.
            // Webpack allows specifying the loaders to use in the import source string using a special syntax like this:
            // This syntax is non-standard, so it couples the code to Webpack.
            // The recommended way to specify Webpack loader configuration is in a Webpack configuration file.
            "import/no-webpack-loader-syntax": "off"
        }
    },
    {
        files: ["**/src/app/**/*.tsx","**/src/app/**/*.jsx","**/src/app/**/*.js","**/src/app/**/*.ts"],
        rules: {
            // * framework specific exceptions. Next.js ... .etc
            "import/no-default-export": "off",
            "import/prefer-default-export": [
                "error",
                {
                    "target": "any"
                }
            ]
        }
    }
];
