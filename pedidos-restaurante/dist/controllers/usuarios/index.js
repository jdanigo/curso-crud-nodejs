"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsers = exports.updateUsers = exports.createNewUsers = exports.getAllUsersById = exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getAllUsers = async (req, res) => {
    try {
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getAllUsers = getAllUsers;
const getAllUsersById = async (req, res) => {
    const { idUsuario } = req.params;
    // req.params -> lo que viene por la url de la peticion
    // req.headers -> lo que viene por las cabeceras de la peticion
    // req.body  -> lo que viene en el cuerpo de la peticion
    try {
        const allUsers = await prisma.user.findUnique({
            where: { id: idUsuario }
        });
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.getAllUsersById = getAllUsersById;
const createNewUsers = async (req, res) => {
    try {
        //Listar usuarios de la base de datos
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.createNewUsers = createNewUsers;
const updateUsers = async (req, res) => {
    try {
        //Listar usuarios de la base de datos
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.updateUsers = updateUsers;
const deleteUsers = async (req, res) => {
    try {
        //Listar usuarios de la base de datos
        const allUsers = await prisma.user.findMany();
        console.log("mostrando usuarios creados", allUsers);
        res.json(allUsers);
    }
    catch (error) {
        res.status(500).json(error);
    }
};
exports.deleteUsers = deleteUsers;
