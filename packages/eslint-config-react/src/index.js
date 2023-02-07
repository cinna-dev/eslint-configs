module.exports = {
  extends: ["plugin:react/jsx-runtime"],
  plugins: ["react"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
	settings: {
		react: {
			version: "detect"
		}
	},
  overrides: [
    {
      files: ["*.tsx", "*.ts", "*cts", "*mts"],
      rules: {
        // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/boolean-prop-naming.md
        // Allows you to enforce a consistent naming pattern for props which expect a boolean value.
        "react/boolean-prop-naming": "warn",

        //https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/button-has-type.md
        // The default value of `type` attribute for `button` HTML element is `"submit"` which is often not
        // the desired behavior and may lead to unexpected page reloads.
        // This rules enforces an explicit `type` attribute for all the `button` elements and checks that its value is valid per spec (i.e., is one of `"button"`, `"submit"`, and `"reset"`).
        "react/button-has-type": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/default-props-match-prop-types.md
        // This rule aims to ensure that any prop in `defaultProps` has a non-required type definition.
        // Having `defaultProps` for non-existent prop types is likely the result of errors in refactoring or a sign of a missing prop type.
        // Having a `defaultProp` for a required property similarly indicates a possible refactoring problem.
        "react/default-props-match-prop-types": [
          "error",
          { allowRequiredDefaults: true },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/destructuring-assignment.md
        // Enforce consistent usage of destructuring assignment of props, state, and context
        "react/destructuring-assignment": ["error", "always"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/display-name.md
        // DisplayName allows you to name your component. This name is used by React in debugging messages.
        /* !!deactivated for performance reasons!! */
        "react/display-name": ["off", { ignoreTranspilerName: true }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/forbid-component-props.md
        // Disallow certain props on components
        // By default this rule prevents passing of `props that add lots of complexity` (`className`, `style`) to Components. This rule only applies to Components (e.g. `<Foo />`) and not DOM nodes (e.g. `<div />`).
        // The list of `forbidden` props can be customized with the forbid option.
        "react/forbid-component-props": "off",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/HEAD/docs/rules/forbid-dom-props.md
        // Disallow certain props on DOM Nodes
        "react/forbid-dom-props": ["error", { forbid: ["key"] }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/forbid-elements.md
        // Disallow certain elements
        // You may want to forbid usage of certain elements in favor of others, (e.g. forbid all `<div />` and use `<Box />` instead).
        // This rule allows you to configure a list of forbidden elements and to specify their desired replacements.
        "react/forbid-elements": "off",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/forbid-foreign-prop-types.md
        // Disallow using another component's propTypes
        // This rule forbids using another component's prop types unless they are explicitly imported/exported.
        // This allows people who want to use `babel-plugin-transform-react-remove-prop-types` to remove propTypes from their components in production builds, to do so safely.
        // In order to ensure that imports are explicitly exported it is recommended to use the `"named" rule in eslint-plugin-import in conjunction with this rule.
        "react/forbid-foreign-prop-types": [
          "error",
          { allowInPropTypes: true },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/forbid-prop-types.md
        // Disallow certain propTypes
        // By default this rule prevents vague prop types with more specific alternatives available (`any`, `array`, `object`), but any prop type can be disabled if desired.
        // The defaults are chosen because they have obvious replacements.
        // `any` should be replaced with, well, anything.
        // array and `object` can be replaced with `arrayOf` and `shape`, respectively.
        "react/forbid-prop-types": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/function-component-definition.md
        // Enforce a specific function type for function components
        // This option enforces a specific function type for function components.
        "react/function-component-definition": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/hook-use-state.md
        // Ensure destructuring and symmetric naming of useState hook value and setter variables
        // This rule checks whether the value and setter variables destructured from a React.useState() call are named symmetrically.
        // "react/hook-use-state": ["warn", { allowDestructuredState: true }],
        "react/hook-use-state": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/iframe-missing-sandbox.md
        // Enforce sandbox attribute on iframe elements
        // The sandbox attribute enables an extra set of restrictions for the content in the iframe.
        // Using sandbox attribute is considered a good security practice.
        // See <https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe#attr-sandbox>
        // This rule checks all React iframe elements and verifies that there is sandbox attribute and that it's value is valid.
        // In addition to that it also reports cases where attribute contains `allow-scripts` and `allow-same-origin` at the same time as this combination allows the embedded document to remove the sandbox attribute and bypass the restrictions.
        "react/iframe-missing-sandbox": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-boolean-value.md
        // Enforce boolean attributes notation in JSX
        // `When using a boolean attribute in JSX`, you can set the attribute value to `true` or omit the value.
        "react/jsx-boolean-value": ["error", "always"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-child-element-spacing.md
        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
        // Since React removes extraneous new lines between elements when possible,
        // it is possible to end up with inline elements that are not rendered with spaces between them and adjacent text.
        // This is often indicative of an error, so this rule attempts to detect JSX markup with ambiguous spacing.
        "react/jsx-child-element-spacing": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-closing-bracket-location.md
        // Enforce closing bracket location in JSX
        // This rule checks all JSX multiline elements and verifies the location of the closing bracket.
        // By default this one must be aligned with the opening tag.
        "react/jsx-closing-bracket-location": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-closing-tag-location.md
        // Enforce closing tag location for multiline JSX
        // Enforce the closing tag location for multiline JSX elements.
        "react/jsx-closing-tag-location": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-curly-brace-presence.md
        // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
        // This rule allows you to enforce curly braces or disallow unnecessary curly braces in JSX props and/or children.
        // For situations where JSX expressions are unnecessary,
        // please refer to the React doc and this page about JSX gotchas.
        // By default, this rule will check for and warn about unnecessary curly braces in both JSX props and children.
        // For the sake of backwards compatibility, prop values that are JSX elements are not considered by default.
        // You can pass in options to enforce the presence of curly braces on JSX props, children, JSX prop values that are JSX elements, or any combination of the three.
        // The same options are available for not allowing unnecessary curly braces as well as ignoring the check.
        "react/jsx-curly-brace-presence": [
          "warn",
          { props: "never", children: "never", propElementValues: "always" },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-curly-newline.md
        // Enforce consistent linebreaks in curly braces in JSX attributes and expressions
        // Many style guides require or disallow newlines inside of jsx curly expressions.
        "react/jsx-curly-newline": [
          "warn",
          { multiline: "consistent", singleline: "consistent" },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-curly-spacing.md
        // Enforce or disallow spaces inside of curly braces in JSX attributes and expressions
        // While formatting preferences are very personal, a number of style guides require or disallow spaces between curly braces.
        // This rule aims to maintain consistency around the spacing inside of JSX attributes and expressions inside element children.
        // It either requires or disallows spaces between those braces and the values inside of them.
        "react/jsx-curly-spacing": [
          "warn",
          {
            when: "never",
            children: true,
            allowMultiline: false,
            attributes: { allowMultiline: false },
            spacing: { objectLiterals: "never" },
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-equals-spacing.md
        // Enforce or disallow spaces around equal signs in JSX attributes
        // Some style guides require or disallow spaces around equal signs.
        // This rule will enforce consistency of spacing around equal signs in JSX attributes,
        // by requiring or disallowing one or more spaces before and after `=`.
        "react/jsx-equals-spacing": ["warn", "never"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-filename-extension.md
        // Disallow file extensions that may contain JSX
        "react/jsx-filename-extension": ["error", { allow: "as-needed" }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-first-prop-new-line.md
        // Enforce proper position of the first property in JSX
        // Ensure correct position of the first property.
        // Note: The fixer does not include indentation. Please rerun lint to correct those errors.
        "react/jsx-first-prop-new-line": ["warn", "always"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-fragments.md
        // Enforce shorthand or standard form for React fragments
        // In JSX, a React `fragment` is created either with `<React.Fragment>...</React.Fragment>`, or, using the shorthand syntax, `<>...</>`.
        "react/jsx-fragments": ["warn", "syntax"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-handler-names.md
        // Enforce event handler naming conventions in JSX
        // Ensures that any component or prop methods used to handle events are correctly prefixed.
        "react/jsx-handler-names": [
          "warn",
          {
            eventHandlerPrefix: "handle",
            eventHandlerPropPrefix: "on",
            checkLocalVariables: false,
            checkInlineFunction: false,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-indent.md
        // Enforce JSX indentation
        // This option validates a specific indentation style for JSX.
        // Note: The fixer will fix whitespace and tabs indentation.
				// ! indentation should be done by a formatter
        "react/jsx-indent": [
          "warn",
          "off",
          { checkAttributes: false, indentLogicalExpressions: true },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-indent-props.md
        // This option validates a specific indentation style for props.
        "react/jsx-indent-props": ["warn", 2],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-key.md
        // Disallow missing `key` props in iterators/collection literals
        // Warn if an element that likely requires a `key` prop--namely, one present in an array literal or an arrow function expression.
        "react/jsx-key": [
          "error",
          {
            checkFragmentShorthand: true,
            checkKeyMustBeforeSpread: true,
            warnOnDuplicates: true,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-max-depth.md
        // Enforce JSX maximum depth
        // This option validates a specific depth for JSX.
        "react/jsx-max-depth": ["off", { max: 3 }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-max-props-per-line.md
        // Enforce maximum of props on a single line in JSX
        // Limiting the maximum of props on a single line can improve readability.
        // Note: The fixer does not include indentation. Please rerun lint to correct those errors.
        "react/jsx-max-props-per-line": [
          "warn",
          { maximum: { single: 2, multi: 1 } },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-newline.md
        // Require or prevent a new line after jsx elements and expressions
        // This is a stylistic rule intended to make JSX code more readable by requiring or preventing lines between adjacent JSX elements and expressions.
        "react/jsx-newline": [
          "warn",
          { prevent: false, allowMultilines: false },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-bind.md
        // Disallow .bind() or arrow functions in JSX props
        // A `bind` call or `arrow function` in a JSX prop will create a brand new function on every single render.
        // This is bad for performance, as it may cause unnecessary re-renders if a brand new function is passed as a prop to a component that uses reference equality check on the prop to determine if it should update.
        // Note that this behavior is different for `ref` props, which is a special case in React that does not cause re-renders when a brand new function is passed.
        // See `ignore-refs` below for more information.
        "react/jsx-no-bind": [
          "error",
          {
            ignoreDOMComponents: false,
            ignoreRefs: false,
            allowArrowFunctions: false,
            allowFunctions: true,
            allowBind: false,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-comment-textnodes.md
        // Disallow comments from being inserted as text nodes
        // This rule prevents comment strings (e.g. beginning with `//` or `/*`) from being accidentally injected as a text node in JSX statements.
        "react/jsx-no-comment-textnodes": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-constructed-context-values.md
        // Disallows JSX context provider values from taking values that will cause needless rerenders
        // This rule prevents non-stable values (i.e. object identities) from being used as a value for `Context.Provider`.
        // One way to resolve this issue may be to wrap the value in a `useMemo()`.
        // If it's a function then `useCallback()` can be used as well.
        // If you expect the context to be rerun on each render, then consider adding a comment/lint supression explaining why.
        "react/jsx-no-constructed-context-values": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-duplicate-props.md
        // Disallow duplicate properties in JSX
        // Creating JSX elements with duplicate props can cause unexpected behavior in your application.
        "react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-leaked-render.md
        // Disallow problematic leaked values from being rendered
        // Using the `&&` operator to render some element conditionally in JSX can cause unexpected values being rendered, or even crashing the rendering.
        // This rule aims to prevent dangerous leaked values from being rendered since they can cause unexpected values reaching the final DOM or even crashing your render method.
        // In React, you might end up rendering unexpected values like `0` or `NaN`. In React Native, your render method will crash if you render `0`, `'',` or `NaN`
        "react/jsx-no-leaked-render": [
          "error",
          { validStrategies: ["coerce", "ternary"] },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-literals.md
        // Disallow usage of string literals in JSX
        // There are a few scenarios where you want to avoid string literals in JSX. You may want to enforce consistency, reduce syntax highlighting issues,
        // or ensure that strings are part of a translation system.
        "react/jsx-no-literals": [
          "warn",
          {
            noStrings: true,
            allowedStrings: ["allowed"],
            ignoreProps: false,
            noAttributeStrings: true,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-script-url.md
        // Disallow usage of javascript: URLs
        // In React 16.9 any URLs starting with javascript: scheme log a warning.
        // React considers the pattern as a dangerous attack surface, see details.
        // In a future major release, React will throw an error if it encounters a javascript: URL.
        "react/jsx-no-script-url": [
          "error",
          [
            {
              name: "Link",
              props: ["to"],
            },
            {
              name: "Foo",
              props: ["href", "to"],
            },
          ],
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-target-blank.md
        // Disallow `target="_blank"` attribute without `rel="noreferrer"`
        // When creating a JSX element that has an a tag, it is often desired to have the link open in a new tab using the target='_blank' attribute.
        // Using this attribute unaccompanied by rel='noreferrer', however,
        // is a severe security vulnerability (see noreferrer docs and noopener docs for more details) This rules requires that you accompany target='_blank' attributes with rel='noreferrer'.
        "react/jsx-no-target-blank": [
          "error",
          {
            allowReferrer: false,
            enforceDynamicLinks: "always",
            warnOnSpreadAttributes: false,
            links: true,
            forms: false,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-undef.md
        // Disallow undeclared variables in JSX
        // This rule helps locate potential ReferenceErrors resulting from misspellings or missing components.
        "react/jsx-no-undef": ["warn", { allowGlobals: true }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-no-useless-fragment.md
        // Disallow unnecessary fragments
        // A fragment is redundant if it contains only one child, or if it is the child of a html element, and is not a `keyed fragment`.
        "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-one-expression-per-line.md
        // Require one JSX element per line
        // This option limits every line in JSX to one expression each.
        // Note: The fixer will insert line breaks between any expression that are on the same line.
        "react/jsx-one-expression-per-line": ["warn", { allow: "none" }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-pascal-case.md
        // Enforce PascalCase for user-defined JSX components
        // Enforces coding style that user-defined JSX components are defined and referenced in PascalCase.
        // Note that since React's JSX uses the upper vs.
        // lower case convention to distinguish between local component classes and HTML tags this rule will not warn on components that start with a lower case letter.
        "react/jsx-pascal-case": [
          "warn",
          {
            allowAllCaps: false,
            allowNamespace: true,
            allowLeadingUnderscore: false,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-props-no-multi-spaces.md
        // Disallow multiple spaces between inline JSX props
        // Enforces that there is exactly one space between all attributes and after tag name and the first attribute in the same line.
        "react/jsx-props-no-multi-spaces": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-props-no-spreading.md
        // Disallow JSX prop spreading
        // Enforces that there is no spreading for any JSX attribute.
        // This enhances readability of code by being more explicit about what props are received by the component.
        // It is also good for maintainability by avoiding passing unintentional extra props and allowing react to emit warnings when invalid HTML props are passed to HTML elements.
        "react/jsx-props-no-spreading": [
          "error",
          {
            html: "enforce",
            custom: "ignore",
            explicitSpread: "ignore",
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-sort-default-props.md
        // Enforce defaultProps declarations alphabetical sorting
        // Some developers prefer to sort `defaultProps` declarations alphabetically to be able to find necessary declarations easier at a later time.
        // Others feel that it adds complexity and becomes a burden to maintain.
        "react/jsx-sort-default-props": [
          "warn",
          {
            ignoreCase: false,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-space-before-closing.md
        // Enforce spacing before closing bracket in JSX
        // Please use the `"beforeSelfClosing"` option of the `jsx-tag-spacing` rule instead.
        // Enforce or forbid spaces before the closing bracket of self-closing JSX elements.
        /*!! depricated */
        "react/jsx-space-before-closing": ["off", "always"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-tag-spacing.md
        // Enforce whitespace in and around the JSX opening and closing brackets
        // Enforce or forbid spaces after the opening bracket, before the closing bracket,
        // before the closing bracket of self-closing elements,
        // and between the angle bracket and slash of JSX closing or self-closing elements.
        "react/jsx-tag-spacing": [
          "warn",
          {
            closingSlash: "never",
            beforeSelfClosing: "always",
            afterOpening: "never",
            beforeClosing: "allow",
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-uses-react.md
        // Disallow React to be incorrectly marked as unused
        // JSX expands to a call to `React.createElement`, a file which includes `React` but only uses JSX should consider the `React` variable as used.
        // If you are using the @jsx pragma this rule will mark the designated variable and not the `React` one.
        // This rule has no effect if the `no-unused-vars` rule is not enabled.
        // You can use the `shared settings` to specify a custom pragma.
        "react/jsx-uses-react": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-uses-vars.md
        // Disallow variables used in JSX to be incorrectly marked as unused
        // Since 0.17.0 the `eslint` `no-unused-vars` rule does not detect variables used in JSX.
        // This rule will find variables used in JSX and mark them as used.
        // This rule only has an effect when the `no-unused-vars` rule is enabled.
        "react/jsx-uses-vars": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/jsx-wrap-multilines.md
        // Disallow missing parentheses around multiline JSX
        // Wrapping multiline JSX in parentheses can improve readability and/or convenience.
        "react/jsx-wrap-multilines": [
          "warn",
          {
            declaration: "parens",
            assignment: "parens",
            return: "parens",
            arrow: "parens",
            condition: "ignore",
            logical: "ignore",
            prop: "ignore",
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-access-state-in-setstate.md
        // Disallow when this.state is accessed within setState
        // Usage of `this.state` inside `setState` calls might result in errors when two state calls are called in batch and thus referencing old state and not the current state.
        "react/no-access-state-in-setstate": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-adjacent-inline-elements.md
        // Disallow adjacent inline elements not separated by whitespace
        // Adjacent inline elements not separated by whitespace will bump up against each other when viewed in an unstyled manner, which usually isn't desirable.
        "react/no-adjacent-inline-elements": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-array-index-key.md
        // Disallow usage of Array index in keys
        // The `key` is used by React to `identify which items have changed, are added, or are removed and should be stable`.
        // It's a bad idea to use the array index since it doesn't uniquely identify your elements.
        // In cases where the array is sorted or an element is added to the beginning of the array, the index will be changed even though the element representing that index may be the same.
        // This results in unnecessary renders.
        "react/no-array-index-key": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-arrow-function-lifecycle.md
        // Lifecycle methods should be methods on the prototype, not class fields
        // It is not necessary to use arrow function for lifecycle methods. This makes things harder to test,
        // conceptually less performant (although in practice,
        // performance will not be affected,
        // since most engines will optimize efficiently),
        // and can break hot reloading patterns.
        "react/no-arrow-function-lifecycle": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-children-prop.md
        // Disallow passing of children as props
        // Children should always be actual children, not passed in as a prop.
        // When using JSX, the children should be nested between the opening and closing tags. When not using JSX, the children should be passed as additional arguments to `React.createElement`.
        "react/no-children-prop": [
          "warn",
          {
            allowFunctions: false,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-danger.md
        // Disallow usage of dangerous JSX properties
        // Dangerous properties in React are those whose behavior is known to be a common source of application vulnerabilities.
        // The properties names clearly indicate they are dangerous and should be avoided unless great care is taken.
        "react/no-danger": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-danger-with-children.md
        // Disallow when a DOM element is using both children and dangerouslySetInnerHTML
        // This rule helps prevent problems caused by using children and the dangerouslySetInnerHTML prop at the same time. React will throw a warning if this rule is ignored.
        "react/no-danger-with-children": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-deprecated.md
        // Disallow usage of deprecated methods
        // Several methods are deprecated between React versions. This rule will warn you if you try to use a deprecated method. Use the `shared settings` to specify the React version.
        "react/no-deprecated": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-did-mount-set-state.md
        // Disallow usage of setState in componentDidMount
        // Updating the state after a component mount will trigger a second `render()` call and can lead to property/layout thrashing.
        "react/no-did-mount-set-state": ["error", "disallow-in-func"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-did-update-set-state.md
        // Disallow usage of setState in componentDidUpdate
        // Updating the state after a component update will trigger a second `render()` call and can lead to property/layout thrashing.
        "react/no-did-update-set-state": ["error", "disallow-in-func"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-direct-mutation-state.md
        // Disallow direct mutation of this.state
        // NEVER mutate this.state directly, as calling `setState()` afterwards may replace the mutation you made. Treat `this.state` as if it were immutable.
        // The only place that's acceptable to assign this.state is in a ES6 `class` component constructor.
        "react/no-direct-mutation-state": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-find-dom-node.md
        // Disallow usage of findDOMNode
        // Facebook will eventually deprecate `findDOMNode` as it blocks certain improvements in React in the future.
        // It is recommended to use callback refs instead. See `Dan Abramov comments and examples`.
        "react/no-find-dom-node": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-invalid-html-attribute.md
        // Disallow usage of invalid attributes
        // Some HTML elements have a specific set of valid values for some attributes.
        // For instance the elements: `a`, `area`, `link`, or `form` all have an attribute called rel.
        // There is a fixed list of values that have any meaning for this attribute on these tags (see MDN).
        // To help with minimizing confusion while reading code, only the appropriate values should be on each attribute.
        "react/no-invalid-html-attribute": "off",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-is-mounted.md
        // Disallow usage of isMounted
        // isMounted is an anti-pattern, is not available when using ES6 classes,
        // and it is on its way to being officially deprecated.
        "react/no-is-mounted": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-multi-comp.md
        // Disallow multiple component definition per file
        // Declaring only one component per file improves readability and reusability of components.
        "react/no-multi-comp": ["warn", { ignoreStateless: true }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-namespace.md
        // Enforce that namespaces are not used in React elements
        // Enforces the absence of a namespace in React elements, such as with svg:circle, as they are not supported in React.
        "react/no-namespace": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-object-type-as-default-prop.md
        // Disallow usage of referential-type variables as default param in functional component
        // Warns if in a functional component, an object type value (such as array/object literal/function/etc) is used as default prop, to prevent potential unnecessary rerenders, and performance regressions.
        // Certain values (like arrays, objects, functions, etc) are compared by identity instead of by value. This means that, for example, whilst two empty arrays conceptually represent the same value - JavaScript semantics dictate that they are distinct and unequal as they represent two distinct values.
        // When using object destructuring syntax you can set the default value for a given property if it does not exist. If you set the default value to one of the values that is compared by identity,
        // it will mean that each time the destructure is evaluated the JS engine will create a new, distinct value in the destructured variable.
        // In the context of a React functional component's props argument this means for each render,
        // the property has a new, distinct value.
        // When this value is passed to a hook as a dependency or passed into a child component as a property React will see this as a new value - meaning that a hook will be re-evaluated,
        // or a memoized component will rerender.
        // This obviously destroys any performance benefits you get from memoization.
        // Additionally, in certain circumstances this can cause infinite rerender loops,
        // which can often be hard to debug.
        // It's worth noting that primitive literal values (`string`, `number`, `boolean`, `null`, and `undefined`) can be considered to be compared "by value",
        // or alternatively, as always having the same identity (every `3` is the same exact `3`).
        // Thus, it's safe for those to be inlined as a default value.
        "react/no-object-type-as-default-prop": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-redundant-should-component-update.md
        // Disallow usage of shouldComponentUpdate when extending React.PureComponent
        // Warns if you have `shouldComponentUpdate` defined when defining a component that extends React.PureComponent. While having `shouldComponentUpdate` will still work, it becomes pointless to extend PureComponent.
        "react/no-redundant-should-component-update": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-render-return-value.md
        // Disallow usage of the return value of ReactDOM.render
        "react/no-render-return-value": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-set-state.md
        // Disallow usage of setState
        // When using an architecture that separates your application state from your UI components (e.g. Flux),
        // it may be desirable to forbid the use of local component state.
        // This rule is especially helpful in read-only applications (that don't use forms),
        // since local component state should rarely be necessary in such cases.
        "react/no-set-state": "off",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-string-refs.md
        // Disallow using string references
        // Currently, two ways are supported by React to refer to components.
        // The first way, providing a string identifier,
        // is now considered legacy in the official documentation.
        // The documentation now prefers a second method -- referring to components by setting a property on the this object in the reference callback.
        "react/no-string-refs": ["error", { noTemplateLiterals: true }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-this-in-sfc.md
        // Disallow `this` from being used in stateless functional components
        // In React, there are two styles of component.
        // One is a class component: class Foo extends React.Component {...},
        // which accesses its props, context, and state as properties of this: this.props.foo, etc.
        // The other are stateless functional components (SFCs): function Foo(props, context) {...}.
        // As you can see, there's no state (hence the name - hooks do not change this),
        // and the props and context are provided as its two functional arguments.
        // In an SFC, state is usually best implements with a React hook such as React.useState().
        // Attempting to access properties on this can sometimes be valid,
        // but it's very commonly an error caused by unfamiliarity with the differences between the two styles of components,
        // or a missed reference when converting a class component to an SFC.
        "react/no-this-in-sfc": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-typos.md
        // Disallow common typos
        // Ensure no casing typos were made declaring static class properties and lifecycle methods. Checks that declared `propTypes`,
        // `contextTypes` and `childContextTypes` is supported by `react-props`
        "react/no-typos": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-unescaped-entities.md
        // Disallow unescaped HTML entities from appearing in markup
        // This rule prevents characters that you may have meant as JSX escape characters from being accidentally injected as a text node in JSX statements.
        "react/no-unescaped-entities": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-unknown-property.md
        // Disallow usage of unknown DOM property
        // In JSX most DOM properties and attributes should be camelCased to be consistent with standard JavaScript style.
        // This can be a possible source of error if you are used to writing plain HTML.
        // Only `data-*` and `aria-*` attributes are usings hyphens and lowercase letters in JSX.
        "react/no-unknown-property": ["warn", { ignore: ["css"] }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-unsafe.md
        // Disallow usage of unsafe lifecycle methods
        // Certain legacy lifecycle methods are unsafe for use in async React applications and cause warnings in strict mode.
        // These also happen to be the lifecycles that cause the most confusion within the React community.
        "react/no-unsafe": ["error", { checkAliases: false }],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-unstable-nested-components.md
        // Disallow creating unstable components inside components
        // Creating components inside components (nested components) will cause React to throw away the state of those nested components on each re-render of their parent.
        // React reconciliation performs element type comparison with reference equality.
        // The reference to the same element changes on each re-render when defining components inside the render block. This leads to complete recreation of the current node and all its children. As a result the virtual DOM has to do extra unnecessary work and possible bugs are introduced.
        "react/no-unstable-nested-components": [
          "error",
          {
            allowAsProps: false,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-unused-class-component-methods.md
        // Disallow declaring unused methods of component class
        // Warns you if you have defined a method or property but it is never being used anywhere.
        "react/no-unused-class-component-methods": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-unused-prop-types.md
        // Disallow definitions of unused propTypes
        // Warns if a prop with a defined type isn't being used.
        "react/no-unused-prop-types": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-unused-state.md
        // Disallow definitions of unused state
        // Warns you if you have defined a property on the state, but it is not being used anywhere.
        "react/no-unused-state": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/no-will-update-set-state.md
        // Disallow usage of setState in componentWillUpdate
        // Updating the state during the componentWillUpdate step can lead to indeterminate component state and is not allowed.
        "react/no-will-update-set-state": ["error", "disallow-in-func"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/prefer-es6-class.md
        // Enforce ES5 or ES6 class for React Components
        // React offers you two ways to create traditional components: using the ES5 `create-react-class` module or the new ES6 class system.
        "react/prefer-es6-class": ["error", "always"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/prefer-exact-props.md
        // Prefer exact proptype definitions
        // Recommends options to ensure only exact prop definitions are used when writing components.
        // This recommends solutions for PropTypes or for Flow types.
        "react/prefer-exact-props": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/prefer-read-only-props.md
        // Enforce that props are read-only
        // Using Flow, one can define types for props.
        // This rule enforces that prop types are read-only (covariant).
        "react/prefer-read-only-props": "off",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/prefer-stateless-function.md
        // Enforce stateless components to be written as a pure function
        // Stateless functional components are simpler than class based components and will benefit from future React performance optimizations specific to these components.
        "react/prefer-stateless-function": [
          "warn",
          { ignorePureComponents: false },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/prop-types.md
        // Disallow missing props validation in a React component definition
        // Defining types for component props improves reusability of your components by validating received data.
        // It can warn other developers if they make a mistake while reusing the component with improper data type.
        "react/prop-types": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/react-in-jsx-scope.md
        // When using JSX, `<a />` expands to `React.createElement("a")`.
        // Therefore the `React` variable must be in scope.
        // If you are using the @jsx pragma this rule will check the designated variable and not the `React` one.
        "react/react-in-jsx-scope": "error",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/require-default-props.md
        // Enforce a defaultProps definition for every prop that is not a required prop
        // One advantage of `defaultProps` over custom default logic in your code is that `defaultProps` are resolved by React before the `PropTypes` typechecking happens,
        // so typechecking will also apply to your `defaultProps`.
        // The same also holds true for stateless functional components: default function parameters do not behave the same as `defaultProps` and thus using `defaultProps` is still preferred.
        "react/require-default-props": [
          "warn",
          {
            forbidDefaultForRequired: false,
            classes: "defaultProps",
            functions: "defaultProps",
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/require-optimization.md
        // Enforce React components to have a shouldComponentUpdate method
        // This rule prevents you from creating React components without declaring a `shouldComponentUpdate` method.
        "react/require-optimization": [
          "error",
          { allowDecorators: ["customDecorators"] },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/require-render-return.md
        // Enforce ES5 or ES6 class for returning value in render function
        // When writing the `render` method in a component it is easy to forget to return the JSX content.
        // This rule will warn if the `return` statement is missing.
        "react/require-render-return": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/self-closing-comp.md
        // Disallow extra closing tags for components without children
        // Components without children can be self-closed to avoid unnecessary extra closing tag.
        "react/self-closing-comp": [
          "warn",
          {
            component: true,
            html: true,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/sort-comp.md
        // Enforce component methods order
        // When creating React components it is more convenient to always follow the same organization for method order to help you easily find lifecycle methods, event handlers, etc.
        "react/sort-comp": "off",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/sort-default-props.md
        // Enforce defaultProps declarations alphabetical sorting
        // Some developers prefer to sort `defaultProps` declarations alphabetically to be able to find necessary declarations easier at a later time.
        // Others feel that it adds complexity and becomes a burden to maintain.
        "react/sort-default-props": [
          "warn",
          {
            ignoreCase: false,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/sort-prop-types.md
        // Some developers prefer to sort prop type declarations alphabetically to be able to find necessary declaration easier at the later time.
        // Others feel that it adds complexity and becomes burden to maintain.
        "react/sort-prop-types": [
          "warn",
          {
            callbacksLast: true,
            ignoreCase: true,
            requiredFirst: true,
            sortShapeProp: true,
            noSortAlphabetically: false,
          },
        ],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/state-in-constructor.md
        // Enforce class component state initialization style
        // This rule will enforce the state initialization style to be either in a constructor or with a class property.
        "react/state-in-constructor": ["error", "always"],

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/static-property-placement.md
        // Enforces where React component static properties should be positioned
        // This rule allows you to enforce where `childContextTypes`, `contextTypes`, `contextType`, `defaultProps`, `displayName`, and propTypes are declared in an ES6 class.
        "react/static-property-placement": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/style-prop-object.md
        // Enforce style prop value is an object
        // Require that the value of the prop `style` be an object or a variable that is an object.
        "react/style-prop-object": "warn",

        // https://github.com/jsx-eslint/eslint-plugin-react/blob/c6d082a7b1a95746dfb7f2581723d184b467be65/docs/rules/void-dom-elements-no-children.md
        // Disallow void DOM elements
        // There are some HTML elements that are only self-closing (e.g. `img`, `br`, `hr`).
        // These are collectively known as void DOM elements.
        // If you try to give these children, React will give you a warning like:
        "react/void-dom-elements-no-children": "error",
      },
      files: ["*.tsx"],
      rules: {
        "react/default-props-match-prop-types": "off",
        "react/forbid-foreign-prop-types": "off",
        "react/forbid-prop-types": "off",
        "react/no-unused-prop-types": "off",
        "react/prefer-exact-props": "off",
      },
    },
  ],
};
