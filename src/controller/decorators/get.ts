import "reflect-metadata";

export const buildMethod = function (method: string) {
  return function (path: string) {
    return function (target: any, key: string) {
      Reflect.defineMetadata("path", path, target, key);

      Reflect.defineMetadata("method", method, target, key);
    };
  };
};
