import { RequestHandler } from "express";

import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

export const use = (middleware: RequestHandler) => {
  return function (target: any, key: string) {
    console.log("show your self sucker 2");

    const middlewares =
      Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];

    console.log(middlewares);

    console.log("show your self sucker 1");

    Reflect.defineMetadata(
      MetadataKeys.middleware,
      [...middlewares, middleware],
      target,
      key
    );
  };
};
