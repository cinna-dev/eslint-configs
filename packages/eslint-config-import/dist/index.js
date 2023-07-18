module.exports={extends:["plugin:import/typescript"],plugins:["import"],settings:{"import/internal-regex":"^packages/","import/parsers":{"@typescript-eslint/parser":[".ts",".tsx"]},"import/extensions":[".js",".jsx"],"import/resolver":{typescript:{alwaysTryTypes:!0},node:{extensions:[".js",".jsx"]}}},rules:{"import/export":2,"import/no-deprecated":"off","import/no-empty-named-blocks":"off","import/no-extraneous-dependencies":["off",{devDependencies:["**/*.test.js","**/*.test.ts","packages/**/*"],includeInternal:!0,optionalDependencies:!1,peerDependencies:!1,packageDir:"."}],"import/no-mutable-exports":2,"import/no-named-as-default":"off","import/no-named-as-default-member":"off","import/no-unused-modules":["off",{unusedExports:!0,ignoreExports:["node_modules/*"],src:["components"]}],"import/no-amd":2,"import/no-commonjs":"off","import/no-import-module-exports":2,"import/no-nodejs-modules":0,"import/unambiguous":2,"import/default":"off","import/named":"off","import/namespace":"off","import/no-absolute-path":2,"import/no-cycle":"off","import/no-dynamic-require":2,"import/no-internal-modules":["off",{allow:["@mui/icons-material/*","@mui/material/*","next/*","@apollo/*","next-i18next/*","nextjs-routes/*","next-seo/**","@apollo/*","@hoc/*","@graphql/generated/*","lodash/*","@public/**/*","react-mui/*","@graphql/*","@graphql/generated/*","@iconify/**","next-auth/*","@theme/*","**/*.css"]}],"import/no-relative-packages":2,"import/no-unresolved":2,"import/no-relative-parent-imports":"off","no-restricted-imports":["off",{patterns:[{group:["..*"],message:"Usage of relative parent imports is not allowed."}]}],"import/consistent-type-specifier-style":["off","prefer-top-level"],"dynamic-import-chunkname":["off",{importFunctions:["dynamicImport"],webpackChunknameFormat:"[a-zA-Z0-57-9-/_]+"}],"import/exports-last":"off","import/extensions":["off","always",{ignorePackages:!0,pattern:{svg:"always",js:"never",ts:"never",tsc:"never",jsx:"never",tsx:"never",json:"never"}}],"import/first":"warn","import/group-exports":"off","import/max-dependencies":["warn",{max:10,ignoreTypeImports:!0}],"import/newline-after-import":["off",{count:2}],"import/no-anonymous-default-export":["error",{allowArray:!1,allowArrowFunction:!1,allowAnonymousClass:!1,allowAnonymousFunction:!1,allowCallExpression:!0,allowLiteral:!1,allowObject:!1}],"import/no-default-export":"error","import/no-duplicates":"error","import/no-named-default":"error","import/no-named-export":"off","import/no-namespace":"warn","import/no-unassigned-import":["error",{allow:["**/*.css"]}],"import/order":["warn",{groups:["builtin","external","internal","parent","sibling","index","object","type"],"newlines-between":"always",alphabetize:{order:"asc",caseInsensitive:!0},warnOnUnassignedImports:!0}],"import/prefer-default-export":["off"],"import/no-restricted-paths":"off","import/no-self-import":"error","import/no-unresolved":"off","import/no-useless-path-segments":["error",{noUselessIndex:!0}],"import/no-webpack-loader-syntax":"off"},overrides:[{files:["**/pages/**/*.tsx","**/app/**/*.tsx"],rules:{"import/no-default-export":"off","import/prefer-default-export":["error",{target:"any"}]}}]};