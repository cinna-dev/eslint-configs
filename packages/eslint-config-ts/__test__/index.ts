import { A } from "./test";
type X = Record<string, unknown>;
type Z = Record<string, unknown>;
// @ts-ignore
// @ts-nocheck
// @ts-check

class Mx {
  public static get myField1() {
    return 1;
  }

  private get ["myField2"]() {
    return "hello world";
  }
}
