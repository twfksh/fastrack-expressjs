import { Router } from "express";
import { createAgent, deleteAgent, getAgentById, getAllAgents, updateAgent } from "../controllers/agent.controller";


const router = Router();

router.post("/", createAgent);
router.patch("/:id", updateAgent);
router.get("/:id", getAgentById);
router.get("/", getAllAgents);
router.delete("/:id", deleteAgent);

export default router;
