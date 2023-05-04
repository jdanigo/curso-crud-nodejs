"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const routes_1 = __importDefault(require("./routes"));
//Conectarnos con la base de datos
let connString = (_a = process.env.DATABASE_URL) !== null && _a !== void 0 ? _a : "";
mongoose_1.default.connect(connString)
    .then(() => console.log("se ha contectado a la base de datos"))
    .catch(() => console.log("no se pudo contectar a la base de datos"));
//Crear una instancia de express
const app = (0, express_1.default)();
//Agregar un middleware para manejar los JSON
app.use(express_1.default.json());
app.use("/api", routes_1.default);
app.listen(3000, () => {
    console.log("servidor de node iniciado en el puerto 3000");
});
