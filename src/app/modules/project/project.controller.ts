import { Request, Response } from "express";
import { ProjectService } from "./project.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// get all projects
const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const data = await ProjectService.getAllProjectFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Projects retrieved successfully",
    data,
  });
});

// create project
const createProject = catchAsync(async (req: Request, res: Response) => {
  const data = await ProjectService.createProjectIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully",
    data,
  });
});

// get single project
const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ProjectService.getSingleProjectFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project retrieved successfully",
    data,
  });
});

// update project
const updateProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const data = await ProjectService.updateProjectIntoDB(id as string, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully",
    data,
  });
});

// toggle featured project
const toggleFeaturedProject = catchAsync(
  async (req: Request, res: Response) => {
    const { id } = req.params;
    const data = await ProjectService.toggleFeaturedProject(id as string);

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Project updated successfully",
      data,
    });
  }
);

// delete project
const deleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;

  await ProjectService.deleteProjectFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project deleted successfully",
    data: null,
  });
});

export const ProjectController = {
  getAllProject,
  createProject,
  getSingleProject,
  updateProject,
  deleteProject,
  toggleFeaturedProject,
};
