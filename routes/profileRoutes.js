import express from "express";

import profileControllers from "../controllers/profileControllers.js";
import validateBody from "../decorator/validateBody.js";
import authToken from "../middlewares/authToken.js";
import isValidId from "../middlewares/isValidId.js";
import { writeBabyLength, writeBabyWeight } from "../schemas/profileSchemas.js";

const profileRouter = express.Router();

profileRouter.use(authToken);

profileRouter.get("/:id", isValidId, profileControllers.getProfileById);

profileRouter.post(
  "/weight",
  validateBody(writeBabyWeight),
  profileControllers.addBabyWeight
);

profileRouter.post(
  "/length",
  validateBody(writeBabyLength),
  profileControllers.addBabyLength
);

export default profileRouter;
