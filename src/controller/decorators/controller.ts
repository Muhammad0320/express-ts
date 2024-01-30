import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { RequestHandler } from "express";

const router = AppRouter.getInstance();

export const controller = (RouterPrefix: string) => {
  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.method,
        target.prototype,
        key
      );

      const middlewares: RequestHandler[] = Reflect.getMetadata(
        MetadataKeys.middleware,
        target.prototype,
        key
      );

      console.log(middlewares, "shit");

      if (path) {
        router[method](`${RouterPrefix}${path}`, routeHandler);
      }
    });
  };
};
