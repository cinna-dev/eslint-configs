// disable rule if necessary

/** @type { import("eslint").Linter.FlatConfig[] } */
module.exports = [
    {
        rules: {
            // https://eslint.org/docs/latest/rules/array-callback-return
            "array-callback-return": "error",

            // https://eslint.org/docs/latest/rules/constructor-super
            // prevent wrong use of super in classes
            "constructor-super": "error",

            // https://eslint.org/docs/latest/rules/for-direction
            "for-direction": "error",

            // https://eslint.org/docs/latest/rules/getter-return
            "getter-return": "error",

            // https://eslint.org/docs/latest/rules/no-async-promise-executor
            // use "Promise.all()" if possible
            "no-async-promise-executor": "error",

            // https://eslint.org/docs/latest/rules/no-class-assign
            // prevent reassigning of classes
            "no-class-assign": "error",

            // https://eslint.org/docs/latest/rules/no-compare-neg-zero
            // use `Object.is(x, -0) instead`
            "no-compare-neg-zero": "error",

            // https://eslint.org/docs/latest/rules/no-cond-assign
            // There can be valid reasons to use assignment operators in conditional statements
            "no-cond-assign": ["error", "except-parens"],

            // https://eslint.org/docs/latest/rules/no-const-assign
            "no-const-assign": "error",

            // https://eslint.org/docs/latest/rules/no-constant-binary-expression
            // Comparisons which will always evaluate to true or false and
            // logical expressions (||, &&, ??) which either always short-circuit
            // or never short-circuit are both likely indications of programmer error.
            "no-constant-binary-expression": "error",

            // https://eslint.org/docs/latest/rules/no-constant-condition
            // if (false) {...}
            // do not check in loops
            "no-constant-condition": ["error", {checkLoops: false}],

            // https://eslint.org/docs/latest/rules/no-constructor-return
            // In JavaScript, returning a value in the constructor of a class may be a mistake.
            "no-constructor-return": "error",

            // https://eslint.org/docs/latest/rules/no-control-regex
            // Control characters are special, invisible characters in the ASCII range 0-31.
            // These characters are rarely used in JavaScript strings so a regular expression
            // containing elements that explicitly match these characters is most likely a mistake.
            "no-control-regex": "error",

            // https://eslint.org/docs/latest/rules/no-control-regex
            // Control characters are special, invisible characters in the ASCII range 0-31.
            // These characters are rarely used in JavaScript strings so a regular expression containing
            // elements that explicitly match these characters is most likely a mistake.
            "no-control-regex": "error",

            // https://eslint.org/docs/latest/rules/no-debugger
            // The debugger statement is used to tell the executing JavaScript environment to stop execution
            // and start up a debugger at the current point in the code.
            // This has fallen out of favor as a good practice with the advent of modern debugging
            // and development tools. Production code should definitely not contain debugger,
            // as it will cause the browser to stop executing code and open an appropriate debugger.
            "no-debugger": "error",

            // https://eslint.org/docs/latest/rules/no-dupe-args
            // This rule disallows duplicate parameter names in function declarations or expressions.
            // It does not apply to arrow functions or class methods,
            // because the parser reports the error.
            "no-dupe-args": "error",

            // https://eslint.org/docs/latest/rules/no-dupe-class-members
            // If there are declarations of the same name in class members, the last declaration
            // overwrites other declarations silently. It can cause unexpected behaviors.
            "no-dupe-class-members": "error",

            // https://eslint.org/docs/latest/rules/no-dupe-else-if
            // Disallow duplicate conditions in if-else-if chains
            "no-dupe-else-if": "error",

            // https://eslint.org/docs/latest/rules/no-dupe-keys
            // Disallow duplicate keys in object literals
            // Multiple properties with the same key in object literals can cause
            // unexpected behavior in your application.
            "no-dupe-keys": "error",

            // https://eslint.org/docs/latest/rules/no-duplicate-case
            // Disallow duplicate case labels
            // If a switch statement has duplicate test expressions in case clauses,
            // it is likely that a programmer copied a case clause but forgot to change the test expression.
            "no-duplicate-case": "error",

            // https://eslint.org/docs/latest/rules/no-empty-character-class
            // Disallow empty character classes in regular expressions
            // Because empty character classes in regular expressions do not match anything,
            // they might be typing mistakes.
            "no-empty-character-class": "error",

            // https://eslint.org/docs/latest/rules/no-empty-pattern
            // Disallow empty destructuring patterns
            // When using destructuring, it’s possible to create a pattern that has no effect.
            // This happens when empty curly braces are used to the right of an embedded object destructuring pattern,
            "no-empty-pattern": "error",

            // https://eslint.org/docs/latest/rules/no-ex-assign
            // Disallow reassigning exceptions in catch clauses
            // If a catch clause in a try statement accidentally (or purposely) assigns another value to the exception parameter,
            // it is impossible to refer to the error from that point on.
            // Since there is no arguments object to offer alternative access to this data,
            // assignment of the parameter is absolutely destructive.
            "no-ex-assign": "error",

            // https://eslint.org/docs/latest/rules/no-fallthrough
            // Disallow fallthrough of case statements
            // The switch statement in JavaScript is one of the more error-prone constructs of the language
            // thanks in part to the ability to “fall through” from one case to the next
            "no-fallthrough": "error",

            // https://eslint.org/docs/latest/rules/no-func-assign
            // Disallow reassigning function declarations
            // JavaScript functions can be written as a FunctionDeclaration `function foo() { ... }`
            // or as a FunctionExpression `var foo = function() { ... };`.
            // While a JavaScript interpreter might tolerate it,
            // overwriting/reassigning a function written as a FunctionDeclaration is often indicative of a mistake or issue.
            "no-func-assign": "error",

            // https://eslint.org/docs/latest/rules/no-import-assign
            // Disallow assigning to imported bindings
            // The updates of imported bindings by ES Modules cause runtime errors.
            "no-import-assign": "error",

            // https://eslint.org/docs/latest/rules/no-inner-declarations
            // Disallow variable or `function` declarations in nested blocks
            // In JavaScript, prior to ES6, a function declaration is only allowed in the first level
            // of a program or the body of another function,
            // though parsers sometimes erroneously accept them elsewhere.
            // This only applies to function declarations;
            // named or anonymous function expressions can occur anywhere an expression is permitted.
            // should nested variable declaration be disallowed ???
            "no-inner-declarations": "error",

            // https://eslint.org/docs/latest/rules/no-invalid-regexp
            // Disallow invalid regular expression strings in RegExp constructors
            // An invalid pattern in a regular expression literal is a SyntaxError when the code is parsed,
            // but an invalid string in RegExp constructors throws a SyntaxError only when the code is executed.
            "no-invalid-regexp": "error",

            // https://eslint.org/docs/latest/rules/no-irregular-whitespace
            // Disallow irregular whitespace
            "no-irregular-whitespace": ["error", {skipStrings: true, skipRegExps: true, skipTemplates: true},],

            // https://eslint.org/docs/latest/rules/no-loss-of-precision
            // Disallow literal numbers that lose precision
            // This rule would disallow the use of number literals that lose precision at runtime
            // when converted to a JS Number due to 64-bit floating-point rounding.
            "no-loss-of-precision": "error",

            // https://eslint.org/docs/latest/rules/no-misleading-character-class
            // Disallow characters which are made with multiple code points in character class syntax
            // This rule reports the regular expressions which include multiple code point characters in character class syntax.
            // This rule considers the following characters as multiple code point characters.
            "no-misleading-character-class": "error",

            // https://eslint.org/docs/latest/rules/no-new-symbol
            // Disallow `new` operators with the Symbol object
            // `Symbol` is not intended to be used with the` new` operator, but to be called as a function.
            "no-new-symbol": "error",

            // https://eslint.org/docs/latest/rules/no-obj-calls
            // Disallow calling global object properties as functions
            // This rule disallows calling the Math, JSON, Reflect and Atomics objects as functions.
            // This rule also disallows using these objects as constructors with the new operator.
            "no-obj-calls": "error",

            // https://eslint.org/docs/latest/rules/no-promise-executor-return
            // Disallow returning values from Promise executor functions
            // The `new Promise` constructor accepts a single argument, called an executor.
            // The executor function usually initiates some asynchronous operation.
            // Once it is finished, the executor should call `resolve` with the result, or `reject` if an error occurred.
            // The return value of the executor is ignored.
            // Returning a value from an executor function is a possible error
            // because the returned value cannot be used and it doesn’t affect the promise in any way.
            // Only return without a value is allowed, as it’s a control flow statement.
            "no-promise-executor-return": "error",

            // https://eslint.org/docs/latest/rules/no-prototype-builtins
            // Disallow calling some Object.prototype methods directly on objects
            // In ECMAScript 5.1, `Object.create` was added,
            // which enables the creation of objects with a specified `[[Prototype]].Object.create(null)`
            // is a common pattern used to create objects that will be used as a Map.
            // This can lead to errors when it is assumed that objects will have properties from `Object.prototype`.
            // This rule prevents calling some Object.prototype methods directly from an object.

            // Additionally, objects can have properties that shadow the builtins on `Object.prototype`,
            // potentially causing unintended behavior or denial-of-service security vulnerabilities.
            // For example, it would be unsafe for a webserver to parse JSON input from a client and call `hasOwnProperty` directly on the resulting object,
            // because a malicious client could send a JSON value like `{"hasOwnProperty": 1}` and cause the server to crash.

            // To avoid subtle bugs like this, it’s better to always call these methods from `Object.prototype`.
            // For example, `foo.hasOwnProperty("bar")` should be replaced with `Object.prototype.hasOwnProperty.call(foo, "bar")`.
            "no-prototype-builtins": "error",

            // https://eslint.org/docs/latest/rules/no-self-assign
            // Disallow assignments where both sides are exactly the same
            // Self assignments have no effect, so probably those are an error due to incomplete refactoring.
            // Those indicate that what you should do is still remaining.
            "no-self-assign": "error",

            // https://eslint.org/docs/latest/rules/no-self-compare
            // Disallow comparisons where both sides are exactly the same
            // Comparing a variable against itself is usually an error,
            // either a typo or refactoring error.
            // It is confusing to the reader and may potentially introduce a runtime error.
            // The only time you would compare a variable against itself is when you are testing for `NaN`.
            // However, it is far more appropriate to use `typeof x === 'number' && isNaN(x)` or the `Number.isNaN ES2015 function` for that use case
            // rather than leaving the reader of the code to determine the intent of self comparison.
            "no-self-compare": "error",

            // https://eslint.org/docs/latest/rules/no-setter-return
            // Disallow returning values from setters
            // Setters cannot return values.
            // While returning a value from a setter does not produce an error,
            // the returned value is being ignored. Therefore,
            // returning a value from a setter is either unnecessary or a possible error,
            // since the returned value cannot be used.
            "no-setter-return": "error",

            // https://eslint.org/docs/latest/rules/no-sparse-arrays
            // Disallow sparse arrays
            // Sparse arrays contain empty slots, most frequently due to multiple commas being used in an array literal
            "no-sparse-arrays": "error",

            // https://eslint.org/docs/latest/rules/no-template-curly-in-string
            // Disallow template literal placeholder syntax in regular strings
            // ECMAScript 6 allows programmers to create strings containing variable or expressions using template literals,
            // instead of string concatenation, by writing expressions like `${variable}` between two backtick quotes (`).
            // It can be easy to use the wrong quotes when wanting to use template literals,
            // by writing `"${variable}"`, and end up with the literal value `"${variable}"` instead of a string containing the value of the injected expressions.
            "no-template-curly-in-string": "error",

            // https://eslint.org/docs/latest/rules/no-this-before-super
            // Disallow `this`/`super` before calling `super()` in constructors
            // In the constructor of derived classes, if `this`/`super` are used before `super()` calls,
            // it raises a reference error.
            // This rule checks `this`/`super` keywords in constructors,
            // then reports those that are before `super()`.
            "no-this-before-super": "error",

            // https://eslint.org/docs/latest/rules/no-undef
            // Disallow the use of undeclared variables unless mentioned in `/*global */` comments
            // This rule can help you locate potential ReferenceErrors resulting from misspellings of variable and parameter names,
            // or accidental implicit globals (for example, from forgetting the `var` keyword in a `for` loop initializer).
            // Any reference to an undeclared variable causes a warning,
            // unless the variable is explicitly mentioned in a `/*global ...*/` comment,
            // or specified in the `globals key in the configuration file`.
            // A common use case for these is if you intentionally use globals that are defined elsewhere (e.g. in a script sourced from HTML).
            "no-undef": "error",

            // style???
            // https://eslint.org/docs/latest/rules/no-unexpected-multiline
            // Disallow confusing multiline expressions
            // Semicolons are usually optional in JavaScript, because of automatic semicolon insertion (ASI).
            // You can require or disallow semicolons with the `semi` rule.
            // This rule disallows confusing multiline expressions where a newline looks like it is ending a statement,
            // but is not.
            "no-unexpected-multiline": "error",

            // https://eslint.org/docs/latest/rules/no-unmodified-loop-condition
            // Disallow unmodified loop conditions
            // Variables in a loop condition often are modified in the loop. If not, it’s possibly a mistake.
            "no-unmodified-loop-condition": "error",

            // https://eslint.org/docs/latest/rules/no-unreachable
            // Disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
            "no-unreachable": "error",

            // https://eslint.org/docs/latest/rules/no-unreachable-loop
            // Disallow loops with a body that allows only one iteration
            // In rare cases where only one iteration (or at most one iteration) is intended behavior,
            // the code should be refactored to use `if` conditionals instead of `while`,
            // `do-while` and `for` loops.
            // It’s considered a best practice to avoid using loop constructs for such cases.
            "no-unreachable-loop": "error",

            // https://eslint.org/docs/latest/rules/no-unsafe-finally
            // Disallow control flow statements in finally blocks
            // JavaScript suspends the control flow statements of `try` and `catch` blocks until
            // the execution of `finally` block finishes. So, when `return`, `throw`, `break`, or `continue` is used in `finally`,
            // control flow statements inside `try` and `catch` are overwritten,
            // which is considered as unexpected behavior
            "no-unsafe-finally": "error",

            // https://eslint.org/docs/latest/rules/no-unsafe-negation
            // Disallow negating the left operand of relational operators
            // Just as developers might type `-a + b` when they mean `-(a + b)` for the negative of a sum,
            // they might type `!key in object` by mistake when they almost certainly mean `!(key in object)`
            // to test that a key is not in an object. `!obj instanceof Ctor` is similar.
            "no-unsafe-negation": ["error", {enforceForOrderingRelations: true}],

            // https://eslint.org/docs/latest/rules/no-unsafe-optional-chaining
            // Disallow use of optional chaining in contexts where the `undefined` value is not allowed
            // The optional chaining (`?.`) expression can short-circuit with a return value of `undefined`.
            // Therefore, treating an evaluated optional chaining expression as a function,
            // object, number, etc., can cause TypeError or unexpected results.
            "no-unsafe-optional-chaining": "error", // "no-unsafe-optional-chaining": ["error", { "disallowArithmeticOperators": true }]

            // https://eslint.org/docs/latest/rules/no-unused-private-class-members
            // Disallow unused private class members
            // Private class members that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.
            // Such class members take up space in the code and can lead to confusion by readers.
            "no-unused-private-class-members": "warn",

            // https://eslint.org/docs/latest/rules/no-unused-vars
            // Disallow unused variables
            // Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring.
            // Such variables take up space in the code and can lead to confusion by readers.
            "no-unused-vars": ["warn", {"args": "after-used"}], // "no-unused-vars": ["error", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }]
            // In environments outside of CommonJS or ECMAScript modules,
            // you may use `var` to create a global variable that may be used by other scripts.
            // You can use the `/* exported variableName */` comment block to indicate
            // that this variable is being exported and therefore should not be considered unused.

            // https://eslint.org/docs/latest/rules/no-use-before-define
            // Disallow the use of variables before they are defined
            // In JavaScript, prior to ES6, variable and function declarations are hoisted to the top of a scope,
            // so it’s possible to use identifiers before their formal declarations in code.
            // This can be confusing and some believe it is best to always declare variables and functions before using them.
            // In ES6, block-level bindings (`let` and `const`) introduce a “temporal dead zone”
            // where a ReferenceError will be thrown with any attempt to access the variable before its declaration.
            "no-use-before-define": ["warn", "nofunc"],

            // https://eslint.org/docs/latest/rules/
            // Disallow useless backreferences in regular expressions
            // In JavaScript regular expressions, it’s syntactically valid to define a backreference to a group
            // that belongs to another alternative part of the pattern,
            // a backreference to a group that appears after the backreference,
            // a backreference to a group that contains that backreference,
            // or a backreference to a group that is inside a negative lookaround.
            // However, by the specification, in any of these cases the backreference always ends up matching only zero-length (the empty string),
            // regardless of the context in which the backreference and the group appear.
            "no-useless-backreference": "error",

            // https://eslint.org/docs/latest/rules/require-atomic-updates
            // Disallow assignments that can lead to race conditions due to usage of `await` or `yield`
            // When writing asynchronous code, it is possible to create subtle race condition bugs.
            "require-atomic-updates": "error",

            // https://eslint.org/docs/latest/rules/use-isnan
            // Require calls to `isNaN()` when checking for `NaN`
            // In JavaScript, 'NaN' is a special value of the 'Number' type.
            // It’s used to represent any of the “not-a-number” values represented by
            // the double-precision 64-bit format as specified by the IEEE Standard for Binary Floating-Point Arithmetic.
            "use-isnan": ["error", {enforceForIndexOf: false}],

            // https://www.youtube.com/watch?v=IAIwe9tLtcg&ab_channel=Forsen%27sGiftbox
            // Enforce comparing `typeof` expressions against valid strings
            // For a vast majority of use cases, the result of the `typeof` operator is one of the following string literals:
            // `"undefined"`, `"object"a`, `"boolean"`, `"number"`, `"string"`, `"function"`, `"symbol"`, and `"bigint"`.
            // It is usually a typing mistake to compare the result of a `typeof` operator to other string literals.
            "valid-typeof": ["error", {requireStringLiterals: true}],
        }
    }, {
        files: ["*.tsx", "*.ts", "*.mts", "*.cts"], rules: {
            "no-undef": "off",
        },
    }
];
