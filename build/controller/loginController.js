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
exports.LoginController = void 0;
const route_1 = require("./decorators/route");
const controller_1 = require("./decorators/controller");
const use_1 = require("./decorators/use");
const useMiddleware = (req, res, next) => {
    console.log("Let's see if you work ");
};
let LoginController = class LoginController {
    getLogin(req, res) {
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
};
exports.LoginController = LoginController;
__decorate([
    (0, route_1.get)("/login"),
    (0, use_1.use)(useMiddleware),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], LoginController.prototype, "getLogin", null);
exports.LoginController = LoginController = __decorate([
    (0, controller_1.controller)("/auth")
], LoginController);
