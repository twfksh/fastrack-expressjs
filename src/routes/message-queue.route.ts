import { Router } from "express";
import {
    createMessage,
    updateMessage,
    getMessageById,
    getAllMessages,
    deleteMessage
} from "../controllers/message-queue.controller";

const router = Router();

router.post("/", createMessage);
router.put("/:id", updateMessage);
router.get("/:id", getMessageById);
router.get("/", getAllMessages);
router.delete("/:id", deleteMessage);

export default router;
