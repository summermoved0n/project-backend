// import { Schema, model } from "mongoose";
// import { handleSaveError, setUpdateSettings } from "./hooks.js";

// const taskSchema = new Schema(
//   {
//     breastFeedingTime: {},
//     isPoop: {},
//     isPee: {},
//     owner: {
//       type: Schema.Types.ObjectId,
//       ref: "user",
//       require: true,
//     },
//   },
//   {
//     versionKey: false,
//     timestamps: true,
//   }
// );

// taskSchema.post("save", handleSaveError);
// taskSchema.pre("findOneAndUpdate", setUpdateSettings);
// taskSchema.post("findOneAndUpdate", handleSaveError);

// const Task = model("task", taskSchema);

// export default Task;
