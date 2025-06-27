import express from "express";
import authControllers from "../controllers/authControllers.js";
import validateBody from "../decorator/validateBody.js";
import { createUserSchema } from "../schemas/authSchemas.js";
import isValidId from "../middlewares/isvalidId.js";

const authRouter = express.Router();

authRouter.get("/", authControllers.getAllUsers);

authRouter.get("/:id", isValidId, authControllers.getUserById);

authRouter.post(
  "/",
  validateBody(createUserSchema),
  authControllers.createUser
);

authRouter.put("/:id", isValidId, authControllers.updateUserById);

authRouter.delete("/:id", isValidId, authControllers.deleteUserById);

export default authRouter;
