import mongoose, { Schema } from "mongoose";
import { Icon } from "..";

const schema = new Schema<Icon>({
  categories: { type: [String], required: true, default: [] },
  tags: { type: [String], required: true, default: [] },
  name: { type: String, required: true },
  jsxComponentName: { type: String, required: true },
});

export const IconModel = mongoose.model("icon", schema);
