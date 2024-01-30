import { NextFunction, Request, Response, Router } from "express";

const router = Router();

// const AuthChecker = (req: Request, res: Response, next: NextFunction): void => {
//   if (req.session && req.session.isLoggedIn) {
//     return next();
//   }

//   res.send(`

//   <div>
//     <h1>
//     Forbidden
//     </h1>
//   </div>

//   `);
// };

// router.get("/protected", AuthChecker, (req: Request, res: Response) => {
//   res.send(`

//   <div>

//   <p> You can access the protected route </p>
//     </div>

//   `);
// });

export { router };
