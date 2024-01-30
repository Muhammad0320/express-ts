import "reflect-metadata";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

interface PropertyDescriptorWithValue extends PropertyDescriptor {
  value?: RequestHandler;
}

const buildMethod = function (method: string) {
  return function (path: string) {
    return function (
      target: any,
      key: string,
      desc: PropertyDescriptorWithValue
    ) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);

      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
};

export const get = buildMethod(Methods.get);
export const put = buildMethod(Methods.put);
export const post = buildMethod(Methods.post);
// export const del = buildMethod(Methods.delete);
export const patch = buildMethod(Methods.patch);
