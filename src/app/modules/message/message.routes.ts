import { Router } from "express";
import { MessageController } from "./message.controller";

const router = Router();

// Define routes
router.get("/", MessageController.getAllMessage);

router.post("/", MessageController.createMessage);

router.patch("/:id/mark", MessageController.markAsReadMessage);

router.delete("/:id", MessageController.deleteMessage);

export const MessageRoutes = router;
