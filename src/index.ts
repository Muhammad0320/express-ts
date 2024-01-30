import express from "express";

import bodyParser from "body-parser";

import session from "cookie-session";
import "./controller/LoginController";
import "./controller/RootController";
import { AppRouter } from "./AppRouter";

const app = express();

const port = 3000;

app.use(
  session({
    keys: ["nfnvivbivbfe"],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(AppRouter.getInstance());

app.listen(port, () => {
  console.log(`Running  on port ${port}`);
});
