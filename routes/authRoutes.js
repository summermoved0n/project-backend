import express from "express";
import authControllers from "../controllers/authControllers.js";
import validateBody from "../decorator/validateBody.js";
import authToken from "../middlewares/authToken.js";

import {
  userRegistrationSchema,
  userLoginSchema,
} from "../schemas/authSchemas.js";

const authRouter = express.Router();

authRouter.get("/current", authToken, authControllers.currentUser);

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

authRouter.post("/signout", authToken, authControllers.signoutUser);

export default authRouter;
