// disable rule if necessary
module.exports = {
  rules: {
    // https://eslint.org/docs/latest/rules/accessor-pairs
    // Enforce getter and setter pairs in objects and classes
    // It’s a common mistake in JavaScript to create an object with just a setter for a property
    // but never have a corresponding getter defined for it. Without a getter,
    // you cannot read the property, so it ends up not being used.
    "accessor-pairs": "error",

    // https://eslint.org/docs/latest/rules/arrow-body-style
    // Require braces around arrow function bodies
    // Arrow functions have two syntactic forms for their function bodies.
    // They may be defined with a block body (denoted by curly braces) `() => { ... }`
    // or with a single expression `() => ...`, whose value is implicitly returned.
    "arrow-body-style": ["error", "as-needed"],

    // https://eslint.org/docs/latest/rules/block-scoped-var
    // Enforce the use of variables within the scope they are defined
    // The block-scoped-var rule generates warnings when variables are used outside of the block
    // in which they were defined. This emulates C-style block scope.
    // This rule aims to reduce the usage of variables outside of their binding context and emulate
    // traditional block scope from other languages.
    // This is to help newcomers to the language avoid difficult bugs with variable hoisting.
    "block-scoped-var": "error",

    // https://eslint.org/docs/latest/rules/camelcase
    // Enforce camelcase naming convention
    // When it comes to naming variables,
    // style guides generally fall into one of two camps:
    // camelcase (variableName) and underscores (variable_name).
    // This rule focuses on using the camelcase approach.
    // If your style guide calls for camelCasing your variable names, then this rule is for you!
    camelcase: "warn",

    // https://eslint.org/docs/latest/rules/capitalized-comments
    // Enforce or disallow capitalization of the first letter of a comment
    // Comments are useful for leaving information for future developers.
    // In order for that information to be useful and not distracting,
    // it is sometimes desirable for comments to follow a particular style.
    // One element of comment formatting styles is whether the first word of a comment should be capitalized or lowercase.
    // In general, no comment style is any more or less valid than any others, but many developers would agree that a consistent style can improve a project’s maintainability.
    "capitalized-comments": [
      "off",
      "always",
      { ignoreConsecutiveComments: true, ignoreInlineComments: true },
    ],

    // https://eslint.org/docs/latest/rules/class-methods-use-this
    // Enforce that class methods utilize `this`
    // If a class method does not use `this`, it can sometimes be made into a static function.
    // If you do convert the method into a static function,
    // instances of the class that call that particular method have to be converted to a static call as well (`MyClass.callStaticMethod()`)
    "class-methods-use-this": "warn",

    // https://eslint.org/docs/latest/rules/complexity
    // Enforce a maximum cyclomatic complexity allowed in a program
    // Cyclomatic complexity measures the number of linearly independent paths through a program’s source code.
    // This rule allows setting a cyclomatic complexity threshold.
    complexity: ["warn", 2],

    // https://eslint.org/docs/latest/rules/consistent-return
    // Require `return` statements to either always or never specify values
    // Unlike statically-typed languages which enforce that a function returns a specified type of value,
    // JavaScript allows different code paths in a function to return different types of values.
    // This rule requires `return` statements to either always or never specify values.
    // This rule ignores function definitions where the name begins with an uppercase letter,
    // because constructors (when invoked with the `new` operator) return the instantiated object implicitly if they do not return another object explicitly.
    "consistent-return": "error",

    // https://eslint.org/docs/latest/rules/consistent-this
    // Enforce consistent naming when capturing the current execution context
    // This rule enforces two things about variables with the designated alias names for this:

    // This rule enforces two things about variables with the designated alias names for this:
    // - If a variable with a designated name is declared,
    // it must be either initialized (in the declaration) or assigned (in the same scope as the declaration) the value `this`.
    // - If a variable is initialized or assigned the value `this`,
    // the name of the variable must be a designated alias.
    "consistent-this": ["warn", "that"],

    // https://eslint.org/docs/latest/rules/curly
    // Enforce consistent brace style for all control statements
    // This rule is aimed at preventing bugs and increasing code clarity by ensuring that block statements are wrapped in curly braces.
    // It will warn when it encounters blocks that omit curly braces.
    curly: ["error", "multi-line", "consistent"],

    // https://eslint.org/docs/latest/rules/default-case
    // Require `default` cases in `switch` statements
    // This rule aims to require `default` case in `switch` statements.
    // You may optionally include a `// no default` after the last `case` if there is no `default` case.
    // The comment may be in any desired case, such as `// No Default`.
    "default-case": "error",

    // https://eslint.org/docs/latest/rules/default-case-last
    // Enforce default clauses in switch statements to be last
    // This rule enforces `default` clauses in `switch` statements to be last.

    // It applies only to `switch` statements that already have a `default` clause.

    // This rule does not enforce the existence of `default` clauses.
    // See `default-case` if you also want to enforce the existence of `default` clauses in `switch` statements.
    "default-case-last": "error",

    // https://eslint.org/docs/latest/rules/default-param-last
    // Enforce default parameters to be last
    // This rule enforces default parameters to be the last of parameters.
    "default-param-last": ["warn"],

    // https://eslint.org/docs/latest/rules/dot-notation
    // Enforce dot notation whenever possible
    // This rule is aimed at maintaining code consistency and improving code readability by encouraging use of the dot notation style whenever possible.
    // As such, it will warn when it encounters an unnecessary use of square-bracket notation.
    "dot-notation": "warn",

    // https://eslint.org/docs/latest/rules/eqeqeq
    // Require the use of `===` and `!==`
    // This rule is aimed at eliminating the type-unsafe equality operators.
    eqeqeq: ["error", "smart"],

    // https://eslint.org/docs/latest/rules/func-name-matching
    // Require function names to match the name of the variable or property to which they are assigned
    // This rule requires function names to match the name of the variable or property to which they are assigned.
    // The rule will ignore property assignments where the property name is a literal
    // that is not a valid identifier in the ECMAScript version specified in your configuration (default ES5).
    "func-name-matching": ["warn", { considerPropertyDescriptor: true }],

    // https://eslint.org/docs/latest/rules/func-names
    // Require or disallow named `function` expressions
    // This rule can enforce or disallow the use of named function expressions.
    "func-names": ["error", "as-needed"],

    // https://eslint.org/docs/latest/rules/func-style
    // Enforce the consistent use of either `function` declarations or expressions
    // This rule enforces a particular type of function style throughout a JavaScript file,
    // either declarations or expressions.
    // You can specify which you prefer in the configuration.
    "func-style": ["warn", "expression"],

    // https://eslint.org/docs/latest/rules/grouped-accessor-pairs
    // Require grouped accessor pairs in object literals and classes
    // A getter and setter for the same property don’t necessarily have to be defined adjacent to each other.
    // This rule requires grouped definitions of accessor functions for the same property in object literals,
    // class declarations and class expressions.
    // Optionally, this rule can also enforce consistent order (`getBeforeSet` or `setBeforeGet`).
    // This rule does not enforce the existence of the pair for a getter or a setter.
    // See `accessor-pairs` if you also want to enforce getter/setter pairs.
    "grouped-accessor-pairs": ["warn", "getBeforeSet"],

    // https://eslint.org/docs/latest/rules/guard-for-in
    // This rule is aimed at preventing unexpected behavior
    // that could arise from using a `for in` loop without filtering the results in the loop.
    // As such, it will warn when `for in` loops do not filter their results with an `if` statement.
    "guard-for-in": "error",

    // https://eslint.org/docs/latest/rules/id-denylist
    // Disallow specified identifiers

    // “There are only two hard things in Computer Science: cache invalidation and naming things.” — Phil Karlton

    // Generic names can lead to hard-to-decipher code.
    // This rule allows you to specify a deny list of disallowed identifier names to avoid this practice.
    "id-denylist": ["off", "data", "callback"],

    // https://eslint.org/docs/latest/rules/id-length
    // Enforce minimum and maximum identifier lengths
    // Very short identifier names like `e`, `x`, `_t` or very long ones like `hashGeneratorResultOutputContainerObject`
    // can make code harder to read and potentially less maintainable.
    // To prevent this, one may enforce a minimum and/or maximum identifier length.
    "id-length": ["warn", { properties: "never", exceptions: ["_"] }],

    // https://eslint.org/docs/latest/rules/id-match
    // This rule requires identifiers in assignments and `function` definitions to match a specified regular expression.
    "id-match": ["off", "^[a-z]+([A-Z][a-z]+)*$"],

    // https://eslint.org/docs/latest/rules/init-declarations
    // Require or disallow initialization in variable declarations
    // This rule is aimed at enforcing or eliminating variable initializations during declaration.
    // For example, in the following code, `foo` is initialized during declaration, while `bar` is not.
    "init-declarations": ["warn", "always"],

    // https://eslint.org/docs/latest/rules/logical-assignment-operators
    // Require or disallow logical assignment logical operator shorthand
    "logical-assignment-operators": [
      "warn",
      "always",
      { enforceForIfStatements: true },
    ],

    // https://eslint.org/docs/latest/rules/max-classes-per-file
    // Enforce a maximum number of classes per file
    // This rule enforces that each file may contain only a particular number of classes and no more.
    "max-classes-per-file": ["warn", { ignoreExpressions: true }],

    // https://eslint.org/docs/latest/rules/max-depth
    // Enforce a maximum depth that blocks can be nested
    // This rule enforces a maximum depth that blocks can be nested to reduce code complexity.
    "max-depth": ["warn", 4],

    // https://eslint.org/docs/latest/rules/max-lines
    // Enforce a maximum number of lines per file
    // This rule enforces a maximum number of lines per file,
    // in order to aid in maintainability and reduce complexity.
    // Please note that most editors show an additional empty line at the end if the file ends with a line break.
    // This rule does not count that extra line.
    "max-lines": ["warn", { skipComments: true, skipBlankLines: true }],

    // https://eslint.org/docs/latest/rules/max-lines-per-function
    // Enforce a maximum number of lines of code in a function
    // This rule enforces a maximum number of lines per function,
    // in order to aid in maintainability and reduce complexity.
    "max-lines-per-function": [
      "warn",
      { skipBlankLines: true, skipComments: true, IIFEs: false },
    ],

    // https://eslint.org/docs/latest/rules/max-nested-callbacks
    // Enforce a maximum depth that callbacks can be nested
    // This rule enforces a maximum depth that callbacks can be nested to increase code clarity.
    "max-nested-callbacks": ["warn", 3],

    // https://eslint.org/docs/latest/rules/max-params
    // Enforce a maximum number of parameters in function definitions
    // This rule enforces a maximum number of parameters allowed in function definitions.
    "max-params": ["warn"],

    // https://eslint.org/docs/latest/rules/max-statements
    // Enforce a maximum number of statements allowed in function blocks
    // This rule enforces a maximum number of statements allowed in function blocks.
    "max-statements": ["warn"],

    // https://eslint.org/docs/latest/rules/multiline-comment-style
    // Enforce a particular style for multiline comments
    // This rule aims to enforce a particular style for multiline comments.
    "multiline-comment-style": ["warn", "separate-lines"],

    // https://eslint.org/docs/latest/rules/new-cap
    // Require constructor names to begin with a capital letter
    // This rule requires constructor names to begin with a capital letter.
    // Certain built-in identifiers are exempt from this rule.
    "new-cap": ["error", { newIsCap: true, capIsNew: true, properties: true }],

    // https://eslint.org/docs/latest/rules/no-alert
    // Disallow the use of `alert`, `confirm`, and `prompt`
    // This rule is aimed at catching debugging code that should be removed and popup UI elements
    // that should be replaced with less obtrusive, custom UIs.
    // As such, it will warn when it encounters `alert`, `prompt`,
    // and `confirm` function calls which are not shadowed.
    "no-alert": "error",

    // https://eslint.org/docs/latest/rules/no-array-constructor
    // Disallow `Array` constructors
    // This rule disallows `Array` constructors.
    "no-array-constructor": "error",

    // Disallow bitwise operators
    // The use of bitwise operators in JavaScript is very rare
    // and often `&` or `|` is simply a mistyped `&&` or `||`, which will lead to unexpected behavior.
    // This rule disallows bitwise operators.
    "eslint no-bitwise": "off",

    // https://eslint.org/docs/latest/rules/no-caller
    // Disallow the use of `arguments.caller` or `arguments.callee`
    // This rule is aimed at discouraging the use of deprecated and sub-optimal code
    // by disallowing the use of arguments.caller and arguments.callee.
    // As such, it will warn when arguments.caller and arguments.callee are used.
    "no-caller": "error",

    // https://eslint.org/docs/latest/rules/no-case-declarations
    // Disallow lexical declarations in case clauses
    // This rule disallows lexical declarations (`let`, `const`, `function` and `class`) in `case`/`default` clauses.
    // The reason is that the lexical declaration is visible in the entire switch block but it only gets initialized when it is assigned,
    // which will only happen if the case where it is defined is reached.

    // To ensure that the lexical declaration only applies to the current case clause wrap your clauses in blocks.
    "no-case-declarations": "error",

    // https://eslint.org/docs/latest/rules/no-confusing-arrow
    // Arrow functions (`=>`) are similar in syntax to some comparison operators (`>`, `<`, `<=`, and `>=`).
    // This rule warns against using the arrow function syntax in places where it could be confused with a comparison operator.
    "no-confusing-arrow": "warn",

    // https://eslint.org/docs/latest/rules/no-console
    // Disallow the use of `console`
    // In JavaScript that is designed to be executed in the browser,
    // it’s considered a best practice to avoid using methods on `console`.
    // Such messages are considered to be for debugging purposes and therefore not suitable to ship to the client.
    // In general, calls using `console` should be stripped before being pushed to production.
    "no-console": "error",

    // https://eslint.org/docs/latest/rules/no-continue
    // Disallow `continue` statements
    // The `continue` statement terminates execution of the statements in the current iteration of the current or labeled loop,
    // and continues execution of the loop with the next iteration.
    // When used incorrectly it makes code less testable, less readable and less maintainable.
    // Structured control flow statements such as `if` should be used instead.
    "no-continue": "warn",

    // https://eslint.org/docs/latest/rules/no-delete-var
    // Disallow `deleting` variables
    // The purpose of the delete operator is to remove a property from an object.
    // Using the `delete` operator on a variable might lead to unexpected behavior.
    "no-delete-var": "error",

    // https://eslint.org/docs/latest/rules/no-div-regex
    // Disallow division operators explicitly at the beginning of regular expressions
    "no-div-regex": "warn",

    // https://eslint.org/docs/latest/rules/no-else-return
    // Disallow `else` blocks after `return` statements in `if` statements
    // This rule is aimed at highlighting an unnecessary block of code following an `if` containing a return statement.
    // As such, it will warn when it encounters an `else` following a chain of `if`s, all of them containing a `return` statement.
    "no-else-return": "warn",

    // https://eslint.org/docs/latest/rules/no-empty
    // Disallow empty block statements
    // This rule disallows empty block statements.
    // This rule ignores block statements which contain a comment
    // (for example, in an empty `catch` or `finally` block of a `try` statement to indicate that execution should continue regardless of errors).
    "no-empty": ["error", { allowEmptyCatch: true }],

    // https://eslint.org/docs/latest/rules/no-empty-function
    // Disallow empty functions
    // This rule is aimed at eliminating empty functions.
    // A function will not be considered a problem if it contains a comment.
    "no-empty-function": ["error", { allow: ["constructors"] }],

    // https://eslint.org/docs/latest/rules/no-eq-null
    // Disallow `null` comparisons without type-checking operators
    // The `no-eq-null` rule aims reduce potential bug and unwanted behavior by ensuring that comparisons to null only match `null`,
    // and not also `undefined`. As such it will flag comparisons to null when using `==` and `!=.`
    "no-eq-null": "error",

    // https://eslint.org/docs/latest/rules/no-eval
    // Disallow the use of `eval()`
    // This rule is aimed at preventing potentially dangerous, unnecessary, and slow code by disallowing the use of the eval() function.
    // As such, it will warn whenever the eval() function is used.
    "no-eval": ["error", { allowIndirect: true }],

    // https://eslint.org/docs/latest/rules/no-extend-native
    // Disallow extending native types
    // In JavaScript, you can extend any object, including builtin or “native” objects.
    // Sometimes people change the behavior of these native objects in ways that break the assumptions made about them in other parts of the code.
    "no-extend-native": "error",

    // https://eslint.org/docs/latest/rules/no-extra-bind
    // Disallow unnecessary calls to `.bind()`
    // This rule is aimed at avoiding the unnecessary use of `bind()`
    //and as such will warn whenever an immediately-invoked function expression (IIFE) is using `bind()` and doesn’t have an appropriate this value.
    // This rule won’t flag usage of `bind()` that includes function argument binding.
    // Note: Arrow functions can never have their `this` value set using `bind()`.
    // This rule flags all uses of `bind()` with arrow functions as a problem
    "no-extra-bind": "warn",

    // https://eslint.org/docs/latest/rules/no-extra-boolean-cast
    // Disallow unnecessary boolean casts
    // In contexts such as an `if` statement’s test where the result of the expression will already be coerced to a Boolean,
    // casting to a Boolean via double negation (`!!`) or a `Boolean` call is unnecessary.
    // For example, these `if` statements are equivalent:
    "no-extra-boolean-cast": "warn",

    // https://eslint.org/docs/latest/rules/no-extra-label
    // Disallow unnecessary labels
    // This rule is aimed at eliminating unnecessary labels.
    "no-extra-label": "error",

    // https://eslint.org/docs/latest/rules/no-extra-semi
    // Disallow unnecessary semicolons
    // Typing mistakes and misunderstandings about where semicolons are required can lead to semicolons that are unnecessary.
    // While not technically an error, extra semicolons can cause confusion when reading code.
    "no-extra-semi": "error",

    // https://eslint.org/docs/latest/rules/no-floating-decimal
    // Disallow leading or trailing decimal points in numeric literals
    // This rule is aimed at eliminating floating decimal points and will warn whenever a numeric value has a decimal point but is missing a number either before or after it.
    "no-floating-decimal": "warn",

    // https://eslint.org/docs/latest/rules/no-global-assign
    // Disallow assignments to native objects or read-only global variables
    // This rule disallows modifications to read-only global variables.
    "no-global-assign": "error",

    // https://eslint.org/docs/latest/rules/no-implicit-coercion
    // Disallow shorthand type conversions
    "no-implicit-coercion": "off",

    // https://eslint.org/docs/latest/rules/no-implicit-globals
    // Disallow declarations in the global scope
    // When working with browser scripts, developers often forget that variable and function declarations at the top-level scope become global variables on the `window` object.
    // As opposed to modules which have their own scope.
    // Globals should be explicitly assigned to `window` or `self` if that is the intent.
    // Otherwise variables intended to be local to the script should be wrapped in an IIFE.
    // This rule disallows `var` and `function` declarations at the top-level script scope.
    // This does not apply to ES and CommonJS modules since they have a module scope.
    "no-implicit-globals": "error",

    // https://eslint.org/docs/latest/rules/no-implied-eval
    // Disallow the use of `eval()`-like methods
    // This rule aims to eliminate implied `eval()` through the use of `setTimeout()`, `setInterval()` or `execScript()`.
    // As such, it will warn when either function is used with a string as the first argument.
    "no-implied-eval": "error",

    // https://eslint.org/docs/latest/rules/no-inline-comments
    // Disallow inline comments after code
    // This rule disallows comments on the same line as code.
    "no-inline-comments": "off",

    // https://eslint.org/docs/latest/rules/no-invalid-this
    // Disallow use of `this` in contexts where the value of `this` is `undefined`
    // Under the strict mode, `this` keywords outside of classes or class-like objects might be `undefined` and raise a `TypeError`.
    // This rule applies only in strict mode. With `"parserOptions": { "sourceType": "module" }` in the ESLint configuration,
    // your code is in strict mode even without a `"use strict"` directive.
    "no-invalid-this": "error",

    // https://eslint.org/docs/latest/rules/no-iterator
    // Disallow the use of the `__iterator__` property
    // This rule is aimed at preventing errors that may arise from using the `__iterator__` property, which is not implemented in several browsers.
    // As such, it will warn whenever it encounters the `__iterator__` property.
    "no-iterator": "error",

    // https://eslint.org/docs/latest/rules/no-label-var
    // Disallow labels that share a name with a variable
    // This rule aims to create clearer code by disallowing the bad practice of creating a label that shares a name with a variable that is in scope.
    "no-label-var": "error",

    // https://eslint.org/docs/latest/rules/no-labels
    // Disallow labeled statements
    // This rule aims to eliminate the use of labeled statements in JavaScript.
    // It will warn whenever a labeled statement is encountered and whenever break or continue are used with a label.
    "no-labels": ["warn", { allowLoop: true, allowLoop: true }],

    // https://eslint.org/docs/latest/rules/no-lone-blocks
    // Disallow unnecessary nested blocks
    // This rule aims to eliminate unnecessary and potentially confusing blocks at the top level of a script or within other blocks.
    "no-lone-blocks": "warn",

    // https://eslint.org/docs/latest/rules/no-lonely-if
    // Disallow `if` statements as the only statement in `else` blocks
    // This rule disallows `if` statements as the only statement in `else` blocks.
    "no-lonely-if": "warn",

    // https://eslint.org/docs/latest/rules/no-loop-func
    // Disallow function declarations that contain unsafe references inside loop statements
    // This error is raised to highlight a piece of code that may not work as you expect it to and could also indicate a misunderstanding of how the language works.
    // Your code may run without any problems if you do not fix this error,a
    // but in some situations it could behave unexpectedly.
    // This rule disallows any function within a loop that contains unsafe references (e.g. to modified variables from the outer scope).
    "no-loop-func": "error",

    // https://eslint.org/docs/latest/rules/no-magic-numbers
    // Disallow magic numbers
    // ‘Magic numbers’ are numbers that occur multiple times in code without an explicit meaning.
    // They should preferably be replaced by named constants.
    // The `no-magic-numbers` rule aims to make code more readable and refactoring easier by ensuring that special numbers are declared as constants to make their meaning explicit.
    "no-magic-numbers": [
      "warn",
      {
        ignore: [0, 1, 2],
        ignoreArrayIndexes: true,
        ignoreDefaultValues: true,
        enforceConst: true,
      },
    ],

    // https://eslint.org/docs/latest/rules/no-mixed-operators
    // Disallow mixed binary operators
    // This rule checks BinaryExpression, LogicalExpression and ConditionalExpression.
    // This rule may conflict with `no-extra-parens` rule.
    // If you use both this and `no-extra-parens` rule together,
    // you need to use the `nestedBinaryExpressions` option of `no-extra-parens` rule.
    "no-mixed-operators": "error",

    // https://eslint.org/docs/latest/rules/no-multi-assign
    // Disallow use of chained assignment expressions
    // This rule disallows using multiple assignments within a single statement.
    "no-multi-assign": ["warn", { ignoreNonDeclaration: true }],

    // https://eslint.org/docs/latest/rules/no-multi-str
    // Disallow multiline strings
    // This rule is aimed at preventing the use of multiline strings.
    "no-multi-str": "warn",

    // https://eslint.org/docs/latest/rules/no-negated-condition
    // Disallow negated conditions
    // This rule disallows negated conditions in either of the following:
    // - `if` statements which have an `else` branch
    // - ternary expressions
    "no-negated-condition": "error",

    // https://eslint.org/docs/latest/rules/no-nested-ternary
    // Disallow nested ternary expressions
    // Nesting ternary expressions can make code more difficult to understand.
    // The `no-nested-ternary` rule disallows nested ternary expressions.
    "no-nested-ternary": "off",

    // https://eslint.org/docs/latest/rules/no-new
    // Disallow new operators outside of assignments or comparisons
    // The goal of using `new` with a constructor is typically to create an object of a particular type and store that object in a variable,
    // This rule is aimed at maintaining consistency and convention by disallowing constructor calls using
    // the `new` keyword that do not assign the resulting object to a variable.
    "no-new": "warn",

    // https://eslint.org/docs/latest/rules/no-new-func
    // Disallow `new` operators with the `Function` object
    // This is considered by many to be a bad practice due to the difficulty in debugging and reading these types of functions. In addition,
    // Content-Security-Policy (CSP) directives may disallow the use of eval() and similar methods for creating code from strings.
    // This error is raised to highlight the use of a bad practice. By passing a string to the Function constructor,
    // you are requiring the engine to parse that string much in the way it has to when you call the `eval` function.
    "no-new-func": "error",

    // https://eslint.org/docs/latest/rules/no-new-object
    // Disallow `Object` constructors
    // This rule disallows `Object` constructors.
    "no-new-object": "warn",

    // https://eslint.org/docs/latest/rules/no-new-wrappers
    // Disallow new operators with the String, Number, and Boolean objects
    // The first problem is that primitive wrapper objects are, in fact, objects.
    // That means `typeof` will return `"object"` instead of `"string"`, `"number"`, or `"boolean"`.
    // The second problem comes with boolean objects.
    // Every object is truthy, that means an instance of `Boolean` always resolves to `true` even when its actual value is `false`.
    // For these reasons, it’s considered a best practice to avoid using primitive wrapper types with `new`.
    // This rule aims to eliminate the use of `String`, `Number`, and `Boolean` with the `new` operator.
    // As such, it warns whenever it sees `new String`, `new Number`, or `new Boolean`.
    "no-new-wrappers": "error",

    // https://eslint.org/docs/latest/rules/no-nonoctal-decimal-escape
    // Disallow `\8` and `\9` escape sequences in string literals
    // This rule disallows `\8` and `\9` escape sequences in string literals.
    "no-nonoctal-decimal-escape": "error",

    // https://eslint.org/docs/latest/rules/no-octal
    // Disallow octal literals
    // The rule disallows octal literals.
    // Because the leading zero which identifies an octal literal has been a source of confusion and error in JavaScript code,
    // ECMAScript 5 deprecates the use of octal numeric literals.
    // If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.
    "no-octal": "error",

    // https://eslint.org/docs/latest/rules/no-octal-escape
    // Disallow octal escape sequences in string literals
    // As of the ECMAScript 5 specification, octal escape sequences in string literals are deprecated and should not be used.
    // Unicode escape sequences should be used instead.
    // This rule disallows octal escape sequences in string literals.
    // If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.
    "no-octal-escape": "error",

    // https://eslint.org/docs/latest/rules/no-param-reassign
    // Disallow reassigning `function` parameters
    // This rule aims to prevent unintended behavior caused by modification or reassignment of function parameters.
    "no-param-reassign": ["off", { props: false }],

    // https://eslint.org/docs/latest/rules/no-plusplus
    // Disallow the unary operators `++` and `--`
    // This rule disallows the unary operators `++` and `--`
    "no-plusplus": "off",

    // https://eslint.org/docs/latest/rules/no-proto
    // Disallow the use of the `__proto__` property
    // `__proto__` property has been deprecated as of ECMAScript 3.1 and shouldn’t be used in the code.
    // Use `Object.getPrototypeOf` and `Object.setPrototypeOf` instead.
    // When an object is created with the `new` operator,
    // `__proto__` is set to the original “prototype” property of the object’s constructor function.
    // `Object.getPrototypeOf` is the preferred method of getting the object’s prototype.
    // To change an object’s prototype, use `Object.setPrototypeOf.`
    "no-proto": "error",

    // https://eslint.org/docs/latest/rules/no-redeclare
    // Disallow variable redeclaration
    // In JavaScript, it’s possible to redeclare the same variable name using `var`.
    // This can lead to confusion as to where the variable is actually declared and initialized.
    // This rule is aimed at eliminating variables that have multiple declarations in the same scope.
    "no-redeclare": ["error", { builtinGlobals: true }],

    // https://eslint.org/docs/latest/rules/no-regex-spaces
    // Disallow multiple spaces in regular expressions
    // This rule disallows multiple spaces in regular expression literals.
    "no-regex-spaces": "warn",

    // https://eslint.org/docs/latest/rules/no-restricted-exports
    // Disallow specified names in exports
    // In a project, certain names may be disallowed from being used as exported names for various reasons.
    // By default, this rule doesn’t disallow any names.
    // Only the names you specify in the configuration will be disallowed.
    // "no-restricted-exports": [
    //   "error",
    //   {
    //     restrictedNamedExports: [
    //       "foo",
    //       "bar",
    //       "Baz",
    //       "a",
    //       "b",
    //       "c",
    //       "d",
    //       "e",
    //       "👍",
    //     ],
    //   },
    // ],

    // https://eslint.org/docs/latest/rules/no-restricted-globals
    // Disallow specified global variables
    // Disallowing usage of specific global variables can be useful if you want to allow a set of global variables by enabling an environment,
    // but still want to disallow some of those.
    // For instance, early Internet Explorer versions exposed the current DOM event as a global variable `event`,
    // but using this variable has been considered as a bad practice for a long time.
    // Restricting this will make sure this variable isn’t used in browser code.
    // This rule allows you to specify global variable names that you don’t want to use in your application.
    "no-restricted-globals": [
      "error",
      {
        name: "event",
        message: "Use local parameter instead.",
      },
      {
        name: "fdescribe",
        message: "Do not commit fdescribe. Use describe instead.",
      },
    ],

    // https://eslint.org/docs/latest/rules/no-restricted-imports
    // Disallow specified modules when loaded by `import`
    // This rule allows you to specify imports that you don’t want to use in your application.
    "no-restricted-imports": ["off", "import1", "import2"],

    // https://eslint.org/docs/latest/rules/no-restricted-properties
    // Disallow certain properties on certain objects
    // This rule looks for accessing a given property key on a given object name,
    // either when reading the property’s value or invoking it as a function.a
    // You may specify an optional message to indicate an alternative API or a reason for the restriction.
    "no-restricted-properties": [
      "off",
      {
        object: "disallowedObjectName",
        property: "disallowedPropertyName",
      },
    ],

    // https://eslint.org/docs/latest/rules/no-restricted-syntax
    // Disallow specified syntax
    // JavaScript has a lot of language features, and not everyone likes all of them.
    // As a result, some projects choose to disallow the use of certain language features altogether.
    // For instance, you might decide to disallow the use of `try-catch` or `class,`
    // or you might decide to disallow the use of the `in` operator.
    "no-restricted-syntax": [
      "off",
      "FunctionExpression",
      "WithStatement",
      "BinaryExpression[operator='in']",
    ],

    // https://eslint.org/docs/latest/rules/no-return-assign
    // Disallow assignment operators in `return` statements
    // One of the interesting, and sometimes confusing, aspects of JavaScript is that assignment can happen at almost any point.
    // Because of this, an errant equals sign can end up causing assignment when the true intent was to do a comparison.
    // This is especially true when using a return statement.
    // This rule aims to eliminate assignments from return statements.
    // As such, it will warn whenever an assignment is found as part of return.
    "no-return-assign": "warn",

    // https://eslint.org/docs/latest/rules/no-return-await
    // Disallow unnecessary `return` `await`
    // Using `return await` inside an `async function` keeps the current function in the call stack until the Promise that is being awaited has resolved,
    // at the cost of an extra microtask before resolving the outer Promise.
    // `return await` can also be used in a try/catch statement to catch errors from another function that returns a Promise.

    // You can avoid the extra microtask by not awaiting the return value,
    // with the trade off of the function no longer being a part of the stack trace if an error is thrown asynchronously from the Promise being returned.
    // This can make debugging more difficult.
    // This rule aims to prevent a likely common performance hazard due to a lack of understanding of the semantics of `async function`.
    "no-return-await": "warn",

    // https://eslint.org/docs/latest/rules/no-script-url
    // Disallow `javascript`: urls
    // Using `javascript`: URLs is considered by some as a form of `eval`.
    // Code passed in `javascript`: URLs has to be parsed and evaluated by the browser in the same way that `eval` is processed.
    "no-script-url": "warn",

    /* interesting!!! */
    // https://eslint.org/docs/latest/rules/no-sequences
    // Disallow comma operators
    // The comma operator includes multiple expressions where only one is expected.
    // It evaluates each operand from left to right and returns the value of the last operand.
    // However, this frequently obscures side effects, and its use is often an accident.
    "no-sequences": ["warn", { allowInParentheses: false }],

    // https://eslint.org/docs/latest/rules/no-shadow
    // Disallow variable declarations from shadowing variables declared in the outer scope
    // Shadowing is the process by which a local variable shares the same name as a variable in its containing scope.
    // This rule aims to eliminate shadowed variable declarations.
    "no-shadow": "error",

    // https://eslint.org/docs/latest/rules/no-shadow-restricted-names
    // Disallow identifiers from shadowing restricted names
    // ES5 §15.1.1 Value Properties of the Global Object (`NaN`, `Infinity`, `undefined`) as well as
    // strict mode restricted identifiers `eval` and `arguments` are considered to be restricted names in JavaScript.
    // Defining them to mean something else can have unintended consequences and confuse others reading the code.
    "no-shadow-restricted-names": "error",

    // https://eslint.org/docs/latest/rules/no-ternary
    // Disallow ternary operators
    // The ternary operator is used to conditionally assign a value to a variable.
    // Some believe that the use of ternary operators leads to unclear code.
    "no-ternary": "off",

    // https://eslint.org/docs/latest/rules/no-throw-literal
    // Disallow throwing literals as exceptions
    // This rule is aimed at maintaining consistency when throwing exception by disallowing to throw literals and other expressions which cannot possibly be an `Error` object.
    "no-throw-literal": "warn",

    // https://eslint.org/docs/latest/rules/no-undef-init
    // Disallow initializing variables to `undefined`
    // In JavaScript, a variable that is declared and not initialized to any value automatically gets the value of `undefined`.
    // This rule aims to eliminate `var` and `let` variable declarations that initialize to `undefined`.
    "no-undef-init": "warn",

    // https://eslint.org/docs/latest/rules/no-undefined
    // This rule aims to eliminate the use of `undefined`, and as such, generates a warning whenever it is used.
    "no-undefined": "error",

    // https://eslint.org/docs/latest/rules/no-underscore-dangle
    // Disallow dangling underscores in identifiers
    // This rule disallows dangling underscores in identifiers.
    "no-underscore-dangle": "off",

    // https://eslint.org/docs/latest/rules/no-unneeded-ternary
    // Disallow ternary operators when simpler alternatives exist
    // This rule disallow ternary operators when simpler alternatives exist.
    "no-unneeded-ternary": "warn",

    // https://eslint.org/docs/latest/rules/no-unused-expressions
    // Disallow unused expressions
    "no-unused-expressions": "error",

    // https://eslint.org/docs/latest/rules/no-unused-labels
    // This rule is aimed at eliminating unused labels.
    "no-unused-labels": "warn",

    // https://eslint.org/docs/latest/rules/no-useless-call
    // Disallow unnecessary calls to `.call()` and `.apply()`
    // The function invocation can be written by `Function.prototype.call()` and `Function.prototype.apply()`.
    // But `Function.prototype.call()` and `Function.prototype.apply()` are slower than the normal function invocation.
    // This rule is aimed to flag usage of `Function.prototype.call()` and `Function.prototype.apply()` that can be replaced with the normal function invocation.
    "no-useless-call": "error",

    // https://eslint.org/docs/latest/rules/no-useless-catch
    // Disallow unnecessary `catch` clauses
    // A `catch` clause that only rethrows the original error is redundant,
    // and has no effect on the runtime behavior of the program.
    // These redundant clauses can be a source of confusion and code bloat,
    // so it’s better to disallow these unnecessary `catch` clauses.
    "no-useless-catch": "error",

    // https://eslint.org/docs/latest/rules/no-useless-computed-key
    // Disallow unnecessary computed property keys in objects and classes
    // This rule disallows unnecessary usage of computed property keys.
    "no-useless-computed-key": "error",

    // https://eslint.org/docs/latest/rules/no-useless-concat
    // Disallow unnecessary concatenation of literals or template literals
    // This rule aims to flag the concatenation of 2 literals when they could be combined into a single literal. Literals can be strings or template literals.
    "no-useless-concat": "error",

    // https://eslint.org/docs/latest/rules/no-useless-constructor
    // Disallow unnecessary constructors
    // ES2015 provides a default class constructor if one is not specified.
    // As such, it is unnecessary to provide an empty constructor or one that simply delegates into its parent class
    // This rule flags class constructors that can be safely removed without changing how the class works.
    "no-useless-constructor": "error",

    // https://eslint.org/docs/latest/rules/no-useless-escape
    // Disallow unnecessary escape characters
    // Escaping non-special characters in strings, template literals, and regular expressions doesn’t have any effect
    // This rule flags escapes that can be safely removed without changing behavior.
    "no-useless-escape": "warn",

    // https://eslint.org/docs/latest/rules/no-useless-rename
    // Disallow renaming import, export, and destructured assignments to the same name
    // ES2015 allows for the renaming of references in import and export statements as well as destructuring assignments.
    // This gives programmers a concise syntax for performing these operations while renaming these references
    // This rule disallows the renaming of import, export, and destructured assignments to the same name.
    "no-useless-rename": "error",

    // https://eslint.org/docs/latest/rules/no-useless-return
    // Disallow redundant return statements
    // A `return;` statement with nothing after it is redundant, and has no effect on the runtime behavior of a function.
    // This can be confusing, so it’s better to disallow these redundant statements.
    // This rule aims to report redundant `return` statements.
    "no-useless-return": "error",

    // https://eslint.org/docs/latest/rules/no-var
    // Require `let` or `const` instead of `var`
    // ECMAScript 6 allows programmers to create variables with block scope instead of function scope using the `let` and `const` keywords.
    // Block scope is common in many other programming languages and helps programmers avoid mistakes
    // This rule is aimed at discouraging the use of `var` and encouraging the use of `const` or `let` instead.
    "no-var": "error",

    // https://eslint.org/docs/latest/rules/no-void
    // Disallow `void` operators
    // The `void` operator takes an operand and returns `undefined: void expression` will evaluate `expression` and return `undefined`. It can be used to ignore any side effects `expression` may produce:
    // The common case of using `void` operator is to get a “pure” `undefined` value as prior to ES5 the `undefined` variable was mutable
    // This rule aims to eliminate use of void operator.
    "no-void": "off",

    // https://eslint.org/docs/latest/rules/no-warning-comments
    // Disallow specified warning terms in comments
    // Developers often add comments to code which is not complete or needs review.
    // Most likely you want to fix or review the code, and then remove the comment, before you consider the code to be production ready.
    // This rule reports comments that include any of the predefined terms specified in its configuration.
    "no-warning-comments": "warn",

    // https://eslint.org/docs/latest/rules/no-with
    // Disallow `with` statements
    // The `with` statement is potentially problematic because it adds members of an object to the current scope,
    // making it impossible to tell what a variable inside the block actually refers to.
    // This rule disallows `with` statements.
    // If ESLint parses code in strict mode, the parser (instead of this rule) reports the error.
    "no-with": "error",

    // https://eslint.org/docs/latest/rules/object-shorthand
    // Require or disallow method and property shorthand syntax for object literals
    // ECMAScript 6 provides a concise form for defining object literal methods and properties.
    // This syntax can make defining complex object literals much cleaner.
    // This rule enforces the use of the shorthand syntax.
    // This applies to all methods (including generators) defined in object literals and
    // any properties defined where the key name matches name of the assigned variable.
    "object-shorthand": "error",
  },
  overrides: [
    {
      // React Files
      files: ["*.tsx", "*.jsx"],
      rules: {
        "new-cap": ["error", { newIsCap: true, properties: true }],
      },
    },
    {
      // Node Files
      files: ["*.mjs", "*.cjs"],
      rules: {
        "no-console": 0,
      },
    },
  ],
};
