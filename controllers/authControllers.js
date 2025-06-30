import jwt from "jsonwebtoken";

import * as dbAuthService from "../services/authServices.js";
import HttpError from "../helpers/HttpError.js";
import ctrlWrapper from "../decorator/ctrlWrapper.js";

const { JWT_SECRET } = process.env;

// const getAllUsers = async (_, res) => {
//   const result = await dbAuthService.getAllUsers();

//   res.json(result);
// };

// const getUserById = async (req, res) => {
//   const { id } = req.params;
//   const result = await dbAuthService.getUserById(id);

//   if (!result) throw HttpError(404, "User not found");

//   res.json(result);
// };

// const createUser = async (req, res) => {
//   const result = await dbAuthService.createUser(req.body);

//   res.status(201).json(result);
// };

// const updateUserById = async (req, res) => {
//   const { id } = req.params;
//   await dbAuthService.updateUserById(id, req.body);

//   res.json({
//     message: "Update success",
//   });
// };

// const deleteUserById = async (req, res) => {
//   const { id } = req.params;
//   const result = await dbAuthService.deleteUserById(id);

//   if (!result) {
//     throw HttpError(404, "Not Found");
//   }

//   res.json({
//     message: "Delete success",
//   });
// };

const signupUser = async (req, res) => {
  const { email } = req.body;
  const user = await dbAuthService.findUser({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  await dbAuthService.createUser(req.body);

  res.status(201).json({
    message: "Create success",
  });
};

const signinUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await dbAuthService.findUser({ email });

  if (!user) {
    throw HttpError(401, "Email or password valid");
  }

  const comparePassword = await dbAuthService.validatePassword(
    password,
    user.password
  );

  if (!comparePassword) {
    throw HttpError(401, "Email or password valid");
  }

  const { _id: id } = user;

  const payload = {
    id,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: "300h" });
  await dbAuthService.updateUser({ _id: id }, { token });

  res.json({ token, user: { username: user.username, email: user.email } });
};

const currentUser = async (req, res) => {
  const { username, email } = req.user;

  res.json({
    email,
    username,
  });
};

const signoutUser = async (req, res) => {
  const { _id } = req.user;
  await dbAuthService.updateUser({ _id }, { token: null });

  res.json({
    message: "Signout success",
  });
};

export default {
  signupUser: ctrlWrapper(signupUser),
  signinUser: ctrlWrapper(signinUser),
  currentUser: ctrlWrapper(currentUser),
  signoutUser: ctrlWrapper(signoutUser),
  // getAllUsers: ctrlWrapper(getAllUsers),
  // getUserById: ctrlWrapper(getUserById),
  // createUser: ctrlWrapper(createUser),
  // updateUserById: ctrlWrapper(updateUserById),
  // deleteUserById: ctrlWrapper(deleteUserById),
};
