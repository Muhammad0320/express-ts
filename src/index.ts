import express, { Request, Response } from "express";

const app = express();

const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`

            <div> 
                    <h1> Hello World </h1>
            </div>
        
        `);
});

app.listen(port, () => {
  console.log(`Running  on port ${port}`);
});
