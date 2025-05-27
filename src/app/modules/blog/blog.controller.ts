import { Request, Response } from "express";
import { BlogService } from "./blog.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// get all blogs
const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const data = await BlogService.getAllBlogFromDB();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blogs retrieved successfully",
    data,
  });
});

// create blog
const createBlog = catchAsync(async (req: Request, res: Response) => {
  const result = await BlogService.createBlogIntoDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Blog created successfully",
    data: result,
  });
});

// get single blog
const getSingleBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.getSingleBlogFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog retrieved successfully",
    data: result,
  });
});

// update blog
const updateBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await BlogService.updateBlogIntoDB(id as string, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog updated successfully",
    data: result,
  });
});

// delete blog
const deleteBlog = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  await BlogService.deleteBlogFromDB(id as string);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Blog deleted successfully",
    data: null,
  });
});

export const BlogController = {
  getAllBlog,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
