import express from "express";

import taskControllers from "../controllers/taskControllers.js";
import authToken from "../middlewares/authToken.js";
import { createTaskSchema } from "../schemas/taskSchema.js";
import validateBody from "../decorator/validateBody.js";

import isValidId from "../middlewares/isValidId.js";

const taskRouter = express.Router();

taskRouter.use(authToken);

taskRouter.get("/", isValidId, taskControllers.getAllTasks);

taskRouter.get("/:id", isValidId, taskControllers.getTaskById);

taskRouter.post(
  "/",
  validateBody(createTaskSchema),
  taskControllers.createTask
);

taskRouter.put("/:id", isValidId, taskControllers.updateTaskById);

taskRouter.delete("/:id", isValidId, taskControllers.deleteTaskById);

export default taskRouter;
