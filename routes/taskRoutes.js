import express from "express";
import taskControllers from "../controllers/taskControllers.js";
// import validateBody from "../decorator/validateBody.js";
// import { createUserSchema } from "../schemas/authSchemas.js";
import isValidId from "../middlewares/isvalidId.js";

const taskRoutes = express.Router();

// taskRoutes.get("/", taskControllers.getAllUsers);

// taskRoutes.get("/:id", isValidId, taskControllers.getTaskById);

// taskRoutes.post(
//   "/",
//   // validateBody(createUserSchema),
//   taskControllers.createTask
// );

// taskRoutes.put("/:id", isValidId, taskControllers.updateTaskById);

// taskRoutes.delete("/:id", isValidId, taskControllers.deleteTaskById);

export default taskRoutes;
