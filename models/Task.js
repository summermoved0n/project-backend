import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";
import { datePattern, timePattern } from "../constants/task-constants.js";

const babyServiceSchema = new Schema({
  time: { type: String, require: true, match: timePattern },
  milkFormula: {
    type: Number,
  },
  breastFeedingTime: { type: Number },
  isPoop: {
    type: Boolean,
  },
  isPee: {
    type: Boolean,
  },
  vitaminD: {
    type: Boolean,
  },
  breastSide: {
    type: String,
    enum: ["left", "right"],
  },
});

const taskSchema = new Schema(
  {
    date: {
      type: String,
      require: true,
      match: datePattern,
    },
    babyService: [babyServiceSchema],
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
