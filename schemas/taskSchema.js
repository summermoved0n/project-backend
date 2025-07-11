import Joi from "joi";

import { datePattern, timePattern } from "../constants/task-constants.js";

export const createTaskSchema = Joi.object({
  date: Joi.string().pattern(datePattern).required().messages({
    "string.pattern.base": "Date must be with YYYY-MM-DD format.",
  }),
  time: Joi.string()
    .pattern(timePattern)
    .required()
    .messages({ "string.pattern.base": "Time must be with HH:MM format." }),
  milkFormula: Joi.number(),
  breastFeedingTime: Joi.number(),
  breastSide: Joi.string().valid("left", "right"),
  isPoop: Joi.boolean(),
  isPee: Joi.boolean(),
  vitaminD: Joi.boolean(),
  eyeDrop: Joi.boolean(),
}).or(
  "milkFormula",
  "breastFeedingTime",
  "breastSide",
  "isPoop",
  "isPee",
  "vitaminD",
  "eyeDrop"
);

export const updateTaskSchema = Joi.object({
  time: Joi.string()
    .pattern(timePattern)
    .messages({ "string.pattern.base": "Time must be with HH:MM format." }),
  milkFormula: Joi.number(),
  breastFeedingTime: Joi.number(),
  breastSide: Joi.string().valid("left", "right"),
  isPoop: Joi.boolean(),
  isPee: Joi.boolean(),
  vitaminD: Joi.boolean(),
  eyeDrop: Joi.boolean(),
}).or(
  "time",
  "milkFormula",
  "breastFeedingTime",
  "breastSide",
  "isPoop",
  "isPee",
  "vitaminD",
  "eyeDrop"
);
