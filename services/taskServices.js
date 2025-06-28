import Task from "../models/Task.js";

export const getAllTasks = (filter = {}) => Task.find(filter);

export const createTask = (data) => Task.create(data);
