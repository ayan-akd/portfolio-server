import { Router } from "express";
import { ProjectController } from "./project.controller";

const router = Router();

// Define routes
router.get("/", ProjectController.getAllProject);

router.get("/:id", ProjectController.getSingleProject);

router.post("/", ProjectController.createProject);

router.patch("/:id", ProjectController.updateProject);

router.patch("/:id/feature", ProjectController.toggleFeaturedProject);

router.delete("/:id", ProjectController.deleteProject);

export const ProjectRoutes = router;
