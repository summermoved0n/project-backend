import Joi from "joi";

export const getUsersSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
