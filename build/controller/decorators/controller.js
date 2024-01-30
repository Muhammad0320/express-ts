"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRputer_1 = require("../AppRputer");
const router = AppRputer_1.AppRouter.getInstance();
const controller = (RouterPrefix) => {
    return function (target) {
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata("path", target.prototype, key);
            router.get(`${RouterPrefix}${path}`, routeHandler);
        });
    };
};
exports.controller = controller;
