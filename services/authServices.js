import User from "../models/Users.js";

export const getAllUsers = () => User.find();

export const getUserById = (id) => User.findById({ _id: id });

export const createUser = (data) => User.create(data);

export const updateUserById = (id, data) =>
  User.findByIdAndUpdate({ _id: id }, data, { new: true, runValidators: true });

export const deleteUserById = (id) => User.findByIdAndDelete({ _id: id });
