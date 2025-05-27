import { Request, Response } from "express";
import { AboutService } from "./about.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

// get all about
const getAllAbout = catchAsync(async (req: Request, res: Response) => {
  const data = await AboutService.getAllAboutFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "About retrieved successfully",
    data,
  });
});

// create about
const createAbout = catchAsync(async (req: Request, res: Response) => {
  const data = await AboutService.createAboutToDB(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "About created successfully",
    data,
  });
});

// update about
const updateAbout = catchAsync(async (req: Request, res: Response) => {
  const data = await AboutService.updateAboutToDB(
    req.params.id as string,
    req.body
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "About updated successfully",
    data,
  });
});

export const AboutController = { getAllAbout, createAbout, updateAbout };
