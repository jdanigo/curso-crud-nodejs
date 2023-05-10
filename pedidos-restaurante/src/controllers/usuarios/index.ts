import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    
    console.log("mostrando req.userId", req.userId);

    try {
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
    
}

const getAllUsersById = async (req: Request, res: Response): Promise<void> => {
    const { idUsuario } = req.params;

    // req.params -> lo que viene por la url de la peticion
    // req.headers -> lo que viene por las cabeceras de la peticion
    // req.body  -> lo que viene en el cuerpo de la peticion
    
    
    try {
        const allUsers = await prisma.user.findUnique({
            where : { id: idUsuario}
        });
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
    
}

const createNewUsers = async (req: Request, res: Response): Promise<void> => {
 
    try {
        //Listar usuarios de la base de datos
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
    
}

const updateUsers = async (req: Request, res: Response): Promise<void> => {
 
    try {
        //Listar usuarios de la base de datos
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
    
}

const deleteUsers = async (req: Request, res: Response): Promise<void> => {
 
    try {
        //Listar usuarios de la base de datos
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    } catch (error) {
        res.status(500).json(error);
    }
    
}

export {
    getAllUsers,
    getAllUsersById,
    createNewUsers,
    updateUsers,
    deleteUsers
}