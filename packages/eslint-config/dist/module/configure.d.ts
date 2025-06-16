import { Linter } from 'eslint';
interface Options {
    vite?: true;
    typescript?: true | {
        config?: boolean;
    };
    error?: true;
    style?: true;
    suggestions?: true;
    react?: true | {
        config?: boolean;
        jsxA11y?: boolean;
        reactHooks?: boolean;
        reactCompiler?: boolean;
        refresh?: boolean;
    };
    import?: true;
}
export default function (projectDir?: string, options?: Options, parserOptions?: {}): Linter.Config<Linter.RulesRecord>[];
export {};
