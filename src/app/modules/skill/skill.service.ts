import { TSkill } from "./skill.interface";
import SkillModel from "./skill.model";

// get all skill
const getAllSkillFromDB = async () => {
  const result = await SkillModel.find({});
  return result;
};

// create skill
const createSkillToDB = async (payload: TSkill) => {
  const result = await SkillModel.create(payload);
  return result;
};

// update skill
const updateSkillToDB = async (id: string, payload: Partial<TSkill>) => {
  const result = await SkillModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

export const SkillService = {
  getAllSkillFromDB,
  createSkillToDB,
  updateSkillToDB,
};
