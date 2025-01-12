module.exports = [
    {
        rules: {
            "import/export": 2,
            "import/no-deprecated": "off",
            "import/no-empty-named-blocks": "off",
            "import/no-extraneous-dependencies": [
                "off",
                {
                    "devDependencies": [
                    ],
                    "includeInternal": true,
                    "optionalDependencies": false,
                    "peerDependencies": false,
                    "packageDir": "."
                }
            ],
            "import/no-mutable-exports": 2,
            "import/no-named-as-default": "off",
            "import/no-named-as-default-member": "off",
            "import/no-unused-modules": ["off", {
                "unusedExports": true,
                "src": ["components"]
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
            "import/no-internal-modules": [
                "off",
                {
                    "allow": [
                    ]
                }
            ],
            "import/no-relative-packages": 2,
            "import/no-unresolved": "off",
            "import/no-relative-parent-imports": "off",
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
            "import/consistent-type-specifier-style": ["off", "prefer-top-level"],
            "dynamic-import-chunkname": ["off", {
                importFunctions: ["dynamicImport"],
                webpackChunknameFormat: "[a-zA-Z0-57-9-/_]+"
            }],
            "import/exports-last": "off",
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
            "import/first": "warn",
            "import/group-exports": "off",
            "import/max-dependencies": ["warn", {
                "max": 10,
                "ignoreTypeImports": true,
            }],
            "import/newline-after-import": ["off", {"count": 2}],
            "import/no-anonymous-default-export": ["error", {
                "allowArray": false,
                "allowArrowFunction": false,
                "allowAnonymousClass": false,
                "allowAnonymousFunction": false,
                "allowLiteral": false,
                "allowObject": false
            }],
            "import/no-default-export": "error",
            "import/no-duplicates": "error",
            "import/no-named-default": "error",
            "import/no-named-export": "off",
            "import/no-namespace": "warn",
            "import/no-unassigned-import": [
                "error",
                {
                    "allow": [
                    ]
                }
            ],
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
            "import/prefer-default-export": [
                "off",
            ],
            "import/no-restricted-paths": "off",
            "import/no-self-import": "error",
            "import/no-useless-path-segments": ["error", {
                noUselessIndex: true
            }],
            "import/no-webpack-loader-syntax": "off"
        }
    },
    {
        rules: {
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
