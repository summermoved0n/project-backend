import * as dbTaskService from "../services/taskServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorator/ctrlWrapper.js";

const getAllTasks = async (req, res) => {
  const { _id: owner } = req.user;

  if (req.query.date) {
    const { date } = req.query;
    const result = await dbTaskService.getAllTasks({ owner, date });

    return res.json(result);
  }

  const result = await dbTaskService.getAllTasks({ owner });

  res.json(result);
};

const getTaskById = async (req, res) => {
  console.log("One task");
  const { id } = req.params;
  const { _id: owner } = req.user;
  const result = await dbTaskService.getOneTask({ _id: id, owner });

  if (!result) {
    throw HttpError(404, "Task not found");
  }

  res.json(result);
};

const createTask = async (req, res) => {
  console.log(req.body);
  const { _id: owner } = req.user;
  const { date, ...rest } = req.body;

  const findDate = await dbTaskService.getOneTask({ date });

  if (!findDate) {
    const createTask = await dbTaskService.createTask({ ...req.body, owner });
    const { _id } = createTask;
    createTask.babyService.push(rest);
    const result = await dbTaskService.updateTask({ _id }, createTask);

    return res.status(201).json(result);
  }

  const { _id } = findDate;
  findDate.babyService.push(rest);
  const result = await dbTaskService.updateTask({ _id }, findDate);

  res.status(201).json(result);
};

const updateTaskById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const result = await dbTaskService.updateTask({ _id: id, owner }, req.body);

  if (!result) {
    throw HttpError(404, "Task not found");
  }

  res.json(result);
};

const deleteTaskById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;

  const result = await dbTaskService.deleteTask({ _id: id, owner });

  if (!result) {
    throw HttpError(404, "Task not Found");
  }

  res.json({
    message: "Delete success",
  });
};

export default {
  getAllTasks: ctrlWrapper(getAllTasks),
  getTaskById: ctrlWrapper(getTaskById),
  createTask: ctrlWrapper(createTask),
  updateTaskById: ctrlWrapper(updateTaskById),
  deleteTaskById: ctrlWrapper(deleteTaskById),
};
