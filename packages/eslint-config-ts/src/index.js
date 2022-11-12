// disable rule if necessary
module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project: "./tsconfig.json", // Specify it only for TypeScript files
  },
  root: true,
  rules: {
    // https://typescript-eslint.io/rules/adjacent-overload-signatures/
    // Require that function overload signatures be consecutive.
    // Function overload signatures represent multiple ways a function can be called,
    // potentially with different return types.
    // It's typical for an interface or type alias describing a function to place all overload signatures next to each other.
    // If Signatures placed elsewhere in the type are easier to be missed by future developers reading the code.
    "@typescript-eslint/adjacent-overload-signatures": "error",

    // https://typescript-eslint.io/rules/array-type/
    // Require consistently using either `T[]` or `Array<T>` for arrays.
    // TypeScript provides two equivalent ways to define an array type: `T[]` and `Array<T>`.
    // The two styles are functionally equivalent.
    // Using the same style consistently across your codebase makes it easier for developers to read and understand array types.
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
    // such as forgetting to add parenthesis to call a function that returns a Promise.
    "@typescript-eslint/await-thenable": "error",

    // https://typescript-eslint.io/rules/ban-ts-comment
    // Disallow `@ts-<directive>` comments or require descriptions after directives.
    // TypeScript provides several directive comments that can be used to alter how it processes files.
    // Using these to suppress TypeScript compiler errors reduces the effectiveness of TypeScript overall.
    // Instead, it's generally better to correct the types of code, to make directives unnecessary.
    "@typescript-eslint/ban-ts-comment": "error",

    // https://typescript-eslint.io/rules/ban-tslint-comment/
    // Disallow `// tslint:<rule-flag>` comments.
    // Useful when migrating from TSLint to ESLint.
    // Once TSLint has been removed, this rule helps locate TSLint annotations (e.g. // tslint:disable).
    "@typescript-eslint/ban-tslint-comment": "warn",

    // https://typescript-eslint.io/rules/ban-types/
    // Disallow certain types.
    // Some built-in types have aliases, while some types are considered dangerous or harmful.
    // It's often a good idea to ban certain types to help with consistency and safety.
    // This rule bans specific types and can suggest alternatives.
    // Note that it does not ban the corresponding runtime objects from being used.
    "@typescript-eslint/ban-types": "error",

    // https://typescript-eslint.io/rules/class-literal-property-style/
    // Enforce that literals on classes are exposed in a consistent style.
    // Some TypeScript applications store literal values on classes using fields with the readonly modifier to prevent them from being reassigned.
    // When writing TypeScript libraries that could be used by JavaScript users, however,
    // it's typically safer to expose these literals using getters,
    // since the readonly modifier is enforced at compile type.
    // This rule aims to ensure that literals exposed by classes are done so consistently,
    // in one of the two style described above.
    // By default this rule prefers the fields style as it means JS doesn't have to setup & teardown a function closure.
    "@typescript-eslint/class-literal-property-style": "warn",

    // https://typescript-eslint.io/rules/consistent-generic-constructors/
    // Enforce specifying generic type arguments on type annotation or constructor name of a constructor call.
    // When constructing a generic class,
    // you can specify the type arguments on either the left-hand side (as a type annotation) or the right-hand side (as part of the constructor call)
    "@typescript-eslint/consistent-generic-constructors": "warn",

    // https://typescript-eslint.io/rules/consistent-indexed-object-style/
    // Require or disallow the Record type.
    // TypeScript supports defining object show keys can be flexible using an index signature.
    // TypeScript also has a builtin type named Record to create an empty object defining only an index signature. For example,
    // the following types are equal
    "@typescript-eslint/consistent-indexed-object-style": "warn",

    // https://typescript-eslint.io/rules/consistent-type-assertions/
    // Enforce consistent usage of type assertions.
    // Angle brackets: <Type>value
    // As: value as Type
    // This rule aims to standardize the use of type assertion style across the codebase.
    // Keeping to one syntax consistently helps with code readability.
    "@typescript-eslint/consistent-type-assertions": "warn",

    // https://typescript-eslint.io/rules/consistent-type-definitions/
    // Enforce type definitions to consistently use either `interface` or `type`.
    // The two are generally very similar, and can often be used interchangeably.
    // Using the same type declaration style consistently helps with code readability.
    "@typescript-eslint/consistent-type-definitions": "warn",

    // https://typescript-eslint.io/rules/consistent-type-exports/
    // Enforce consistent usage of type exports.
    // TypeScript allows specifying a `type` keyword on exports to indicate that the export exists only in the type system, not at runtime.
    // This allows transpilers to drop exports without knowing the types of the dependencies.
    "@typescript-eslint/consistent-type-exports": "warn",

    // https://typescript-eslint.io/rules/consistent-type-imports/
    // Enforce consistent usage of type imports.
    // TypeScript allows specifying a `type` keyword on imports to indicate that the export exists only in the type system,
    // not at runtime. This allows transpilers to drop imports without knowing the types of the dependencies.
    "@typescript-eslint/consistent-type-imports": "warn",

    /* need more research!! */
    // https://typescript-eslint.io/rules/explicit-function-return-type/
    // Require explicit return types on functions and class methods.
    // Functions in TypeScript often don't need to be given an explicit return type annotation. Leaving off the return type is less code to read or write and allows the compiler to infer it from the contents of the function.
    // However, explicit return types do make it visually more clear what type is returned by a function.
    // They can also speed up TypeScript type checking performance in large codebases with many large functions.
    "@typescript-eslint/explicit-function-return-type": "off",

    // https://typescript-eslint.io/rules/explicit-member-accessibility/
    // Require explicit accessibility modifiers on class properties and methods.
    // TypeScript allows placing explicit `public`, `protected`, and `private` accessibility modifiers in front of class members.
    // The modifiers exist solely in the type system and just server to describe who is allowed to access those members.
    // Leaving off accessibility modifiers makes for less code to read and write. Members are `public` by default.
    // However, adding in explicit accessibility modifiers can be helpful in codebases with many classes for enforcing proper privacy of members.
    // Some developers also find it preferable for code readability to keep member publicity explicit.
    "@typescript-eslint/explicit-member-accessibility": "off",

    // https://typescript-eslint.io/rules/explicit-module-boundary-types/
    // Require explicit return and argument types on exported functions' and classes' public class methods.
    // Explicit types for function return values and arguments makes it clear to any calling code what is the module boundary's input and output. Adding explicit type annotations for those types can help improve code readability.
    // It can also improve TypeScript type checking performance on larger codebases.
    "@typescript-eslint/explicit-module-boundary-types": "off",

    // https://typescript-eslint.io/rules/member-delimiter-style/
    // Require a specific member delimiter style for interfaces and type literals.
    "@typescript-eslint/member-delimiter-style": "warn",

    // https://typescript-eslint.io/rules/member-ordering/
    // Require a consistent member declaration order.
    // This rule aims to standardize the way classes, interfaces, and type literals are structured and ordered.
    // A consistent ordering of fields, methods and constructors can make code easier to read, navigate, and edit.
    "@typescript-eslint/member-ordering": "warn",

    // https://typescript-eslint.io/rules/method-signature-style/
    // Enforce using a particular method signature syntax.
    "@typescript-eslint/method-signature-style": "warn",

    // https://typescript-eslint.io/rules/naming-convention/
    // Enforce naming conventions for everything across a codebase.
    // Enforcing naming conventions helps keep the codebase consistent,
    // and reduces overhead when thinking about how to name a variable.
    // Additionally, a well-designed style guide can help communicate intent,
    // such as by enforcing all private properties begin with an `_`,
    // and all global-level constants are written in `UPPER_CASE`.
    "@typescript-eslint/naming-convention": "warn",

    // https://typescript-eslint.io/rules/no-base-to-string/
    // Require `.toString()` to only be called on objects which provide useful information when stringified.
    // JavaScript will call `toString()` on an object when it is converted to a string,
    // such as when `+` adding to a string or in `${}` template literals.
    // The default Object `.toString()` returns `"[object Object]"`, which is often not what was intended.
    // This rule reports on stringified values that aren't primitives and don't define a more useful `.toString()` method.
    "@typescript-eslint/no-base-to-string": "warn",

    // https://typescript-eslint.io/rules/no-confusing-non-null-assertion/
    // Disallow non-null assertion in locations that may be confusing.
    // Using a non-null assertion (`!`) next to an assign or equals check (`=` or `==` or `===`)
    // creates code that is confusing as it looks similar to a not equals check (`!=` `!==`).
    "@typescript-eslint/no-confusing-non-null-assertion": "warn",

    // https://typescript-eslint.io/rules/no-confusing-void-expression/
    // Require expressions of type void to appear in statement position.
    // `void` in TypeScript refers to a function return that is meant to be ignored.
    // Attempting to use a `void`-typed value, such as storing the result of a called function in a variable, is often a sign of a programmer error.
    // `void` can also be misleading for other developers even if used correctly.
    // This rule prevents `void` type expressions from being used in misleading locations such as being assigned to a variable,
    // provided as a function argument, or returned from a function.
    "@typescript-eslint/no-confusing-void-expression": [
      "warn",
      { ignoreVoidOperator: true },
    ],

    // https://typescript-eslint.io/rules/no-duplicate-enum-values/
    // Disallow duplicate enum member values.
    // Although TypeScript supports duplicate enum member values, people usually expect members to have unique values within the same enum.
    // Duplicate values can lead to bugs that are hard to track down.
    "@typescript-eslint/no-duplicate-enum-values": "warn",

    // https://typescript-eslint.io/rules/no-dynamic-delete/
    // Disallow using the `delete` operator on computed key expressions.
    // Deleting dynamically computed keys can be dangerous and in some cases not well optimized.
    // Using the `delete` operator on keys that aren't runtime constants could be a sign that you're using the wrong data structures.
    // Using `Objects` with added and removed keys can cause occasional edge case bugs, such as if a key is named `"hasOwnProperty"`.
    "@typescript-eslint/no-dynamic-delete": "warn",

    // https://typescript-eslint.io/rules/no-empty-interface/
    // Disallow the declaration of empty interfaces.
    // An empty interface in TypeScript does very little: any non-nullable value is assignable to `{}`.
    // Using an empty interface is often a sign of programmer error,
    // such as misunderstanding the concept of '{}' or forgetting to fill in fields.
    // This rule aims to ensure that only meaningful interfaces are declared in the code.
    "@typescript-eslint/no-empty-interface": "error",

    // https://typescript-eslint.io/rules/no-explicit-any/
    // Disallow the `any` type.
    // The `any` type in TypeScript is a dangerous "escape hatch" from the type system.
    // Using `any` disables many type checking rules and is generally best used only as a last resort or when prototyping code.
    // This rule reports on explicit uses of the any keyword as a type annotation.
    // TypeScript's `--noImplicitAny` compiler option prevents an implied any,
    // but doesn't prevent any from being explicitly used the way this rule does.
    "@typescript-eslint/no-explicit-any": [
      "warn",
      { fixToUnknown: false, ignoreRestArgs: false },
    ],

    // https://typescript-eslint.io/rules/no-extra-non-null-assertion/
    // Disallow extra non-null assertions.
    // The `!` non-null assertion operator in TypeScript is used to assert that a value's type does not include null or undefined.
    // Using the operator any more than once on a single value does nothing.
    "@typescript-eslint/no-extra-non-null-assertion": "error",

    // https://typescript-eslint.io/rules/no-extraneous-class/
    // This rule reports when a class has no non-static members,
    // such as for a class used exclusively as a static namespace.
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
    // - Calling its `.catch()` with one argument
    "@typescript-eslint/no-floating-promises": "error",

    // https://typescript-eslint.io/rules/no-for-in-array/
    // Disallow iterating over an array with a for-in loop.
    // A for-in loop (`for (var i in o)`) iterates over the properties of an Object.
    // While it is legal to use for-in loops with array types, it is not common.
    // for-in will iterate over the indices of the array as strings, omitting any "holes" in the array.
    "@typescript-eslint/no-for-in-array": "error",

    // https://typescript-eslint.io/rules/no-inferrable-types/
    // Disallow explicit type declarations for variables or parameters initialized to a number, string, or boolean.
    // TypeScript is able to infer the types of parameters, properties, and variables from their default or initial values.
    // There is no need to use an explicit `:` type annotation on one of those constructs initialized to a boolean, number, or string.
    // Doing so adds unnecessary verbosity to code -making it harder to read- and in some cases
    // can prevent TypeScript from inferring a more specific literal type (e.g. `10`) instead of the more general primitive type (e.g. `number`)
    "@typescript-eslint/no-inferrable-types": "warn",

    // https://typescript-eslint.io/rules/no-invalid-void-type/
    // Disallow `void` type outside of generic or return types.
    // `void` in TypeScript refers to a function return that is meant to be ignored.
    // Attempting to use a `void` type outside of a return type or generic type argument is often a sign of programmer error.
    // `void` can also be misleading for other developers even if used correctly.
    "@typescript-eslint/no-invalid-void-type": "warn",

    // https://typescript-eslint.io/rules/no-meaningless-void-operator/
    // Disallow the `void` operator except when used to discard a value.
    "@typescript-eslint/no-meaningless-void-operator": "warn",

    // https://typescript-eslint.io/rules/no-misused-new/
    // Enforce valid definition of new and constructor.
    // This rule reports when a class defines a method named `new` or an interface defines a method named `constructor`.
    "@typescript-eslint/no-misused-new": "error",
  },
  overrides: [
    {
      // enable the rule specifically for TypeScript files
      files: ["*.ts", "*.mts", "*.cts", "*.tsx"],
      rules: {
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
        "@typescript-eslint/explicit-function-return-type": "error",
        "@typescript-eslint/explicit-module-boundary-types": "error",
      },
    },
  ],
};
