import { Request, Response } from "express";
import { controller } from "./decorators/controller";
import { get } from "./decorators/route";

@controller("")
export class RootController {
  @get("/")
  getRoot(req: Request, res: Response) {
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
  }
}
