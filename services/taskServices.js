import Task from "../models/Task.js";

export const getAllTasks = (filter = {}) => Task.find(filter);

export const getOneTask = (filter = {}) => Task.findOne(filter);

export const createTask = (data) => Task.create(data);

export const updateTask = (filter, data) => Task.findOneAndUpdate(filter, data);

export const deleteTask = (filter) => Task.findOneAndDelete(filter);
