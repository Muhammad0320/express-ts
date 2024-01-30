"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
const AuthChecker = (req, res, next) => {
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
router.get("/protected", AuthChecker, (req, res) => {
    res.send(`

  <div> 

  <p> You can access the protected route </p> 
    </div>

  `);
});
router.get("/logout", (req, res) => {
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
