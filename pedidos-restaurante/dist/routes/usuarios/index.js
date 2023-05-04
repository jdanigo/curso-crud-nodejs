"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Import controllers
const usuarios_1 = require("../../controllers/usuarios");
const router = express_1.default.Router();
// /api/usuarios
router.get("/", usuarios_1.getAllUsers); // get all users
router.get("/:idUsuario", usuarios_1.getAllUsersById); // get user by id
router.post("/", usuarios_1.createNewUsers); // create new users
router.put("/:id", usuarios_1.updateUsers); // update specific user
router.delete("/:id", usuarios_1.deleteUsers); //delete specific user
exports.default = router;
