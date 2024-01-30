import "reflect-metadata";
import { Methods } from "../Methods";

const buildMethod = function (method: string) {
  return function (path: string) {
    return function (target: any, key: string) {
      Reflect.defineMetadata("path", path, target, key);

      Reflect.defineMetadata("method", method, target, key);
    };
  };
};

export const get = buildMethod(Methods.get);
export const put = buildMethod(Methods.put);
export const post = buildMethod(Methods.post);
export const del = buildMethod(Methods.delete);
export const patch = buildMethod(Methods.patch);
