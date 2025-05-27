import { TAbout } from "./about.interface";
import AboutModel from "./about.model";

// get about data from database
const getAllAboutFromDB = async () => {
  const result = await AboutModel.find({});
  return result;
};

// create about data to database
const createAboutToDB = async (payload: Partial<TAbout>) => {
  const result = await AboutModel.create(payload);
  return result;
};

// update about data to database
const updateAboutToDB = async (id: string, payload: Partial<TAbout>) => {
  const result = await AboutModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const AboutService = {
  getAllAboutFromDB,
  createAboutToDB,
  updateAboutToDB,
};
