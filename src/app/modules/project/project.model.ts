import { model, Schema } from "mongoose";
import { TProject } from "./project.interface";

const projectSchema = new Schema<TProject>(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    clientRepo: {
      type: String,
      required: true,
    },
    serverRepo: {
      type: String,
    },
    technology: {
      type: [String],
      required: true,
    },
    liveLink: {
      type: String,
      required: true,
    },
    serial: {
      type: Number,
    },
  },
  { timestamps: true }
);

const ProjectModel = model<TProject>("Project", projectSchema);

export default ProjectModel;
