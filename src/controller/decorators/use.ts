import { RequestHandler } from "express";

import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

export const use = (middleware: RequestHandler) => {
  return function (target: any, key: string) {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
};
