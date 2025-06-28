import express from "express";
import authControllers from "../controllers/authControllers.js";
import validateBody from "../decorator/validateBody.js";

import {
  userRegistrationSchema,
  userLoginSchema,
} from "../schemas/authSchemas.js";

const authRouter = express.Router();

authRouter.post(
  "/signup",
  validateBody(userRegistrationSchema),
  authControllers.signupUser
);

authRouter.post(
  "/signin",
  validateBody(userLoginSchema),
  authControllers.signinUser
);

export default authRouter;
