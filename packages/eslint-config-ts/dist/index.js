function e(e,t){if(t==null||t>e.length)t=e.length;for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function t(t){if(Array.isArray(t))return e(t)}function r(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function n(e){if(typeof Symbol!=="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};var s=Object.keys(n);if(typeof Object.getOwnPropertySymbols==="function"){s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))}s.forEach(function(t){r(e,t,n[t])})}return e}function o(e){return t(e)||n(e)||p(e)||s()}function p(t,r){if(!t)return;if(typeof t==="string")return e(t,r);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor)n=t.constructor.name;if(n==="Map"||n==="Set")return Array.from(n);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return e(t,r)}var a;import l from"typescript-eslint";var c=["getStaticProps"],y=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return[{languageOptions:{parser:l.parser,parserOptions:i({project:e},t)}}].concat(o(f))},f=[{files:["**/*.ts","**/*.mts","**/*.cts","**/*.tsx"],rules:{"@typescript-eslint/adjacent-overload-signatures":"error","@typescript-eslint/array-type":["warn",{default:"array-simple",readonly:"array-simple"}],"@typescript-eslint/await-thenable":"error","@typescript-eslint/ban-ts-comment":"error","@typescript-eslint/ban-tslint-comment":"warn","@typescript-eslint/no-unsafe-function-type":"error","@typescript-eslint/no-wrapper-object-types":"error","@typescript-eslint/no-empty-object-type":"error","@typescript-eslint/no-restricted-types":"off","@typescript-eslint/class-literal-property-style":"warn","@typescript-eslint/consistent-generic-constructors":"warn","@typescript-eslint/consistent-indexed-object-style":"warn","@typescript-eslint/consistent-type-assertions":"off","@typescript-eslint/consistent-type-definitions":"warn","@typescript-eslint/consistent-type-exports":"warn","@typescript-eslint/consistent-type-imports":"warn","@typescript-eslint/explicit-function-return-type":["off",{allowExpressions:!0,allowTypedFunctionExpressions:!0,allowHigherOrderFunctions:!0,allowConciseArrowFunctionExpressionsStartingWithVoid:!0,allowDirectConstAssertionInArrowFunctions:!0,allowIIFEs:!0,allowedNames:c}],"@typescript-eslint/explicit-member-accessibility":"off","@typescript-eslint/explicit-module-boundary-types":["warn",{allowedNames:c}],"@typescript-eslint/member-ordering":"warn","@typescript-eslint/method-signature-style":"warn","@typescript-eslint/naming-convention":["warn",{selector:"variable",format:["camelCase","PascalCase","UPPER_CASE"]},{selector:"function",format:["camelCase","PascalCase"]},{selector:["interface","typeAlias","class"],format:["camelCase","PascalCase","UPPER_CASE"]}],"@typescript-eslint/no-base-to-string":"warn","@typescript-eslint/no-confusing-non-null-assertion":"warn","@typescript-eslint/no-confusing-void-expression":["off",{ignoreArrowShorthand:!0,ignoreVoidOperator:!0}],"@typescript-eslint/no-duplicate-enum-values":"warn","@typescript-eslint/no-dynamic-delete":"warn","@typescript-eslint/no-empty-interface":"error","@typescript-eslint/no-explicit-any":["warn",{fixToUnknown:!1,ignoreRestArgs:!1}],"@typescript-eslint/no-extra-non-null-assertion":"warn","@typescript-eslint/no-extraneous-class":"warn","@typescript-eslint/no-floating-promises":"off","@typescript-eslint/no-for-in-array":"error","@typescript-eslint/no-inferrable-types":"warn","@typescript-eslint/no-invalid-void-type":"warn","@typescript-eslint/no-meaningless-void-operator":"warn","@typescript-eslint/no-misused-new":"error","@typescript-eslint/no-misused-promises":"off","@typescript-eslint/no-namespace":["error",{allowDeclarations:!0,allowDefinitionFiles:!0}],"@typescript-eslint/no-non-null-asserted-nullish-coalescing":"error","@typescript-eslint/no-non-null-asserted-optional-chain":"error","@typescript-eslint/no-non-null-assertion":"warn","@typescript-eslint/no-redundant-type-constituents":"warn","@typescript-eslint/no-require-imports":"off","@typescript-eslint/no-this-alias":"error","@typescript-eslint/no-type-alias":"off","@typescript-eslint/no-unnecessary-boolean-literal-compare":"error","@typescript-eslint/no-unnecessary-condition":"error","@typescript-eslint/no-unnecessary-qualifier":"warn","@typescript-eslint/no-unnecessary-type-arguments":"warn","@typescript-eslint/no-unnecessary-type-assertion":"warn","@typescript-eslint/no-unnecessary-type-constraint":"warn","@typescript-eslint/no-unsafe-argument":"error","@typescript-eslint/no-unsafe-assignment":"error","@typescript-eslint/no-unsafe-call":"error","@typescript-eslint/no-unsafe-declaration-merging":"off","@typescript-eslint/no-unsafe-member-access":"error","@typescript-eslint/no-unsafe-return":"error","@typescript-eslint/no-useless-empty-export":"warn","@typescript-eslint/no-var-requires":"off","@typescript-eslint/non-nullable-type-assertion-style":"warn","@typescript-eslint/parameter-properties":"off","@typescript-eslint/prefer-as-const":"error","@typescript-eslint/prefer-enum-initializers":"warn","@typescript-eslint/prefer-for-of":"warn","@typescript-eslint/prefer-function-type":"warn","@typescript-eslint/prefer-includes":"warn","@typescript-eslint/prefer-literal-enum-member":"error","@typescript-eslint/prefer-namespace-keyword":"error","@typescript-eslint/prefer-nullish-coalescing":"warn","@typescript-eslint/prefer-optional-chain":"warn","@typescript-eslint/prefer-readonly":"warn","@typescript-eslint/prefer-reduce-type-parameter":"warn","@typescript-eslint/prefer-regexp-exec":"warn","@typescript-eslint/prefer-return-this-type":"warn","@typescript-eslint/prefer-string-starts-ends-with":"warn","@typescript-eslint/prefer-ts-expect-error":"warn","@typescript-eslint/promise-function-async":"warn","@typescript-eslint/require-array-sort-compare":"warn","@typescript-eslint/restrict-plus-operands":"error","@typescript-eslint/restrict-template-expressions":"error","@typescript-eslint/sort-type-constituents":"off","@typescript-eslint/strict-boolean-expressions":"warn","@typescript-eslint/switch-exhaustiveness-check":"warn","@typescript-eslint/triple-slash-reference":"error","@typescript-eslint/type-annotation-spacing":"off","@typescript-eslint/typedef":"off","@typescript-eslint/unbound-method":"error","@typescript-eslint/unified-signatures":"warn"}},{files:["**/*.ts","**/*.mts","**/*.cts","**/*.tsx"],rules:{"default-param-last":"off","@typescript-eslint/default-param-last":"warn","dot-notation":"off","@typescript-eslint/dot-notation":"warn","init-declarations":"off","@typescript-eslint/init-declarations":"warn","no-array-constructor":"off","@typescript-eslint/no-array-constructor":"error","no-dupe-class-members":"off","@typescript-eslint/no-dupe-class-members":"warn","no-empty-function":"off","@typescript-eslint/no-empty-function":["error",{allow:["private-constructors","protected-constructors","decoratedFunctions","overrideMethods"]}],"no-implied-eval":"off","@typescript-eslint/no-implied-eval":"error","no-invalid-this":"off","@typescript-eslint/no-invalid-this":"warn","no-loop-func":"off","@typescript-eslint/no-loop-func":"warn","no-loss-of-precision":"off","@typescript-eslint/no-loss-of-precision":"error","no-magic-numbers":"off","@typescript-eslint/no-magic-numbers":["off",{ignore:[0,1],ignoreArrayIndexes:!0,ignoreDefaultValues:!0,ignoreClassFieldInitialValues:!0,enforceConst:!0,detectObjects:!1}],"no-redeclare":"off","@typescript-eslint/no-redeclare":["warn",{ignoreDeclarationMerge:!0}],"no-restricted-imports":"off","@typescript-eslint/no-restricted-imports":"warn","no-shadow":"off","@typescript-eslint/no-shadow":"warn","no-throw-literal":"off","@typescript-eslint/only-throw-error":"warn","no-unused-expressions":"off","@typescript-eslint/no-unused-expressions":"warn","no-unused-vars":"off","@typescript-eslint/no-unused-vars":"off","no-use-before-define":"off","@typescript-eslint/no-use-before-define":"warn","no-useless-constructor":"off","@typescript-eslint/no-useless-constructor":"warn","require-await":"off","@typescript-eslint/require-await":"error","no-return-await":"off","@typescript-eslint/return-await":"warn","@typescript-eslint/explicit-member-accessibility":["warn",{accessibility:"no-public",overrides:{accessors:"off",constructors:"no-public",methods:"no-public",properties:"no-public",parameterProperties:"explicit"}}],"@typescript-eslint/explicit-function-return-type":["off",{allowExpressions:!0,allowTypedFunctionExpressions:!0,allowHigherOrderFunctions:!0,allowConciseArrowFunctionExpressionsStartingWithVoid:!0,allowDirectConstAssertionInArrowFunctions:!0,allowIIFEs:!0,allowedNames:c}],"@typescript-eslint/explicit-module-boundary-types":"error"}},{files:["**/*.tsx"],rules:{"@typescript-eslint/naming-convention":["warn",{selector:"variable",format:["camelCase","PascalCase","UPPER_CASE"]},{selector:"function",format:["camelCase","PascalCase"]},{selector:["interface","typeAlias","class"],format:["camelCase","PascalCase","UPPER_CASE"]}]}}],u=(a=l).config.apply(a,[l.configs.recommendedTypeChecked,{languageOptions:{parser:l.parser,parserOptions:{project:["./eslint.config.ts","./packages/*/eslint.config.ts","./packages/apps/*/eslint.config.ts","./packages/libs/*/*/eslint.config.ts","./packages/libs/*/*/*/eslint.config.ts"],projectService:!0,tsconfigRootDir:__dirname}}}].concat(o(f)));export{u as config,y as configure,f as rules};