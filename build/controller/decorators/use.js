"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.use = void 0;
require("reflect-metadata");
const MetadataKeys_1 = require("./MetadataKeys");
const use = (middleware) => {
    return function (target, key) {
        console.log("show your self sucker 2");
        const middlewares = Reflect.getMetadata(MetadataKeys_1.MetadataKeys.middleware, target.prototype, key) || [];
        console.log(middlewares);
        console.log("show your self sucker 1");
        Reflect.defineMetadata(MetadataKeys_1.MetadataKeys.middleware, [...middlewares, middleware], target, key);
    };
};
exports.use = use;
