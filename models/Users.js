import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const authSchema = new Schema(
  {
    username: String,
    password: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

authSchema.post("save", handleSaveError);
authSchema.pre("findOneAndUpdate", setUpdateSettings);
authSchema.post("findOneAndUpdate", handleSaveError);

const User = model("user", authSchema);

export default User;
