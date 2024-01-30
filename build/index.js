"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginRoutes_1 = require("./routes/loginRoutes");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
require("./controller/LoginController");
const controller_1 = require("./controller/decorators/controller");
const app = (0, express_1.default)();
const port = 3000;
app.use((0, cookie_session_1.default)({
    keys: ["nfnvivbivbfe"],
}));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(loginRoutes_1.router);
app.use(controller_1.router);
app.listen(port, () => {
    console.log(`Running  on port ${port}`);
});
