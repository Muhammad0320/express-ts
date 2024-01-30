"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const router = AppRouter_1.AppRouter.getInstance();
const controller = (RouterPrefix) => {
    return function (target) {
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata("path", target.prototype, key);
            const method = Reflect.getMetadata("method", target.prototype, key);
            if (path) {
                router[method](`${RouterPrefix}${path}`, routeHandler);
            }
        });
    };
};
exports.controller = controller;
