import { Request, Response, Router } from "express";

const router = Router();

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

router.get("/", (req: Request, res: Response) => {
  res.send(`
  
        <form method='POST' >
            <div> 
                <label> Email </label>
                <input name='email' />
            </div>  
            <div>
                <label> Password </label> 
                <input name='password' type='password' />    
         </div>
      </form>
    
  `);
});

router.post("/", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email) {
    res.send(`${email.toUpperCase()}   `);
  }
});

export { router };
