import express from "express";
import authControllers from "../controllers/authControllers.js";

const authRouter = express.Router();

authRouter.get("/", authControllers.getAllUsers);

authRouter.get("/:id", authControllers.getUserById);

authRouter.post("/", authControllers.createUser);

authRouter.put("/:id", authControllers.updateUserById);

authRouter.delete("/:id", authControllers.deleteUserById);

export default authRouter;
