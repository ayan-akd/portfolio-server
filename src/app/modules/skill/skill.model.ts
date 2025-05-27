import { Schema, model } from "mongoose";
import { TSkill } from "./skill.interface";

const skillSchema = new Schema<TSkill>(
  {
    name: { type: String, required: true },
    icon: { type: String, required: true },
    proficiency: { type: Number, required: true },
    category: {
      type: String,
      required: true,
      enum: ["frontend", "backend", "tools", "database"],
    },
  },
  {
    timestamps: true,
  }
);

const SkillModel = model<TSkill>("Skills", skillSchema);

export default SkillModel;
