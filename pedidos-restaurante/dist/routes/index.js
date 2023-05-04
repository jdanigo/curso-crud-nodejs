"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarios_1 = __importDefault(require("./usuarios"));
const router = express_1.default.Router();
// /api
router.use("/usuarios", usuarios_1.default); //api/usuarios
// router.use("/productos"); //api/productos
// router.use("/categorias"); //api/categorias
// router.use("/pedidos"); //api/pedidos
exports.default = router;
