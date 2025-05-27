import { Router } from "express";
import { UserRoutes } from "./user/user.routes";
import { AuthRoutes } from "./auth/auth.routes";
import { ProjectRoutes } from "./project/project.routes";
import { BlogRoutes } from "./blog/blog.routes";
import { MessageRoutes } from "./message/message.routes";
import auth from "../middlewares/auth";
import { SkillRoutes } from "./skill/skill.routes";
import { AboutRoutes } from "./about/about.routes";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/users", auth(), UserRoutes);
router.use("/projects", auth(), ProjectRoutes);
router.use("/blogs", auth(), BlogRoutes);
router.use("/messages", auth(), MessageRoutes);
router.use("/skills", auth(), SkillRoutes);
router.use("/about", auth(), AboutRoutes);

export const AdminRoutes = router;
