import Joi from "joi";

export const createUserSchema = Joi.object({
  username: Joi.string().required(),
  password: Joi.string().required(),
});

// export const updateUserSchema = Joi.object({

// })
