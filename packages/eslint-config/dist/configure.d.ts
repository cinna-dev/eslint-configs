import { Linter } from 'eslint';

declare function export_default(projectDir?: string, parserOptions?: {}): Linter.Config[];

export { export_default as default };
