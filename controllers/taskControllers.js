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
  const { _id: owner } = req.user;
  const { date, ...rest } = req.body;

  const findDate = await dbTaskService.getOneTask({ date, owner });

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
  const { task } = req.query;

  const setObject = {};
  for (const [key, value] of Object.entries(req.body)) {
    setObject[`babyService.$.${key}`] = value;
  }

  const result = await dbTaskService.updateTask(
    { _id: id, owner, "babyService._id": task },
    { $set: setObject }
  );

  if (!result) {
    throw HttpError(404, "Task not found");
  }

  res.json(result);
};

const deleteTaskById = async (req, res) => {
  const { id } = req.params;
  const { _id: owner } = req.user;
  const { task } = req.query;

  const result = await dbTaskService.updateTask(
    { _id: id, owner },
    { $pull: { babyService: { _id: task } } }
  );

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
