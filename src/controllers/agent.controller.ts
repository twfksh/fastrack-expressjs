import { Request, Response, NextFunction } from "express";
import AgentService from "../services/agent.service";

const agentService = new AgentService();

export const createAgent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const agent = await agentService.createAgent(req.body);
        res.status(201).json(agent);
    } catch (error) {
        next(error);
    }
};

export const updateAgent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const agent = await agentService.updateAgent({ ...req.body, id });
        res.json(agent);
    } catch (error) {
        next(error);
    }
};

export const getAgentById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const agent = await agentService.getAgentById(id);
        if (!agent) {
            res.status(404).json({ agent: "agent not found" });
            return;
        }
        res.json(agent);
    } catch (error) {
        next(error);
    }
};

export const getAllAgents = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const agents = await agentService.getAllAgents();
        res.json(agents);
    } catch (error) {
        next(error);
    }
};

export const deleteAgent = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const agent = await agentService.deleteAgent(id);
        res.json(agent);
    } catch (error) {
        next(error);
    }
};
