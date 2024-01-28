import { Request, Response, Router } from "express";

const router = Router();

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

router.get("/login", (req: Request, res: Response) => {
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

         <button> submit form </button>
      </form>
    
  `);
});

router.post("/login", (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (
    email &&
    password &&
    email === "muhammmad@gmail.com" &&
    password === "password"
  ) {
    req.session = { isLoggedIn: true };
  }
});

router.get("/", (req: Request, res: Response) => {
  if (req.session && req.session.isLogged) {
    res.send(`

      <div> 

            <p> You are logged in </p>

            <a href='/logout' />

     </div>
    
    `);
  } else {
    res.send(`  
    
    
    <div> 

    <p> You are NOT logged in </p>

    <a href='/login' />

</div>


    `);
  }
});

export { router };
