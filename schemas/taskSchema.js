import Joi from "joi";

export const createTaskSchema = Joi.object({
  date: Joi.string().required(),
  time: Joi.string().required(),
  milkFormula: Joi.number(),
  breastFeedingTime: Joi.number(),
  poopSize: Joi.string().valid("big", "small"),
  isPee: Joi.boolean(),
});
