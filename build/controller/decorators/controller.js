"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = void 0;
require("reflect-metadata");
const express_1 = __importDefault(require("express"));
const controller = (RouterPrefix) => {
    return function (target) {
        Object.getOwnPropertyNames(target).forEach((key) => {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata("path", target.prototype, key);
            const router = express_1.default.Router();
            router.get(`${RouterPrefix}${path}`, routeHandler);
        });
    };
};
exports.controller = controller;
