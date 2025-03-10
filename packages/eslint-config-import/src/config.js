module.exports = [
    {
        files: ["**/*.js", "**/*.ts", "**/*.mjs","**/*.cjs", "*cts", "*mts","**/*.jsx","**/*.tsx"],
        rules: {
            "import/export": 2,
            "import/no-mutable-exports": 2,
            "import/no-amd": 2,
            "import/no-import-module-exports": 2,
            "import/no-nodejs-modules": 0,
            "import/unambiguous": 2,
            "import/no-absolute-path": 2,
            "import/no-dynamic-require": 2,
            "import/no-relative-packages": 2,
            "import/first": "warn",
            "import/max-dependencies": ["warn", {                "max": 10,                "ignoreTypeImports": true,            }],
            "import/no-anonymous-default-export": ["error", {                "allowArray": false,                "allowArrowFunction": false,                "allowAnonymousClass": false,                "allowAnonymousFunction": false,                "allowLiteral": false,                "allowObject": false            }],
            "import/no-default-export": "error",
            "import/no-duplicates": "error",
            "import/no-named-default": "error",
            "import/no-namespace": "warn",
            "import/no-unassigned-import": [                "error",                {                    "allow": [                        "**/*.css"                    ]                }            ],
            "import/order": [                "warn",                {                    "groups": [                        "builtin",                        "external",                        "internal",                        "parent",                        "sibling",                        "index",                        "object",                        "type"                    ],                    "newlines-between": "always",                    "alphabetize": {"order": "asc", "caseInsensitive": true},                    "warnOnUnassignedImports": true                }            ],
            "import/no-self-import": "error",
            "import/no-useless-path-segments": ["error", {                noUselessIndex: true            }],
        }
    },
    {
        files: ["**/src/app/**/*.tsx","**/src/app/**/*.jsx","**/src/app/**/*.js","**/src/app/**/*.ts"],
        rules: {
            "import/prefer-default-export": [                "error",                {                    "target": "any"                }            ]
        }
    }
];
