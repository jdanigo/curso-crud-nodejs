import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
// import * as Sentry from '@sentry/node'

const createMethod = async (req: Request, res: Response) => {
    try {
         const result = await prisma.address.create({data: req.body})
         return res.status(200).json(result)
    } catch (error) {
        // //return res.status(500).json(error);
        return res.status(500).json(error);
    }
}

const updateMethod = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.address.update({where: {id: id},data: req.body});
        return res.status(200).json(result)
    } catch (error) {
        //return res.status(500).json(error);
return res.status(500).json(error);
    }
}

const getMethod = async (req: Request, res: Response) => {
    
    try {
        const result = await prisma.address.findMany();
        return res.status(200).json(result)
    } catch (error) {
        //return res.status(500).json(error);
return res.status(500).json(error);
    }
    
}

const getByIdMethod = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.address.findUnique({where: {id: id}})
        return res.status(200).json(result)
    } catch (error) {
        //return res.status(500).json(error);
return res.status(500).json(error);
    }
}

const deleteMethod = async (req: Request, res: Response) => {
    const {id} = req.params;
    try {
        const result = await prisma.address.delete({where: {id: id}})
        return res.status(200).json(result)
        
    } catch (error) {
        //return res.status(500).json(error);
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