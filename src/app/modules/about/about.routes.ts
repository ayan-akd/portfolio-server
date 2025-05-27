import { Router } from "express";
import { AboutController } from "./about.controller";

const router = Router();

// Define routes
router.get("/", AboutController.getAllAbout);

router.post("/", AboutController.createAbout);

router.get("/:id", AboutController.updateAbout);

export const AboutRoutes = router;
