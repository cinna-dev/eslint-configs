import { ConfigArray } from 'typescript-eslint';
import { Linter } from 'eslint';

declare const configure: (projectUrl?: string, parserOptions?: {}) => Linter.Config[];
declare const rules: Linter.Config[];
declare const config: ConfigArray;

export { config, configure, rules };
