"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const AppRouter_1 = require("../../AppRouter");
const MetadataKeys_1 = require("./MetadataKeys");
const router = AppRouter_1.AppRouter.getInstance();
const bodyValidators = (keys) => {
    return function (req, res, next) {
        if (!req.body) {
            res.status(422).send("Invalid input");
            return;
        }
        for (const key of keys) {
            console.log(key);
            if (!req.body.red) {
                res.status(422).send("Invalid input");
                return;
            }
        }
        next();
    };
};
const controller = (RouterPrefix) => {
    return function (target) {
        Object.getOwnPropertyNames(target.prototype).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.path, target.prototype, key);
            const method = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key);
            const validators = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.validator, target.prototype, key);
            if (path) {
                router[method](`${RouterPrefix}${path}`, ...middlewares, routeHandler);
            }
        });
    };
};
exports.controller = controller;
