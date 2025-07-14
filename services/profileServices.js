import Profile from "../models/Profile.js";

export const getOneProfile = (filter = {}) => Profile.findOne(filter);

// export const getOneTask = (filter = {}) => Task.findOne(filter);

export const createProfile = (data) => Profile.create(data);

export const updateProfile = (filter, data) =>
  Profile.findOneAndUpdate(filter, data);

// export const deleteTask = (filter) => Task.findOneAndDelete(filter);
