"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootController = void 0;
const controller_1 = require("./decorators/controller");
const route_1 = require("./decorators/route");
const use_1 = require("./decorators/use");
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
let RootController = class RootController {
    getRoot(req, res) {
        console.log(req.session);
        if (req.session && req.session.isLoggedIn) {
            res.send(`
  
        <div> 
              <p> You are logged in </p>
  
              <a href='/auth/logout' > Logout </a>
       </div>
      
      `);
        }
        else {
            res.send(`  
      <div> 
  
      <p> You are NOT logged in </p>
  
      <a href='/auth/login' > Login </a>
  
  </div>
  
  
      `);
        }
    }
    getProtected(req, res) {
        res.send(`
  
    <div> 
  
    <p> You can access the protected route </p> 
      </div>
  
    `);
    }
};
exports.RootController = RootController;
__decorate([
    (0, route_1.get)("/"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RootController.prototype, "getRoot", null);
__decorate([
    (0, route_1.get)("/protected"),
    (0, use_1.use)(AuthChecker),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], RootController.prototype, "getProtected", null);
exports.RootController = RootController = __decorate([
    (0, controller_1.controller)("")
], RootController);
