import { AppError } from "../../errors/AppError";
import { TBlog } from "./blog.interface";
import BlogModel from "./blog.model";
import httpStatus from "http-status";

// get all blogs
const getAllBlogFromDB = async () => {
  const result = await BlogModel.find({});
  return result;
};

// create blog
const createBlogIntoDB = async (payload: Partial<TBlog>) => {
  const result = await BlogModel.create(payload);
  return result;
};

// get single blog
const getSingleBlogFromDB = async (id: string) => {
  const result = await BlogModel.findById(id);
  return result;
};

// update blog
const updateBlogIntoDB = async (id: string, payload: Partial<TBlog>) => {
  // check if blog exists
  const isExist = await BlogModel.findById(id);

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found!");
  }

  const result = await BlogModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  return result;
};

// delete blog
const deleteBlogFromDB = async (id: string) => {
  // check if blog exists
  const isExist = await BlogModel.findById(id);

  if (!isExist) {
    throw new AppError(httpStatus.NOT_FOUND, "Blog not found!");
  }

  const result = await BlogModel.findByIdAndDelete(id);
  return result;
};

export const BlogService = {
  getAllBlogFromDB,
  createBlogIntoDB,
  getSingleBlogFromDB,
  updateBlogIntoDB,
  deleteBlogFromDB,
};
