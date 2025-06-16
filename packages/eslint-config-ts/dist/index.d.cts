import { ConfigArray } from "typescript-eslint";
import { Linter } from "eslint";

//#region src/index.d.ts
declare const configure: (projectUrl?: string, parserOptions?: {}) => Linter.Config[];
declare const rules: Linter.Config[];
declare const config: ConfigArray;
//#endregion
export { config, configure, rules };