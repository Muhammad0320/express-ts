import { Request, Response } from "express";

@controller("/")
export class LoginController {
  @get("/login")
  getLogin(req: Request, res: Response) {
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

function controller(path: string) {
  return function (target: Function) {};
}
