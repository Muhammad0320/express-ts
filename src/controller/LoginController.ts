import { Request, Response } from "express";

export class LoginController {
  @get("/login")
  get(req: Request, res: Response) {
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
  }
}

const get = (path: string) => {
  return function (target: LoginController, key: string) {};
};

const controller = (path: string) => {
  return function (target: typeof LoginController, key: string) {};
};
