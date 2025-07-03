import express from "express";

import taskControllers from "../controllers/taskControllers.js";
import authToken from "../middlewares/authToken.js";
import { createTaskSchema } from "../schemas/taskSchema.js";
import validateBody from "../decorator/validateBody.js";

// import isValidId from "../middlewares/isValidId.js";

const taskRouter = express.Router();

taskRouter.use(authToken);

taskRouter.get("/", taskControllers.getAllTasks);

taskRouter.get("/:id", taskControllers.getTaskById);

taskRouter.post(
  "/",
  validateBody(createTaskSchema),
  taskControllers.createTask
);

taskRouter.put("/:id", taskControllers.updateTaskById);

taskRouter.delete("/:id", taskControllers.deleteTaskById);

export default taskRouter;
