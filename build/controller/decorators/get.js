"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildMethod = void 0;
require("reflect-metadata");
const buildMethod = function (method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata("path", path, target, key);
            Reflect.defineMetadata("method", method, target, key);
        };
    };
};
exports.buildMethod = buildMethod;
