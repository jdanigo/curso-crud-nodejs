import express, { Response, Request, NextFunction } from 'express';
import mongoose from 'mongoose';
import router from './routes'

//Conectarnos con la base de datos

let connString: string = process.env.DATABASE_URL ?? "";
mongoose.connect(connString)
.then(()=>console.log("se ha contectado a la base de datos"))
.catch(()=> console.log("no se pudo contectar a la base de datos"))

//Crear una instancia de express
const app = express();

//Agregar un middleware para manejar los JSON
app.use(express.json());

app.use("/api",router);

app.listen(3000, ()=> {
    console.log("servidor de node iniciado en el puerto 3000");
})

//ES6 -> import y export
//ES5 -> require y module.export