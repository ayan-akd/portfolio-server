import { Router } from "express";
import { BlogController } from "./blog.controller";

const router = Router();

// Define routes
router.get("/", BlogController.getAllBlog);

router.post("/", BlogController.createBlog);

router.get("/:id", BlogController.getSingleBlog);

router.patch("/:id", BlogController.updateBlog);

router.delete("/:id", BlogController.deleteBlog);

export const BlogRoutes = router;
