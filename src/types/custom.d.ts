/* eslint-disable no-var */
declare module "latinize" {
  declare namespace LatinizeModule {
    export interface Latinize {
      characters: { [char: string]: string };
      (str: string, map?: typeof characters): string;
    }
  }

  declare var latinize: LatinizeModule.Latinize;
  export = latinize;
  export as namespace latinize;
}
