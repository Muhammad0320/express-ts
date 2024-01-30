import { NextFunction, Request, Response, Router } from "express";

const router = Router();

export interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

const AuthChecker = (req: Request, res: Response, next: NextFunction): void => {
  if (req.session && req.session.isLoggedIn) {
    return next();
  }

  res.send(`
    
  <div>
    <h1>
    Forbidden
    </h1>       
  </div>

  
  `);
};

router.get("/protected", AuthChecker, (req: Request, res: Response) => {
  res.send(`

  <div> 

  <p> You can access the protected route </p> 
    </div>

  `);
});

router.get("/logout", (req: Request, res: Response) => {
  req.session = undefined;

  res.redirect("/login");
});

router.get("/", (req: Request, res: Response) => {
  console.log(req.session);

  if (req.session && req.session.isLoggedIn) {
    res.send(`

      <div> 
            <p> You are logged in </p>

            <a href='/logout' > Logout </a>
     </div>
    
    `);
  } else {
    res.send(`  
    <div> 

    <p> You are NOT logged in </p>

    <a href='/login' > Login </a>

</div>


    `);
  }
});

export { router };
