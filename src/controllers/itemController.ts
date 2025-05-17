import { Request, Response, NextFunction } from "express";
import { items, Item } from "../models/item";

// create an item
export const createItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name } = req.body;
        const newItem: Item = { id: Date.now(), name };
        items.push(newItem);
        res.status(201).json(newItem);
    } catch (error) {
        next(error);
    }
};

// get all items
export const getItems = (req: Request, res: Response, next: NextFunction) => {
    try {
        res.json(items);
    } catch (error) {
        next(error);
    }
};

// get item by id
export const getItemById = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const item = items.find((item) => item.id === id);
        if (!item) {
            res.status(404).json({ message: "Item not found" });
            return;
        }
        res.json(item);
    } catch (error) {
        next(error);
    }
};

// update an item
export const updateItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const { name } = req.body;
        const itemIndex = items.findIndex((item) => item.id === id);
        if (itemIndex === -1) {
            res.status(404).json({ message: "Item not found" });
            return;
        }
        items[itemIndex].name = name;
        res.json(items[itemIndex]);
    } catch (error) {
        next(error);
    }
};

// delete an item
export const deleteItem = (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = parseInt(req.params.id, 10);
        const itemIndex = items.findIndex((item) => item.id === id);
        if (itemIndex === -1) {
            res.status(404).json({ message: "Item not found" });
            return;
        }
        const deletedItem = items.splice(itemIndex, 1)[0];
        res.json(deleteItem);
    } catch (error) {
        next(error);
    }
};
