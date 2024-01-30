import "reflect-metadata";

import express from "express";

export const controller = (RouterPrefix: string) => {
  return function (target: Function) {
    Object.getOwnPropertyNames(target).forEach((key) => {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata("path", target.prototype, key);

      const router = express.Router();

      router.get(`${RouterPrefix}${path}`, routeHandler);
    });
  };
};
