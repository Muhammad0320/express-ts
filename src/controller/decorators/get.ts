import "reflect-metadata";

export const get = (path: string) => {
  return function (target: any, key: string) {
    Reflect.defineMetadata("path", path, target, key);
  };
};
