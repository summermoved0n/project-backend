import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";

const taskSchema = new Schema(
  {
    breastFeedingTime: { type: Number },
    poopSize: {
      type: String,
      enum: ["big", "small"],
    },
    peeSize: {
      type: String,
      enum: ["big", "small"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

taskSchema.post("save", handleSaveError);
taskSchema.pre("findOneAndUpdate", setUpdateSettings);
taskSchema.post("findOneAndUpdate", handleSaveError);

const Task = model("task", taskSchema);

export default Task;
