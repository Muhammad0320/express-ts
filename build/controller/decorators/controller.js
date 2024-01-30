"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = exports.controller = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.router = router;
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
