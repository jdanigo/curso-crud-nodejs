import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createMethod = async (req: Request, res: Response) => {
    try {
         const result = await prisma.tables.create({data: req.body})
         return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const updateMethod = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.tables.update({where: {id: id},data: req.body});
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const getMethod = async (req: Request, res: Response) => {
    
    try {
        const result = await prisma.tables.findMany();
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error);
    }
    
}

const getByIdMethod = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.tables.findUnique({where: {id: id}})
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json(error);
    }
}

const deleteMethod = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.tables.delete({where: {id: id}})
        return res.status(200).json(result)
        
    } catch (error) {
        return res.status(500).json(error);
    }
}

export {
    createMethod,
    updateMethod,
    getMethod,
    getByIdMethod,
    deleteMethod
}