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
