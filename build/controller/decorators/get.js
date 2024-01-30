"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.put = exports.patch = exports.post = exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("../Methods");
const buildMethod = function (method) {
    return function (path) {
        return function (target, key) {
            Reflect.defineMetadata("path", path, target, key);
            Reflect.defineMetadata("method", method, target, key);
        };
    };
};
exports.get = buildMethod(Methods_1.Methods.get);
exports.post = buildMethod(Methods_1.Methods.post);
exports.patch = buildMethod(Methods_1.Methods.patch);
exports.put = buildMethod(Methods_1.Methods.put);
exports.del = buildMethod(Methods_1.Methods.delete);
