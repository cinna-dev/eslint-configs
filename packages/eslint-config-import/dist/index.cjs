"use strict";

function e(e, r, t) {
    if (r in e) {
        Object.defineProperty(e, r, {value: t, enumerable: true, configurable: true, writable: true})
    } else {
        e[r] = t
    }
    return e
}

function r(r) {
    for (var t = 1; t < arguments.length; t++) {
        var o = arguments[t] != null ? arguments[t] : {};
        var n = Object.keys(o);
        if (typeof Object.getOwnPropertySymbols === "function") {
            n = n.concat(Object.getOwnPropertySymbols(o).filter(function (e) {
                return Object.getOwnPropertyDescriptor(o, e).enumerable
            }))
        }
        n.forEach(function (t) {
            e(r, t, o[t])
        })
    }
    return r
}

function t(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        if (r) {
            o = o.filter(function (r) {
                return Object.getOwnPropertyDescriptor(e, r).enumerable
            })
        }
        t.push.apply(t, o)
    }
    return t
}

function o(e, r) {
    r = r != null ? r : {};
    if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
    } else {
        t(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        })
    }
    return e
}

function n(e) {
    "@swc/helpers - typeof";
    return e && typeof Symbol !== "undefined" && e.constructor === Symbol ? "symbol" : typeof e
}

var i = Object.create;
var s = Object.defineProperty;
var p = Object.getOwnPropertyDescriptor;
var a = Object.getOwnPropertyNames;
var l = Object.getPrototypeOf, f = Object.prototype.hasOwnProperty;
var u = function (e, r) {
    for (var t in r) s(e, t, {get: r[t], enumerable: !0})
}, m = function (e, r, t, o) {
    var i = true, l = false, u = undefined;
    if (r && (typeof r === "undefined" ? "undefined" : n(r)) == "object" || typeof r == "function") try {
        var m = function () {
            var n = d.value;
            !f.call(e, n) && n !== t && s(e, n, {
                get: function () {
                    return r[n]
                }, enumerable: !(o = p(r, n)) || o.enumerable
            })
        };
        for (var c = a(r)[Symbol.iterator](), d; !(i = (d = c.next()).done); i = true) m()
    } catch (e) {
        l = true;
        u = e
    } finally {
        try {
            if (!i && c.return != null) {
                c.return()
            }
        } finally {
            if (l) {
                throw u
            }
        }
    }
    return e
};
var c = function (e, r, t) {
    return t = e != null ? i(l(e)) : {}, m(r || !e || !e.__esModule ? s(t, "default", {
        value: e,
        enumerable: !0
    }) : t, e)
}, d = function (e) {
    return m(s({}, "__esModule", {value: !0}), e)
};
var y = {};
u(y, {
    default: function () {
        return j
    }
});
module.exports = d(y);
var b = c(require("eslint-plugin-import"), 1), g = require("eslint-plugin-import"), x = require("@eslint/compat"),
    j = [o(r({}, g.config.configs.typescript), {
        plugins: {import: (0, x.fixupPluginRules)(b.default)},
        settings: {
            "import/internal-regex": "^packages/",
            "import/parsers": {"@typescript-eslint/parser": [".ts", ".tsx"]},
            "import/extensions": [".js", ".jsx"],
            "import/resolver": {typescript: {alwaysTryTypes: !0}, node: {extensions: [".js", ".jsx"]}}
        },
        files: ["**/*.js", "**/*.ts", "**/*.mjs", "**/*.cjs", "*cts", "*mts", "**/*.jsx", "**/*.tsx"],
        rules: {
            "import/export": 2,
            "import/no-deprecated": "off",
            "import/no-empty-named-blocks": "off",
            "import/no-extraneous-dependencies": ["off", {
                devDependencies: ["**/*.test.js", "**/*.test.ts", "packages/**/*"],
                includeInternal: !0,
                optionalDependencies: !1,
                peerDependencies: !1,
                packageDir: "."
            }],
            "import/no-mutable-exports": 2,
            "import/no-named-as-default": "off",
            "import/no-named-as-default-member": "off",
            "import/no-unused-modules": ["off", {
                unusedExports: !0,
                ignoreExports: ["node_modules/*"],
                src: ["components"]
            }],
            "import/no-amd": 2,
            "import/no-commonjs": "off",
            "import/no-import-module-exports": 2,
            "import/no-nodejs-modules": 0,
            "import/unambiguous": 2,
            "import/default": "off",
            "import/named": "off",
            "import/namespace": "off",
            "import/no-absolute-path": 2,
            "import/no-cycle": "off",
            "import/no-dynamic-require": 2,
            "import/no-internal-modules": ["off", {allow: ["@mui/icons-material/*", "@mui/material/*", "next/*", "@apollo/*", "next-i18next/*", "nextjs-routes/*", "next-seo/**", "@apollo/*", "@hoc/*", "@graphql/generated/*", "lodash/*", "@public/**/*", "react-mui/*", "@graphql/*", "@graphql/generated/*", "@iconify/**", "next-auth/*", "@theme/*", "**/*.css"]}],
            "import/no-relative-packages": 2,
            "import/no-unresolved": "off",
            "import/no-relative-parent-imports": "off",
            "no-restricted-imports": ["off", {
                patterns: [{
                    group: ["..*"],
                    message: "Usage of relative parent imports is not allowed."
                }]
            }],
            "import/consistent-type-specifier-style": ["off", "prefer-top-level"],
            "dynamic-import-chunkname": ["off", {
                importFunctions: ["dynamicImport"],
                webpackChunknameFormat: "[a-zA-Z0-57-9-/_]+"
            }],
            "import/exports-last": "off",
            "import/extensions": ["off", "always", {
                ignorePackages: !0,
                pattern: {
                    svg: "always",
                    js: "never",
                    ts: "never",
                    tsc: "never",
                    jsx: "never",
                    tsx: "never",
                    json: "never"
                }
            }],
            "import/first": "warn",
            "import/group-exports": "off",
            "import/max-dependencies": ["warn", {max: 10, ignoreTypeImports: !0}],
            "import/newline-after-import": ["off", {count: 2}],
            "import/no-anonymous-default-export": ["error", {
                allowArray: !1,
                allowArrowFunction: !1,
                allowAnonymousClass: !1,
                allowAnonymousFunction: !1,
                allowCallExpression: !0,
                allowLiteral: !1,
                allowObject: !1
            }],
            "import/no-default-export": "error",
            "import/no-duplicates": "error",
            "import/no-named-default": "error",
            "import/no-named-export": "off",
            "import/no-namespace": "warn",
            "import/no-unassigned-import": ["error", {allow: ["**/*.css"]}],
            "import/order": ["warn", {
                groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object", "type"],
                "newlines-between": "always",
                alphabetize: {order: "asc", caseInsensitive: !0},
                warnOnUnassignedImports: !0
            }],
            "import/prefer-default-export": ["off"],
            "import/no-restricted-paths": "off",
            "import/no-self-import": "error",
            "import/no-useless-path-segments": ["error", {noUselessIndex: !0}],
            "import/no-webpack-loader-syntax": "off"
        }
    }), {
        files: ["**/src/app/**/*.tsx", "**/src/app/**/*.jsx", "**/src/app/**/*.js", "**/src/app/**/*.ts"],
        rules: {"import/no-default-export": "off", "import/prefer-default-export": ["error", {target: "any"}]}
    }];
