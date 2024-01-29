import "reflect-metadata";

export const controller = (RouterPrefix: string) => {
  return function (target: Function) {
    Object.getOwnPropertyNames(target).forEach((key) => {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata("path", target.prototype, key);
    });
  };
};