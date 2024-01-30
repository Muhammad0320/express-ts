import "reflect-metadata";

import express from "express";

const router = express.Router();
export const controller = (RouterPrefix: string) => {
  return function (target: Function) {
    Object.getOwnPropertyNames(target.prototype).forEach((key) => {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata("path", target.prototype, key);

      router.get(`${RouterPrefix}${path}`, routeHandler);
    });
  };
};

export { router };
