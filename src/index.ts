import express, { Request, Response } from "express";
import { router } from "./routes/loginRoutes";

const app = express();

const port = 3000;

app.use(router);

app.listen(port, () => {
  console.log(`Running  on port ${port}`);
});
