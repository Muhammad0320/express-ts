import express from "express";
import { router } from "./routes/loginRoutes";
import bodyParser from "body-parser";

import session from "cookie-session";

const app = express();

const port = 3000;

app.use(
  session({
    keys: ["nfnvivbivbfe"],
  })
);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(router);

app.listen(port, () => {
  console.log(`Running  on port ${port}`);
});
