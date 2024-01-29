"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
require("reflect-metadata");
const get = (path) => {
    return function (target, key) {
        Reflect.defineMetadata("path", path, target, key);
    };
};
exports.get = get;
