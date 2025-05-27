import { Schema, model } from "mongoose";
import { TAbout, TEducation, TExperience, TService } from "./about.interface";

const educationSchema = new Schema<TEducation>({
  degree: {
    type: String,
    required: [true, "Degree is required"],
  },
  institution: {
    type: String,
    required: [true, "Institution is required"],
  },
});

const experienceSchema = new Schema<TExperience>({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  company: {
    type: String,
    required: [true, "Company is required"],
  },
  duration: {
    type: String,
    required: [true, "Duration is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  technologies: {
    type: [String],
  },
});

const serviceSchema = new Schema<TService>({
  id: {
    type: Number,
    required: [true, "Service ID is required"],
  },
  title: {
    type: String,
    required: [true, "Service title is required"],
  },
  description: {
    type: String,
    required: [true, "Service description is required"],
  },
  iconName: {
    type: String,
    required: [true, "Icon name is required"],
  },
});

const aboutSchema = new Schema<TAbout>(
  {
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    bio: {
      type: String,
      required: [true, "Bio is required"],
    },
    education: {
      type: [educationSchema],
      required: [true, "Education information is required"],
    },
    experience: {
      type: [experienceSchema],
      default: [],
    },
    services: {
      type: [serviceSchema],
      default: [],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    resumeLink: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const AboutModel = model<TAbout>("About", aboutSchema);

export default AboutModel;
