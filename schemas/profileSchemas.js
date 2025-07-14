import Joi from "joi";
import { datePattern, timePattern } from "../constants/task-constants.js";

export const writeBabyWeight = Joi.object({
  date: Joi.string().pattern(datePattern).required().messages({
    "string.pattern.base": "Date must be with YYYY-MM-DD format.",
  }),
  babyWeight: Joi.number().required(),
});

export const writeBabyLength = Joi.object({
  date: Joi.string().pattern(datePattern).required().messages({
    "string.pattern.base": "Date must be with YYYY-MM-DD format.",
  }),
  babyLength: Joi.number().required(),
});
