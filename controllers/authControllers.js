import {} from "../services/authServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorator/ctrlWrapper.js";

const getAllUsers = async (_, res, next) => {
  const result = await dataBase.getAllUsers();

  res.json(result);
};

const getUserById = async (req, res) => {
  throw HttpError(404, "#");
  res.json(null);
};

const createUser = async (req, res) => {
  const result = await dataBase.createUser(req.body);

  res.status(201).json(result);
};

const updateUserById = async (req, res) => {
  const { id } = req.params;
  const result = await dataBase.updateUserById(id, req.body);

  res.json(result);
};

const deleteUserById = async (req, res) => {
  const { id } = req.params;
  const result = await dataBase.deleteUserById(id);

  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.json({
    message: "Delete success",
  });
};

export default {
  getAllUsers: ctrlWrapper(getAllUsers),
  getUserById: ctrlWrapper(getUserById),
  createUser: ctrlWrapper(createUser),
  updateUserById: ctrlWrapper(updateUserById),
  deleteUserById: ctrlWrapper(deleteUserById),
};
