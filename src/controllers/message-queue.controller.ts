import { Request, Response, NextFunction } from "express";
import MessageQueueService from "../services/message-queue.service";

const messageQueueService = new MessageQueueService();

export const createMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const message = await messageQueueService.createMessage(req.body);
        res.status(201).json(message);
    } catch (error) {
        next(error);
    }
};

export const updateMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const message = await messageQueueService.updateMessage({ ...req.body, id });
        res.json(message);
    } catch (error) {
        next(error);
    }
};

export const getMessageById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const message = await messageQueueService.getMessageById(id);
        if (!message) {
            res.status(404).json({ message: "Message not found" });
            return;
        }
        res.json(message);
    } catch (error) {
        next(error);
    }
};

export const getAllMessages = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const messages = await messageQueueService.getAllMessages();
        res.json(messages);
    } catch (error) {
        next(error);
    }
};

export const deleteMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const message = await messageQueueService.deleteMessage(id);
        res.json(message);
    } catch (error) {
        next(error);
    }
};
