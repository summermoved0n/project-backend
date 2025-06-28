import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";
import { required } from "joi";

const taskSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// authSchema.post("save", handleSaveError);
// authSchema.pre("findOneAndUpdate", setUpdateSettings);
// authSchema.post("findOneAndUpdate", handleSaveError);

const Task = model("task", taskSchema);

export default Task;
