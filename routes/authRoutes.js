import express from "express";
import authControllers from "../controllers/authControllers.js";
import validateBody from "../decorator/validateBody.js";
import { createUserSchema } from "../schemas/authSchemas.js";

const authRouter = express.Router();

authRouter.get("/", authControllers.getAllUsers);

authRouter.get("/:id", authControllers.getUserById);

authRouter.post("/", validateBody(createUserSchema), authControllers.createUser);

authRouter.put("/:id", authControllers.updateUserById);

authRouter.delete("/:id", authControllers.deleteUserById);

export default authRouter;
