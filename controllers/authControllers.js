import {} from "../services/authServices.js";
import HttpError from "../helpers/HttpError.js";
import { getUsersSchema } from "../schemas/authSchemas.js";

const getAllUsers = async (_, res, next) => {
  try {
    const result = await dataBase.getAllUsers();

    res.json(result);
  } catch (error) {
    next(error);
  }
};

const getUserById = async (req, res) => {
  try {
    throw HttpError(404, "#");
    res.json(null);
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res) => {
  try {
    res.json(null);
  } catch (error) {
    next(error);
  }
};

const updateUserById = async (req, res) => {
  try {
    res.json(null);
  } catch (error) {
    next(error);
  }
};

const deleteUserById = async (req, res) => {
  try {
    res.json(null);
  } catch (error) {
    next(error);
  }
};

export default {
  getAllUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
};
