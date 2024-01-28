"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/login", (req, res) => {
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
router.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email &&
        password &&
        email === "muhammmad@gmail.com" &&
        password === "password") {
        req.session = { isLoggedIn: true };
        res.redirect("/");
    }
    else {
        res.send(`

      <div>  
          <div> Invalid login credentials try again </div>
      </div>
    
    `);
    }
});
router.post("/logout", (req, res) => {
    req.session = undefined;
    res.redirect("/login");
});
router.get("/", (req, res) => {
    console.log(req.session);
    if (req.session && req.session.isLoggedIn) {
        res.send(`

      <div> 
            <p> You are logged in </p>

            <a href='/logout' > Logout </a>
     </div>
    
    `);
    }
    else {
        res.send(`  
    <div> 

    <p> You are NOT logged in </p>

    <a href='/login' > Login </a>

</div>


    `);
    }
});
