import Joi from "joi";

import { datePattern, timePattern } from "../constants/task-constants.js";

export const createTaskSchema = Joi.object({
  date: Joi.string().pattern(datePattern).required().messages({
    "string.pattern.base": "Date must be with DD.MM.YYYY format.",
  }),
  time: Joi.string()
    .pattern(timePattern)
    .required()
    .messages({ "string.pattern.base": "Time must be with HH:MM:SS format." }),
  milkFormula: Joi.number(),
  breastFeedingTime: Joi.number(),
  poopSize: Joi.string().valid("big", "small"),
  isPee: Joi.boolean(),
});
