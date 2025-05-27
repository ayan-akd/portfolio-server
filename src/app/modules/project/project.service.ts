import { AppError } from "../../errors/AppError";
import { TProject } from "./project.interface";
import ProjectModel from "./project.model";
import httpStatus from "http-status";

// get all projects
const getAllProjectFromDB = async () => {
  const result = await ProjectModel.find({}, null, { sort: { createdAt: -1 } });
  return result;
};

// create project into db
const createProjectIntoDB = async (payload: TProject) => {
  const result = await ProjectModel.create(payload);
  return result;
};

// get single project
const getSingleProjectFromDB = async (id: string) => {
  const result = await ProjectModel.findById(id);
  return result;
};

// update project
const updateProjectIntoDB = async (id: string, payload: Partial<TProject>) => {
  const project = await ProjectModel.findById(id);

  if (!project) throw new AppError(httpStatus.NOT_FOUND, "Project not found");

  const result = await ProjectModel.findByIdAndUpdate(id, payload, {
    new: true,
  });

  return result;
};

// toggle featured project
const toggleFeaturedProject = async (id: string) => {
  const project = await ProjectModel.findById(id);

  if (!project) throw new AppError(httpStatus.NOT_FOUND, "Project not found");

  const result = await ProjectModel.findByIdAndUpdate(
    id,
    { isFeatured: !project.isFeatured },
    { new: true }
  );

  return result;
};

// delete project from db
const deleteProjectFromDB = async (id: string) => {
  const result = await ProjectModel.findByIdAndDelete(id);
  return result;
};

export const ProjectService = {
  getAllProjectFromDB,
  getSingleProjectFromDB,
  updateProjectIntoDB,
  createProjectIntoDB,
  deleteProjectFromDB,
  toggleFeaturedProject,
};
