/* @ts-check */
import tseslint,  { type ConfigArray } from 'typescript-eslint';
import { dirname } from 'node:path';
// import { fileURLToPath } from 'node:url';

import type {Linter} from 'eslint';

// @ts-ignore
const __dirname = import.meta.dirname

const returnTypeWhitelist = [
    "getStaticProps"
];

export const configure = (projectUrl = '' , parserOptions = {}):Linter.Config[] => [
    {
        languageOptions: {
            parser: tseslint.parser as  Linter.Parser,
            parserOptions: {
                project:projectUrl,
                ...parserOptions,
            },
        },
    },
    ...rules
];

export const rules:Linter.Config[]  = [
    {
        files: ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"],
        rules: {
            // https://typescript-eslint.io/rules/adjacent-overload-signatures/
            // Require that function overload signatures be consecutive.
            // Function overload signatures represent multiple ways a function can be called,
            // potentially with different return types.
            // It's typical for an interface or type alias describing a function to place all overload signatures next to each other.
            /* If Signatures placed elsewhere in the type are easier to be missed by future developers reading the code. */
            "@typescript-eslint/adjacent-overload-signatures": "error",

            // https://typescript-eslint.io/rules/array-type/
            // Require consistently using either `T[]` or `Array<T>` for arrays.
            // TypeScript provides two equivalent ways to define an array type: `T[]` and `Array<T>`.
            // The two styles are functionally equivalent.
            /* Using the same style consistently across your codebase makes it easier for developers to read and understand array types. */
            "@typescript-eslint/array-type": [
                "warn",
                {
                    default: "array-simple",
                    readonly: "array-simple",
                },
            ],

            // https://typescript-eslint.io/rules/await-thenable/
            // Disallow awaiting a value that is not a Thenable.
            // A "Thenable" value is an object with has a `then` method, such as a Promise.
            // The `await` keyword is generally used to retrieve the result of calling a Thenable's `then` method.
            // If the `await` keyword is used on a value that is not a Thenable, the value is directly resolved immediately.
            // While doing so is valid JavaScript, it is often a programmer error,
            /* such as forgetting to add parenthesis to call a function that returns a Promise. */
            "@typescript-eslint/await-thenable": "error",

            // https://typescript-eslint.io/rules/ban-ts-comment
            // Disallow `@ts-<directive>` comments or require descriptions after directives.
            // TypeScript provides several directive comments that can be used to alter how it processes files.
            // Using these to suppress TypeScript compiler errors reduces the effectiveness of TypeScript overall.
            /* Instead, it's generally better to correct the types of code, to make directives unnecessary. */
            "@typescript-eslint/ban-ts-comment": "error",

            // https://typescript-eslint.io/rules/ban-tslint-comment/
            // Disallow `// tslint:<rule-flag>` comments.
            // Useful when migrating from TSLint to ESLint.
            /* Once TSLint has been removed, this rule helps locate TSLint annotations (e.g. // tslint:disable). */
            "@typescript-eslint/ban-tslint-comment": "warn",

            // https://typescript-eslint.io/rules/ban-types/
            // Disallow certain types.
            // Some built-in types have aliases, while some types are considered dangerous or harmful.
            // It's often a good idea to ban certain types to help with consistency and safety.
            // This rule bans specific types and can suggest alternatives.
            /* Note that it does not ban the corresponding runtime objects from being used. */
            /* ! deprecated */
            // "@typescript-eslint/ban-types": "error",

            // new
            // https://typescript-eslint.io/rules/no-unsafe-function-type/
            // TypeScript's built-in Function type allows being called with any number of arguments and returns type any.
            // Function also allows classes or plain objects that happen to possess all properties of the Function class.
            // It's generally better to specify function parameters and return types with the function type syntax.
            '@typescript-eslint/no-unsafe-function-type': 'error',

            // new
            // https://typescript-eslint.io/rules/no-wrapper-object-types/
            // TypeScript defines several confusing pairs of types that look very similar to each other,
            // but actually mean different things: boolean/Boolean, number/Number, string/String, bigint/BigInt,
            // symbol/Symbol, object/Object. In general, only the lowercase variant is appropriate to use.
            // Therefore, this rule enforces that you only use the lowercase variant.
            // As a result, using the lowercase type names like number in TypeScript types instead of
            // the uppercase names like Number is a better practice that describes code more accurately.
            '@typescript-eslint/no-wrapper-object-types': 'error',

            // new
            // https://typescript-eslint.io/rules/no-empty-object-type/
            // The {}, or "empty object" type in TypeScript is a common source of confusion for
            // developers unfamiliar with TypeScript's structural typing. {} represents any non-nullish value,
            // including literals like 0 and "":
            // In other words, the "empty object" type {} really means "any value that is defined".
            // That includes arrays, class instances, functions, and primitives such as string and symbol.
            // To avoid confusion around the {} type allowing any non-nullish value, this rule bans usage of the {} type.
            // That includes interfaces and object type aliases with no fields.
            '@typescript-eslint/no-empty-object-type': 'error',

            // new
            // https://typescript-eslint.io/rules/no-restricted-types/
            // It can sometimes be useful to ban specific types from being used in type annotations.
            // For example, a project might be migrating from using one type to another,
            // and want to ban references to the old type.
            //
            // This rule can be configured to ban a list of specific types and can suggest alternatives.
            // Note that it does not ban the corresponding runtime objects from being used.
            '@typescript-eslint/no-restricted-types': 'off',

            // https://typescript-eslint.io/rules/class-literal-property-style/
            // Enforce that literals on classes are exposed in a consistent style.
            // Some TypeScript applications store literal values on classes using fields with the readonly modifier to prevent them from being reassigned.
            // When writing TypeScript libraries that could be used by JavaScript users, however,
            // it's typically safer to expose these literals using getters,
            // since the readonly modifier is enforced at compile type.
            // This rule aims to ensure that literals exposed by classes are done so consistently,
            // in one of the two style described above.
            /* By default this rule prefers the fields style as it means JS doesn't have to setup & teardown a function closure. */
            "@typescript-eslint/class-literal-property-style": "warn",

            // https://typescript-eslint.io/rules/consistent-generic-constructors/
            // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
            // When constructing a generic class,
            /* you can specify the type arguments on either the left-hand side (as a type annotation) or the right-hand side (as part of the constructor call) */
            "@typescript-eslint/consistent-generic-constructors": "warn",

            // https://typescript-eslint.io/rules/consistent-indexed-object-style/
            // Require or disallow the Record type.
            // TypeScript supports defining object show keys can be flexible using an index signature.
            // TypeScript also has a builtin type named Record to create an empty object defining only an index signature. For example,
            /* the following types are equal */
            "@typescript-eslint/consistent-indexed-object-style": "warn",

            // https://typescript-eslint.io/rules/consistent-type-assertions/
            // Enforce consistent usage of type assertions.
            // Angle brackets: <Type>value
            // As: value as Type
            // This rule aims to standardize the use of type assertion style across the codebase.
            // Keeping to one syntax consistently helps with code readability.
            // * interface are not really type-safe as they can be merged together inside the whole project
            /* * therefore you should chose between interface and types on a per situation basis */
            "@typescript-eslint/consistent-type-assertions": "off",

            // https://typescript-eslint.io/rules/consistent-type-definitions/
            // Enforce type definitions to consistently use either `interface` or `type`.
            // The two are generally very similar, and can often be used interchangeably.
            /* Using the same type declaration style consistently helps with code readability. */
            "@typescript-eslint/consistent-type-definitions": "warn",

            // https://typescript-eslint.io/rules/consistent-type-exports/
            // Enforce consistent usage of type exports.
            // TypeScript allows specifying a `type` keyword on exports to indicate that the export exists only in the type system, not at runtime.
            /* This allows transpilers to drop exports without knowing the types of the dependencies. */
            "@typescript-eslint/consistent-type-exports": "warn",

            // https://typescript-eslint.io/rules/consistent-type-imports/
            // Enforce consistent usage of type imports.
            // TypeScript allows specifying a `type` keyword on imports to indicate that the export exists only in the type system,
            /* not at runtime. This allows transpilers to drop imports without knowing the types of the dependencies. */
            "@typescript-eslint/consistent-type-imports": "warn",

            /* need more research!! */
            // https://typescript-eslint.io/rules/explicit-function-return-type/
            // Require explicit return types on functions and class methods.
            // Functions in TypeScript often don't need to be given an explicit return type annotation. Leaving off the return type is less code to read or write and allows the compiler to infer it from the contents of the function.
            // However, explicit return types do make it visually more clear what type is returned by a function.
            /* They can also speed up TypeScript type checking performance in large codebases with many large functions. */
            "@typescript-eslint/explicit-function-return-type": ["off", {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowIIFEs: true,
                allowedNames:returnTypeWhitelist,
            }],

            // https://typescript-eslint.io/rules/explicit-member-accessibility/
            // Require explicit accessibility modifiers on class properties and methods.
            // TypeScript allows placing explicit `public`, `protected`, and `private` accessibility modifiers in front of class members.
            // The modifiers exist solely in the type system and just server to describe who is allowed to access those members.
            // Leaving off accessibility modifiers makes for less code to read and write. Members are `public` by default.
            // However, adding in explicit accessibility modifiers can be helpful in codebases with many classes for enforcing proper privacy of members.
            /* Some developers also find it preferable for code readability to keep member publicity explicit. */
            "@typescript-eslint/explicit-member-accessibility": "off",

            // https://typescript-eslint.io/rules/explicit-module-boundary-types/
            // Require explicit return and argument types on exported functions' and classes' public class methods.
            // Explicit types for function return values and arguments makes it clear to any calling code what is the module boundary's input and output. Adding explicit type annotations for those types can help improve code readability.
            /* It can also improve TypeScript type checking performance on larger codebases. */
            "@typescript-eslint/explicit-module-boundary-types": [
                "off",
                {
                    "allowedNames": returnTypeWhitelist
                }
            ],

            // https://typescript-eslint.io/rules/member-delimiter-style/
            /* Require a specific member delimiter style for interfaces and type literals. */
            // deprecated
            // "@typescript-eslint/member-delimiter-style": "warn",

            // https://typescript-eslint.io/rules/member-ordering/
            // Require a consistent member declaration order.
            // This rule aims to standardize the way classes, interfaces, and type literals are structured and ordered.
            /* A consistent ordering of fields, methods and constructors can make code easier to read, navigate, and edit. */
            "@typescript-eslint/member-ordering": "warn",

            // https://typescript-eslint.io/rules/method-signature-style/
            /* Enforce using a particular method signature syntax. */
            "@typescript-eslint/method-signature-style": "warn",

            // https://typescript-eslint.io/rules/naming-convention/
            // Enforce naming conventions for everything across a codebase.
            // Enforcing naming conventions helps keep the codebase consistent,
            // and reduces overhead when thinking about how to name a variable.
            // Additionally, a well-designed style guide can help communicate intent,
            // such as by enforcing all private properties begin with an `_`,
            /* and all global-level constants are written in `UPPER_CASE`. */

            "@typescript-eslint/naming-convention": [
                "warn",
                {
                    "selector": "variable",
                    "format": [
                        "camelCase",
                        "PascalCase",
                        "UPPER_CASE"
                    ]
                },
                {
                    "selector": "function",
                    "format": [
                        "camelCase",
                        "PascalCase"
                    ]
                },
                {
                    "selector": [
                        "interface",
                        "typeAlias",
                        "class"
                    ],
                    "format": [
                        "camelCase",
                        "PascalCase",
                        "UPPER_CASE"
                    ]
                }
            ],

            // https://typescript-eslint.io/rules/no-base-to-string/
            // Require `.toString()` to only be called on objects which provide useful information when stringified.
            // JavaScript will call `toString()` on an object when it is converted to a string,
            // such as when `+` adding to a string or in `${}` template literals.
            // The default Object `.toString()` returns `"[object Object]"`, which is often not what was intended.
            /* This rule reports on stringified values that aren't primitives and don't define a more useful `.toString()` method. */
            "@typescript-eslint/no-base-to-string": "warn",

            // https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
            // Disallow non-null assertion in locations that may be confusing.
            // Using a non-null assertion (`!`) next to an assign or equals check (`=` or `==` or `===`)
            /* creates code that is confusing as it looks similar to a not equals check (`!=` `!==`). */
            "@typescript-eslint/no-confusing-non-null-assertion": "warn",

            // https://typescript-eslint.io/rules/no-confusing-void-expression/
            // Require expressions of type void to appear in statement position.
            // `void` in TypeScript refers to a function return that is meant to be ignored.
            // Attempting to use a `void`-typed value, such as storing the result of a called function in a variable, is often a sign of a programmer error.
            // `void` can also be misleading for other developers even if used correctly.
            // This rule prevents `void` type expressions from being used in misleading locations such as being assigned to a variable,
            /* provided as a function argument, or returned from a function. */
            /* deactivated for performance reasons */
            "@typescript-eslint/no-confusing-void-expression": [
                "off",
                {ignoreArrowShorthand: true, ignoreVoidOperator: true},
            ],

            // https://typescript-eslint.io/rules/no-duplicate-enum-values/
            // Disallow duplicate enum member values.
            // Although TypeScript supports duplicate enum member values, people usually expect members to have unique values within the same enum.
            /* Duplicate values can lead to bugs that are hard to track down. */
            "@typescript-eslint/no-duplicate-enum-values": "warn",

            // https://typescript-eslint.io/rules/no-dynamic-delete/
            // Disallow using the `delete` operator on computed key expressions.
            // Deleting dynamically computed keys can be dangerous and in some cases not well optimized.
            // Using the `delete` operator on keys that aren't runtime constants could be a sign that you're using the wrong data structures.
            /* Using `Objects` with added and removed keys can cause occasional edge case bugs, such as if a key is named `"hasOwnProperty"`. */
            "@typescript-eslint/no-dynamic-delete": "warn",

            // https://typescript-eslint.io/rules/no-empty-interface/
            // Disallow the declaration of empty interfaces.
            // An empty interface in TypeScript does very little: any non-nullable value is assignable to `{}`.
            // Using an empty interface is often a sign of programmer error,
            // such as misunderstanding the concept of '{}' or forgetting to fill in fields.
            /* This rule aims to ensure that only meaningful interfaces are declared in the code. */
            "@typescript-eslint/no-empty-interface": "error",

            // https://typescript-eslint.io/rules/no-explicit-any/
            // Disallow the `any` type.
            // The `any` type in TypeScript is a dangerous "escape hatch" from the type system.
            // Using `any` disables many type checking rules and is generally best used only as a last resort or when prototyping code.
            // This rule reports on explicit uses of the any keyword as a type annotation.
            // TypeScript's `--noImplicitAny` compiler option prevents an implied any,
            /* but doesn't prevent any from being explicitly used the way this rule does. */
            "@typescript-eslint/no-explicit-any": [
                "warn",
                {fixToUnknown: false, ignoreRestArgs: false},
            ],

            // https://typescript-eslint.io/rules/no-extra-non-null-assertion/
            // Disallow extra non-null assertions.
            // The `!` non-null assertion operator in TypeScript is used to assert that a value's type does not include null or undefined.
            /* Using the operator any more than once on a single value does nothing. */
            "@typescript-eslint/no-extra-non-null-assertion": "warn",

            // https://typescript-eslint.io/rules/no-extraneous-class/
            // This rule reports when a class has no non-static members,
            /* such as for a class used exclusively as a static namespace. */
            "@typescript-eslint/no-extraneous-class": "warn",

            // https://typescript-eslint.io/rules/no-floating-promises/
            // Require Promise-like statements to be handled appropriately.
            // A "floating" Promise is one that is created without any code set up to handle any errors it might throw.
            // Floating Promises can cause several issues, such as improperly sequenced operations, ignored Promise rejections, and more.
            // This rule reports when a Promise is created and not properly handled.
            // Valid ways of handling a Promise-valued statement include:
            // - `await`ing it
            // - `return`ing it
            // - Calling its `.then()` with two arguments
            /* - Calling its `.catch()` with one argument */
            /* deactivated for performance reasons */
            "@typescript-eslint/no-floating-promises": "off",

            // https://typescript-eslint.io/rules/no-for-in-array/
            // Disallow iterating over an array with a for-in loop.
            // A for-in loop (`for (var i in o)`) iterates over the properties of an Object.
            // While it is legal to use for-in loops with array types, it is not common.
            /* for-in will iterate over the indices of the array as strings, omitting any "holes" in the array. */
            "@typescript-eslint/no-for-in-array": "error",

            // https://typescript-eslint.io/rules/no-inferrable-types/
            // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
            // TypeScript is able to infer the types of parameters, properties, and variables from their default or initial values.
            // There is no need to use an explicit `:` type annotation on one of those constructs initialized to a boolean, number, or string.
            // Doing so adds unnecessary verbosity to code -making it harder to read- and in some cases
            /* can prevent TypeScript from inferring a more specific literal type (e.g. `10`) instead of the more general primitive type (e.g. `number`) */
            "@typescript-eslint/no-inferrable-types": "warn",

            // https://typescript-eslint.io/rules/no-invalid-void-type/
            // Disallow `void` type outside of generic or return types.
            // `void` in TypeScript refers to a function return that is meant to be ignored.
            // Attempting to use a `void` type outside of a return type or generic type argument is often a sign of programmer error.
            /* `void` can also be misleading for other developers even if used correctly. */
            "@typescript-eslint/no-invalid-void-type": "warn",

            // https://typescript-eslint.io/rules/no-meaningless-void-operator/
            /* Disallow the `void` operator except when used to discard a value. */
            "@typescript-eslint/no-meaningless-void-operator": "warn",

            // https://typescript-eslint.io/rules/no-misused-new/
            // Enforce valid definition of new and constructor.
            /* This rule reports when a class defines a method named `new` or an interface defines a method named `constructor`. */
            "@typescript-eslint/no-misused-new": "error",

            // https://typescript-eslint.io/rules/no-misused-promises/
            // Disallow Promises in places not designed to handle them.
            // This rule forbids providing Promises to logical locations such as if statements in places where the TypeScript compiler allows them but they are not handled properly.
            /* These situations can often arise due to a missing await keyword or just a misunderstanding of the way async functions are handled/awaited. */
            "@typescript-eslint/no-misused-promises": "off", // deactivated for performance reasons

            // https://typescript-eslint.io/rules/no-namespace/
            // Disallow TypeScript namespaces.
            // TypeScript historically allowed a form of code organization called "custom modules" (`module Example {}`),
            // later renamed to "namespaces" (`namespace Example`).
            // Namespaces are an outdated way to organize TypeScript code.
            /* ES2015 module syntax is now preferred (`import/export`). */
            "@typescript-eslint/no-namespace": [
                "error",
                {
                    allowDeclarations: true,
                    allowDefinitionFiles: true,
                },
            ],

            // https://typescript-eslint.io/rules/no-non-null-asserted-nullish-coalescing/
            // The `??` nullish coalescing runtime operator allows providing a default value when dealing with `null` or `undefined`.
            // Using a `!` non-null assertion type operator in the left operand of a nullish coalescing operator is redundant,
            /* and likely a sign of programmer error or confusion over the two operators. */
            "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "error",

            // https://typescript-eslint.io/rules/no-non-null-asserted-optional-chain/
            // Disallow non-null assertions after an optional chain expression.
            // `?.` optional chain expressions provide `undefined` if an object is `null` or `undefined`.
            /* Using a `!` non-null assertion to assert the result of an `?.` optional chain expression is non-nullable is likely wrong. */
            "@typescript-eslint/no-non-null-asserted-optional-chain": "error",

            // https://typescript-eslint.io/rules/no-non-null-assertion/
            // Disallow non-null assertions using the `!` postfix operator.
            // TypeScript's `!` non-null assertion operator asserts to the type system that an expression is non-nullable, as in not `null` or `undefined`.
            // Using assertions to tell the type system new information is often a sign that code is not fully type-safe.
            /* It's generally better to structure program logic so that TypeScript understands when values may be nullable. */
            "@typescript-eslint/no-non-null-assertion": "warn",

            // https://typescript-eslint.io/rules/no-redundant-type-constituents/
            /* Disallow members of unions and intersections that do nothing or override type information. */
            "@typescript-eslint/no-redundant-type-constituents": "warn",

            // https://typescript-eslint.io/rules/no-require-imports/
            // Disallow invocation of `require()`.
            /* Prefer the newer ES6-style imports over `require()`. */
            "@typescript-eslint/no-require-imports": "off",

            // https://typescript-eslint.io/rules/no-this-alias/
            // Disallow aliasing `this`.
            /* Assigning a variable to `this` instead of properly using arrow lambdas may be a symptom of pre-ES6 practices or not managing scope well. */
            "@typescript-eslint/no-this-alias": "error",

            // https://typescript-eslint.io/rules/no-type-alias/
            /* Disallow type aliases. */
            "@typescript-eslint/no-type-alias": "off",

            // https://typescript-eslint.io/rules/no-unnecessary-boolean-literal-compare/
            /* Disallow unnecessary equality comparisons against boolean literals. */
            "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",

            // https://typescript-eslint.io/rules/no-unnecessary-condition/
            /* Disallow conditionals where the type is always truthy or always falsy. */
            "@typescript-eslint/no-unnecessary-condition": "error",

            // https://typescript-eslint.io/rules/no-unnecessary-qualifier/
            // Disallow unnecessary namespace qualifiers.
            // Members of TypeScript enums and namespaces are generally retrieved as qualified property lookups: e.g. `Enum.member`.
            // However, when accessed within their parent enum or namespace, the qualifier is unnecessary: e.g. just `member` instead of `Enum.member`.
            /* This rule reports when an enum or namespace qualifier is unnecessary. */
            "@typescript-eslint/no-unnecessary-qualifier": "warn",

            // https://typescript-eslint.io/rules/no-unnecessary-type-arguments/
            /* Disallow type arguments that are equal to the default. */
            "@typescript-eslint/no-unnecessary-type-arguments": "warn",

            // https://typescript-eslint.io/rules/no-unnecessary-type-assertion/
            // Disallow type assertions that do not change the type of an expression.
            // TypeScript can be told an expression is a different type than expected using as type assertions.
            // Leaving as assertions in the codebase increases visual clutter and harms code readability,
            // so it's generally best practice to remove them if they don't change the type of an expression.
            /* This rule reports when a type assertion does not change the type of an expression. */
            "@typescript-eslint/no-unnecessary-type-assertion": "warn",

            // https://typescript-eslint.io/rules/no-unnecessary-type-constraint/
            // Generic type parameters (`<T>`) in TypeScript may be "constrained" with an `extends keyword`.
            // When no `extends` is provided, type parameters default a constraint to `any`.
            /* It is therefore redundant to `extend` from `any`. */
            "@typescript-eslint/no-unnecessary-type-constraint": "warn",

            // https://typescript-eslint.io/rules/no-unsafe-argument/
            /* Disallow calling a function with a value with type 'any'. */
            "@typescript-eslint/no-unsafe-argument": "error",

            // https://typescript-eslint.io/rules/no-unsafe-assignment/
            /* Disallow assigning a value with type `any` to variables and properties. */
            "@typescript-eslint/no-unsafe-assignment": "error",

            // https://typescript-eslint.io/rules/no-unsafe-call/
            /* Disallow calling a value with type `any`. */
            "@typescript-eslint/no-unsafe-call": "error",

            // https://typescript-eslint.io/rules/no-unsafe-declaration-merging/
            // Disallow unsafe declaration merging.
            // TypeScript's "declaration merging" supports merging separate declarations with the same name.
            // Declaration merging between classes and interfaces is unsafe.
            // The TypeScript compiler doesn't check whether properties are initialized,
            /* which can cause lead to TypeScript not detecting code that will cause runtime errors. */
            "@typescript-eslint/no-unsafe-declaration-merging": "off",

            // https://typescript-eslint.io/rules/no-unsafe-member-access/
            /* Disallow member access on a value with type `any`. */
            "@typescript-eslint/no-unsafe-member-access": "error",

            // https://typescript-eslint.io/rules/no-unsafe-return/
            /* Disallow returning a value with type `any` from a function. */
            "@typescript-eslint/no-unsafe-return": "error",

            // https://typescript-eslint.io/rules/no-useless-empty-export/
            /* Disallow empty exports that don't change anything in a module file. */
            "@typescript-eslint/no-useless-empty-export": "warn",

            // https://typescript-eslint.io/rules/no-var-requires/
            /* Disallow `require` statements except in import statements. */
            "@typescript-eslint/no-var-requires": "off",

            // https://typescript-eslint.io/rules/non-nullable-type-assertion-style/
            // Enforce non-null assertions over explicit type casts.
            // There are two common ways to assert to TypeScript that a value is its type without `null` or `undefined`:
            // - `!`:` Non-null assertion
            // - `as`: Traditional type assertion with a coincidentally equivalent type
            // `!` non-null assertions are generally preferred for requiring less code
            // and being harder to fall out of sync as types change.
            // This rule reports when an as cast is doing the same job as a `!` would,
            /* and suggests fixing the code to be an `!`. */
            "@typescript-eslint/non-nullable-type-assertion-style": "warn",

            // https://typescript-eslint.io/rules/parameter-properties/
            /* Require or disallow parameter properties in class constructors. */
            "@typescript-eslint/parameter-properties": "off",

            // https://typescript-eslint.io/rules/prefer-as-const/
            /* Enforce the use of `as const` over literal type. */
            "@typescript-eslint/prefer-as-const": "error",

            // https://typescript-eslint.io/rules/prefer-enum-initializers/
            /* Require each enum member value to be explicitly initialized. */
            "@typescript-eslint/prefer-enum-initializers": "off",

            // https://typescript-eslint.io/rules/prefer-for-of/
            /* Enforce the use of `for-of` loop over the standard `for` loop where possible. */
            "@typescript-eslint/prefer-for-of": "warn",

            // https://typescript-eslint.io/rules/prefer-function-type/
            /* Enforce using function types instead of interfaces with call signatures. */
            "@typescript-eslint/prefer-function-type": "warn",

            // https://typescript-eslint.io/rules/prefer-includes/
            /* Enforce `includes` method over `indexOf` method. */
            "@typescript-eslint/prefer-includes": "warn",

            // https://typescript-eslint.io/rules/prefer-literal-enum-member/
            /* Require all enum members to be literal values. */
            "@typescript-eslint/prefer-literal-enum-member": "error",

            // https://typescript-eslint.io/rules/prefer-namespace-keyword/
            // Require using `namespace` keyword over `module` keyword to declare custom TypeScript modules.
            // TypeScript historically allowed a form of code organization called
            // "custom modules" (`module Example {}`),
            // later renamed to "namespaces" (`namespace Example`).
            // Namespaces are an outdated way to organize TypeScript code.
            // ES2015 module syntax is now preferred (`import`/`export`).
            // For projects still using custom modules / namespaces,
            // it's preferred to refer to them as namespaces.
            /* This rule reports when the `module` keyword is used instead of `namespace`. */
            "@typescript-eslint/prefer-namespace-keyword": "error",

            // https://typescript-eslint.io/rules/prefer-nullish-coalescing/
            /* Enforce using the nullish coalescing operator instead of logical chaining. */
            "@typescript-eslint/prefer-nullish-coalescing": "warn",

            // https://typescript-eslint.io/rules/prefer-optional-chain/
            // Enforce using concise optional chain expressions instead of chained logical ands,
            // negated logical ors, or empty objects.
            // `?.` optional chain expressions provide `undefined` if an object is `null` or `undefined`.
            // Because the optional chain operator only chains when the property value is `null` or `undefined`,
            // it is much safer than relying upon logical AND operator chaining `&&;`
            // which chains on any truthy value.
            // It is also often less code to use `?.` optional chaining than `&&` truthiness checks.
            /* This rule reports on code where an `&&` operator can be safely replaced with `?.` optional chaining. */
            "@typescript-eslint/prefer-optional-chain": "warn",

            // https://typescript-eslint.io/rules/prefer-readonly/
            // Require private members to be marked as `readonly` if they're never
            /* modified outside of the constructor. */
            "@typescript-eslint/prefer-readonly": "warn",

            // https://typescript-eslint.io/rules/prefer-reduce-type-parameter/
            /* Enforce using type parameter when calling `Array#reduce` instead of casting. */
            "@typescript-eslint/prefer-reduce-type-parameter": "warn",

            // https://typescript-eslint.io/rules/prefer-regexp-exec/
            // Enforce `RegExp#exec` over `String#match` if no global flag is provided.
            // `String#match` is defined to work the same as `RegExp#exec` when the regular expression
            // does not include the `g` flag.
            // Keeping to consistently using one of the two can help improve code readability.
            /* This rule reports when a `String#match` call can be replaced with an equivalent `RegExp#exec`. */
            "@typescript-eslint/prefer-regexp-exec": "warn",

            // https://typescript-eslint.io/rules/prefer-return-this-type/
            // Enforce that `this` is used when only this type is returned.
            // Method chaining is a common pattern in OOP languages and TypeScript provides
            // a special polymorphic this type to facilitate it.
            // Class methods that explicitly declare a return type of the class name instead of
            // `this` make it harder for extending classes to call that method:
            // the returned object will be typed as the base class, not the derived class.
            // This rule reports when a class method declares a return type of that class name
            /* instead of this. */
            "@typescript-eslint/prefer-return-this-type": "warn",

            // https://typescript-eslint.io/rules/prefer-string-starts-ends-with/
            // Enforce using `String#startsWith` and `String#endsWith` over other equivalent methods
            // of checking substrings.
            // There are multiple ways to verify if a string starts or ends with a specific string,
            // such as `foo.indexOf('bar') === 0`.
            // As of ES2015,
            // the most common way in JavaScript is to use `jString#startsWith` and `String#endsWith`.
            /* Keeping to those methods consistently helps with code readability. */
            "@typescript-eslint/prefer-string-starts-ends-with": "warn",

            // https://typescript-eslint.io/rules/prefer-ts-expect-error/
            // Enforce using `@ts-expect-error` over `@ts-ignore`.
            // TypeScript allows you to suppress all errors on a line by placing a comment
            // starting with `@ts-ignore` or `@ts-expect-error` immediately before
            // the erroring line.
            // The two directives work the same,
            // except `@ts-expect-error` causes a type error if placed before a line that's not erroring
            // in the first place.
            // This means its easy for `@ts-ignores` to be forgotten about,
            // and remain in code even after the error they were suppressing is fixed.
            // This is dangerous,
            // as if a new error arises on that line it'll be suppressed by
            /* the forgotten about `@ts-ignore`, and so be missed. */
            "@typescript-eslint/prefer-ts-expect-error": "warn",

            // https://typescript-eslint.io/rules/promise-function-async/
            /* Require any function or method that returns a Promise to be marked async. */
            "@typescript-eslint/promise-function-async": "warn",

            // https://typescript-eslint.io/rules/require-array-sort-compare/
            /* Require `Array#sort` calls to always provide a `compareFunction`. */
            "@typescript-eslint/require-array-sort-compare": "warn",

            // https://typescript-eslint.io/rules/restrict-plus-operands/
            // Require both operands of addition to be the same type and be `bigint`, `number`, or `string`.
            // TypeScript allows `+` adding together two values of any type(s).
            // However, adding values that are not the same type and/or are not
            // the same primitive type is often a sign of programmer error.
            // This rule reports when a `+` operation combines two values of different types,a
            /* or a type that is not `bigint`, `number`, or `string`. */
            "@typescript-eslint/restrict-plus-operands": "error",

            // https://typescript-eslint.io/rules/restrict-template-expressions/
            // Enforce template literal expressions to be of `string` type.
            // JavaScript will call `toString()` on an object when it is converted to a string,
            // such as when `+` adding to a string or in `${}` template literals.
            // The default Object `.toString()` returns `"[object Object]"`,
            // which is often not what was intended.
            // This rule reports on values used in a template literal string
            /* that aren't primitives and don't define a more useful `.toString()` method. */
            "@typescript-eslint/restrict-template-expressions": "error",

            // https://typescript-eslint.io/rules/sort-type-constituents/
            /* Enforce constituents of a type union/intersection to be sorted alphabetically. */
            "@typescript-eslint/sort-type-constituents": "off",

            // https://typescript-eslint.io/rules/strict-boolean-expressions/
            // Disallow certain types in boolean expressions.
            // Forbids usage of non-boolean types in expressions where a boolean is expected.
            // `boolean` and `never` types are always allowed.
            // Additional types which are considered safe in a boolean context can be configured
            // via options.
            // The following nodes are considered boolean expressions and their type is checked:
            // - Argument to the logical negation operator (`!arg`).
            // - The condition in a conditional expression (`cond ? x : y`).
            // - Conditions for `if`, `for`, `while`, and `do-while` statements.
            // - Operands of logical binary operators (`lhs || rhs` and `lhs && rhs`).
            // 		- Right-hand side operand is ignored when it's not a descendant of another boolean expression.
            /* 			This is to allow usage of boolean operators for their short-circuiting behavior. */
            "@typescript-eslint/strict-boolean-expressions": "warn",

            // https://typescript-eslint.io/rules/switch-exhaustiveness-check/
            /* Require switch-case statements to be exhaustive with union type. */
            "@typescript-eslint/switch-exhaustiveness-check": "warn",

            // https://typescript-eslint.io/rules/triple-slash-reference/
            /* Disallow certain triple slash directives in favor of ES6-style import declarations. */
            "@typescript-eslint/triple-slash-reference": "error",

            // https://typescript-eslint.io/rules/type-annotation-spacing/
            /* Require consistent spacing around type annotations. */
            "@typescript-eslint/type-annotation-spacing": "off",

            // https://typescript-eslint.io/rules/typedef/
            /* Require type annotations in certain places. */
            /* CAUTION */
            // Instead of enabling `typedef`,
            // it is generally recommended to use the `--noImplicitAny` and
            /* `--strictPropertyInitialization` compiler options to enforce type annotations only when useful. */
            "@typescript-eslint/typedef": "off",

            // https://typescript-eslint.io/rules/unbound-method/
            // Enforce unbound methods are called with their expected scope.
            // Class method functions don't preserve the class scope when passed as
            // standalone variables ("unbound").
            // If your function does not access this,
            // you can annotate it with this: void, or consider using an arrow function instead.
            // Otherwise, passing class methods around as values can
            // remove type safety by failing to capture this.
            /* This rule reports when a class method is referenced in an unbound manner. */
            "@typescript-eslint/unbound-method": "error",

            // https://typescript-eslint.io/rules/unified-signatures/
            // Disallow two overloads that could be unified into one with a union
            /* or an optional/rest parameter. */
            "@typescript-eslint/unified-signatures": "warn",

            /* Extension Rules */
            /* can be found in the overrides */
        }
    },
    {
        /* enable the rule specifically for TypeScript files */
        files: ["**/*.ts", "**/*.mts", "**/*.cts", "**/*.tsx"],
        rules: {
            /* Extension Rules */
            /* https://typescript-eslint.io/rules/default-param-last */
            "default-param-last": "off",
            "@typescript-eslint/default-param-last": "warn",
            /* https://typescript-eslint.io/rules/dot-notation */
            "dot-notation": "off",
            "@typescript-eslint/dot-notation": "warn",
            /* https://typescript-eslint.io/rules/init-declarations */
            "init-declarations": "off",
            "@typescript-eslint/init-declarations": "warn",
            /* https://typescript-eslint.io/rules/no-array-constructor */
            "no-array-constructor": "off",
            "@typescript-eslint/no-array-constructor": "error",
            /* https://typescript-eslint.io/rules/no-dupe-class-members */
            "no-dupe-class-members": "off",
            "@typescript-eslint/no-dupe-class-members": "warn",
            /* https://typescript-eslint.io/rules/no-empty-function */
            "no-empty-function": "off",
            "@typescript-eslint/no-empty-function": [
                "off", {
                    "allow": [
                        "private-constructors",
                        "protected-constructors",
                        "decoratedFunctions",
                        "overrideMethods"
                    ]
                }
            ],
            /* https://typescript-eslint.io/rules/no-extra-semi */
            /*  !deprecated and moved to style-eslint */
            // "no-extra-semi": "off",
            // "@typescript-eslint/no-extra-semi": "error",
            /* https://typescript-eslint.io/rules/no-implied-eval */
            "no-implied-eval": "off",
            "@typescript-eslint/no-implied-eval": "error",
            /* https://typescript-eslint.io/rules/no-invalid-this */
            "no-invalid-this": "off",
            "@typescript-eslint/no-invalid-this": "warn",
            /* https://typescript-eslint.io/rules/no-loop-func */
            "no-loop-func": "off",
            "@typescript-eslint/no-loop-func": "warn",
            /* https://typescript-eslint.io/rules/no-loss-of-precision */
            "no-loss-of-precision": "off",
            "@typescript-eslint/no-loss-of-precision": "error",
            /* https://typescript-eslint.io/rules/no-magic-numbers */
            "no-magic-numbers": "off",
            /* * too impractical in execution */
            "@typescript-eslint/no-magic-numbers": ["off", {
                "ignore": [
                    0,
                    1
                ],
                "ignoreArrayIndexes": true,
                "ignoreDefaultValues": true,
                "ignoreClassFieldInitialValues": true,
                "enforceConst": true,
                "detectObjects": false
            }],
            /* https://typescript-eslint.io/rules/no-redeclare */
            "no-redeclare": "off",
            "@typescript-eslint/no-redeclare": [
                "warn",
                {ignoreDeclarationMerge: true}
            ],
            /* https://typescript-eslint.io/rules/no-restricted-imports */
            "no-restricted-imports": "off",
            "@typescript-eslint/no-restricted-imports": "warn",
            /* https://typescript-eslint.io/rules/no-shadow */
            "no-shadow": "off",
            "@typescript-eslint/no-shadow": "warn",
            /* https://typescript-eslint.io/rules/no-throw-literal/ */
            "no-throw-literal": "off",
            /* @typescript-eslint/no-throw-literal renamed to @typescript-eslint/only-throw-error */
            "@typescript-eslint/only-throw-error": "warn",
            /* https://typescript-eslint.io/rules/no-unused-expressions */
            "no-unused-expressions": "off",
            "@typescript-eslint/no-unused-expressions": "warn",
            /* https://typescript-eslint.io/rules/no-unused-vars */
            /* taken care of by IDE */
            "no-unused-vars": "off",
            "@typescript-eslint/no-unused-vars": "off",
            /* https://typescript-eslint.io/rules/no-use-before-define */
            "no-use-before-define": "off",
            "@typescript-eslint/no-use-before-define": "warn",
            /* https://typescript-eslint.io/rules/no-useless-constructor */
            "no-useless-constructor": "off",
            "@typescript-eslint/no-useless-constructor": "warn",
            /* https://typescript-eslint.io/rules/require-await */
            "require-await": "off",
            "@typescript-eslint/require-await": "off",
            /* https://typescript-eslint.io/rules/return-await */
            "no-return-await": "off",
            "@typescript-eslint/return-await": "warn",
            /* ******************************************************************* */
            "@typescript-eslint/explicit-member-accessibility": [
                "warn",
                {
                    accessibility: "no-public",
                    overrides: {
                        accessors: "off",
                        constructors: "no-public",
                        methods: "no-public",
                        properties: "no-public",
                        parameterProperties: "explicit",
                    },
                },
            ],
            "@typescript-eslint/explicit-function-return-type": ["off", {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowIIFEs: true,
                allowedNames: returnTypeWhitelist
            }],
            "@typescript-eslint/explicit-module-boundary-types": "error",
        },
    },
    {
        /* enable the rule specifically for TypeScript files */
        files: ["**/*.tsx"],
        rules: {
            "@typescript-eslint/naming-convention": [
                "warn",
                {
                    "selector": "variable",
                    "format": [
                        "camelCase",
                        "PascalCase",
                        "UPPER_CASE"
                    ]
                },
                {
                    "selector": "function",
                    "format": [
                        "camelCase",
                        "PascalCase"
                    ]
                },
                {
                    "selector": [
                        "interface",
                        "typeAlias",
                        "class"
                    ],
                    "format": [
                        "camelCase",
                        "PascalCase",
                        "UPPER_CASE"
                    ]
                }
            ],
        },
    }
];

export const config: ConfigArray = tseslint.config(
    tseslint.configs.recommendedTypeChecked,
    {
        languageOptions: {
            parser: tseslint.parser,
            parserOptions: {
                // project: true,
                project: [
                    './eslint.config.ts',
                    './packages/*/eslint.config.ts',
                    './packages/apps/*/eslint.config.ts',
                    './packages/libs/*/*/eslint.config.ts',
                    './packages/libs/*/*/*/eslint.config.ts',
                ],
                projectService: true,
                tsconfigRootDir: __dirname,
            },
        },
    },
    ...rules
);

// export default { config, rules, configure} //as { config: ESLint.Linter.Config, rules: ESLint.Linter.RulesRecord, configure: (options: ESLint.Linter.Config) => void }; ;
