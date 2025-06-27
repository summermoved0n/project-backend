import Joi from "joi";
import { emailPattern } from "../constants/user-constants.js";

export const userRegistrationSchema = Joi.object({
  username: Joi.string().required(),
  email: Joi.string().pattern(emailPattern).required(),
  password: Joi.string().min(6).max(20).required(),
});

export const userLoginSchema = Joi.object({
  email: Joi.string().pattern(emailPattern).required(),
  password: Joi.string().min(6).max(20).required(),
});
