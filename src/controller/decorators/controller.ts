import "reflect-metadata";
import { AppRouter } from "../../AppRouter";
import { Methods } from "./Methods";
import { MetadataKeys } from "./MetadataKeys";
import { NextFunction, RequestHandler, Response } from "express";

const router = AppRouter.getInstance();

const bodyValidator = (keys: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      res.status(422).send("Invalid input");

      return;
    }

    for (const key of keys) {
      if (!req.body[key]) {
        res.status(422).send("Invalid input");

        return;
      }
    }

    next();
  };
};

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

      if (path) {
        router[method](`${RouterPrefix}${path}`, ...middlewares, routeHandler);
      }
    });
  };
};
