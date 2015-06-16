// jshint ignore:start

declare module lodash {
  declare function map<T,U>(array: T[], cb: (value: T, key: number|string, array: T[]) => U, thisArg?: any): U[];
  declare function filter<T>(array: T[], cb: (value: T, key: number|string, array: T[]) => boolean, thisArg?: any): T[];
}
