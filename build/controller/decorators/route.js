"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.patch = exports.post = exports.put = exports.get = void 0;
require("reflect-metadata");
const Methods_1 = require("./Methods");
const MetadataKeys_1 = require("./MetadataKeys");
const buildMethod = function (method) {
    return function (path) {
        return function (target, key, desc) {
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.path, path, target, key);
            Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.method, method, target, key);
        };
    };
};
exports.get = buildMethod(Methods_1.Methods.get);
exports.put = buildMethod(Methods_1.Methods.put);
exports.post = buildMethod(Methods_1.Methods.post);
// export const del = buildMethod(Methods.delete);
exports.patch = buildMethod(Methods_1.Methods.patch);
