import { Schema, model } from "mongoose";
import { handleSaveError, setUpdateSettings } from "./hooks.js";
// import { datePattern, timePattern } from "../constants/task-constants.js";

const babyWeightSchema = new Schema({
  date: { type: String, require: true },
  babyWeight: { type: Number, require: true },
});

const babyLengthSchema = new Schema({
  date: { type: String, require: true },
  babyLength: { type: Number, require: true },
});

const profileSchema = new Schema(
  {
    babyLengthService: [babyLengthSchema],
    babyWeightService: [babyWeightSchema],
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

profileSchema.post("save", handleSaveError);
profileSchema.pre("findOneAndUpdate", setUpdateSettings);
profileSchema.post("findOneAndUpdate", handleSaveError);

const Profile = model("profile", profileSchema);

export default Profile;
