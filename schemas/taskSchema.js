import Joi from "joi";

export const createTaskSchema = Joi.object({
  breastFeedingTime: Joi.number(),
  poopSize: Joi.string().valid("big", "small"),
  peeSize: Joi.string().valid("big", "small"),
});
