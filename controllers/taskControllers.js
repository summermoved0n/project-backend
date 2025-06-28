// import * as dbTaskService from "../services/authServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorator/ctrlWrapper.js";

const getAllTasks = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await dbTaskService.getAllTasks({ owner });

  res.json(result);
};

const getTaskById = async (req, res) => {
  // const { id } = req.params;
  // const result = await dbTaskService.getUserById(id);
  // if (!result) throw HttpError(404, "User not found");
  // res.json(result);
};

const createTask = async (req, res) => {
  const { _id: owner } = req.user;
  const result = await dbTaskService.createTask({ ...req.body, owner });

  res.status(201).json(result);
};

const updateTaskById = async (req, res) => {
  // const { id } = req.params;
  // await dbTaskService.updateUserById(id, req.body);
  // res.json({
  //   message: "Update success",
  // });
};

const deleteTaskById = async (req, res) => {
  // const { id } = req.params;
  // const result = await dbTaskService.deleteUserById(id);
  // if (!result) {
  //   throw HttpError(404, "Not Found");
  // }
  // res.json({
  //   message: "Delete success",
  // });
};

export default {
  getAllTasks: ctrlWrapper(getAllTasks),
  getTaskById: ctrlWrapper(getTaskById),
  createTask: ctrlWrapper(createTask),
  updateTaskById: ctrlWrapper(updateTaskById),
  deleteTaskById: ctrlWrapper(deleteTaskById),
};
