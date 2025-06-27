import bcrypt from "bcrypt";

import User from "../models/Users.js";

// export const getAllUsers = () => User.find();

// export const getUserById = (id) => User.findById({ _id: id });

export const createUser = async (data) => {
  const hashPassword = await bcrypt.hash(data.password, 10);
  return User.create({ ...data, password: hashPassword });
};

export const findUser = (filter) => User.findOne(filter);

export const validatePassword = (password, hashPassword) =>
  bcrypt.compare(password, hashPassword);

// export const updateUserById = (id, data) =>
//   User.findByIdAndUpdate({ _id: id }, data, { new: true, runValidators: true });

// export const deleteUserById = (id) => User.findByIdAndDelete({ _id: id });
