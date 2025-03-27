declare const _default: ({
    files: string[];
    rules: {
        "import/export": number;
        "import/no-deprecated": string;
        "import/no-empty-named-blocks": string;
        "import/no-extraneous-dependencies": (string | {
            devDependencies: string[];
            includeInternal: boolean;
            optionalDependencies: boolean;
            peerDependencies: boolean;
            packageDir: string;
        })[];
        "import/no-mutable-exports": number;
        "import/no-named-as-default": string;
        "import/no-named-as-default-member": string;
        "import/no-unused-modules": (string | {
            unusedExports: boolean;
            ignoreExports: string[];
            src: string[];
        })[];
        "import/no-amd": number;
        "import/no-commonjs": string;
        "import/no-import-module-exports": number;
        "import/no-nodejs-modules": number;
        "import/unambiguous": number;
        "import/default": string;
        "import/named": string;
        "import/namespace": string;
        "import/no-absolute-path": number;
        "import/no-cycle": string;
        "import/no-dynamic-require": number;
        "import/no-internal-modules": (string | {
            allow: string[];
        })[];
        "import/no-relative-packages": number;
        "import/no-unresolved": string;
        "import/no-relative-parent-imports": string;
        "no-restricted-imports": (string | {
            patterns: {
                group: string[];
                message: string;
            }[];
        })[];
        "import/consistent-type-specifier-style": string[];
        "dynamic-import-chunkname": (string | {
            importFunctions: string[];
            webpackChunknameFormat: string;
        })[];
        "import/exports-last": string;
        "import/extensions": (string | {
            ignorePackages: boolean;
            pattern: {
                svg: string;
                js: string;
                ts: string;
                tsc: string;
                jsx: string;
                tsx: string;
                json: string;
            };
        })[];
        "import/first": string;
        "import/group-exports": string;
        "import/max-dependencies": (string | {
            max: number;
            ignoreTypeImports: boolean;
        })[];
        "import/newline-after-import": (string | {
            count: number;
        })[];
        "import/no-anonymous-default-export": (string | {
            allowArray: boolean;
            allowArrowFunction: boolean;
            allowAnonymousClass: boolean;
            allowAnonymousFunction: boolean;
            allowLiteral: boolean;
            allowObject: boolean;
        })[];
        "import/no-default-export": string;
        "import/no-duplicates": string;
        "import/no-named-default": string;
        "import/no-named-export": string;
        "import/no-namespace": string;
        "import/no-unassigned-import": (string | {
            allow: string[];
        })[];
        "import/order": (string | {
            groups: string[];
            "newlines-between": string;
            alphabetize: {
                order: string;
                caseInsensitive: boolean;
            };
            warnOnUnassignedImports: boolean;
        })[];
        "import/prefer-default-export": string[];
        "import/no-restricted-paths": string;
        "import/no-self-import": string;
        "import/no-useless-path-segments": (string | {
            noUselessIndex: boolean;
        })[];
        "import/no-webpack-loader-syntax": string;
    };
} | {
    files: string[];
    rules: {
        "import/no-default-export": string;
        "import/prefer-default-export": (string | {
            target: string;
        })[];
        "import/export"?: undefined;
        "import/no-deprecated"?: undefined;
        "import/no-empty-named-blocks"?: undefined;
        "import/no-extraneous-dependencies"?: undefined;
        "import/no-mutable-exports"?: undefined;
        "import/no-named-as-default"?: undefined;
        "import/no-named-as-default-member"?: undefined;
        "import/no-unused-modules"?: undefined;
        "import/no-amd"?: undefined;
        "import/no-commonjs"?: undefined;
        "import/no-import-module-exports"?: undefined;
        "import/no-nodejs-modules"?: undefined;
        "import/unambiguous"?: undefined;
        "import/default"?: undefined;
        "import/named"?: undefined;
        "import/namespace"?: undefined;
        "import/no-absolute-path"?: undefined;
        "import/no-cycle"?: undefined;
        "import/no-dynamic-require"?: undefined;
        "import/no-internal-modules"?: undefined;
        "import/no-relative-packages"?: undefined;
        "import/no-unresolved"?: undefined;
        "import/no-relative-parent-imports"?: undefined;
        "no-restricted-imports"?: undefined;
        "import/consistent-type-specifier-style"?: undefined;
        "dynamic-import-chunkname"?: undefined;
        "import/exports-last"?: undefined;
        "import/extensions"?: undefined;
        "import/first"?: undefined;
        "import/group-exports"?: undefined;
        "import/max-dependencies"?: undefined;
        "import/newline-after-import"?: undefined;
        "import/no-anonymous-default-export"?: undefined;
        "import/no-duplicates"?: undefined;
        "import/no-named-default"?: undefined;
        "import/no-named-export"?: undefined;
        "import/no-namespace"?: undefined;
        "import/no-unassigned-import"?: undefined;
        "import/order"?: undefined;
        "import/no-restricted-paths"?: undefined;
        "import/no-self-import"?: undefined;
        "import/no-useless-path-segments"?: undefined;
        "import/no-webpack-loader-syntax"?: undefined;
    };
})[];

export { _default as default };
