import Joi from "joi";

export const createTaskSchema = Joi.object({
  breastFeedingTime: Joi.number(),
  isPoop: Joi.string().pattern(["big", "small"]),
  isPee: Joi.string().pattern(["big", "small"]),
});
