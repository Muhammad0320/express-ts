import "reflect-metadata";
import { AppRouter } from "../AppRouter";
import { Methods } from "./Methods";

const router = AppRouter.getInstance();

export const controller = (RouterPrefix: string) => {
  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata("path", target.prototype, key);

      const method: Methods = Reflect.getMetadata(
        "method",
        target.prototype,
        key
      );

      if (path) {
        router[method](`${RouterPrefix}${path}`, routeHandler);
      }
    });
  };
};
