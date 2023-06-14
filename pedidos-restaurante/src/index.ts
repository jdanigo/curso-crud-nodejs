import express, { Response, Request, NextFunction } from 'express';
import mongoose from 'mongoose';
import router from './routes'
import * as Sentry from '@sentry/node';
import Tracing from '@sentry/tracing';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//Conectarnos con la base de datos

let connString: string = process.env.DATABASE_URL ?? "mongodb+srv://jdanigo:tatan3423387lome@cluster0.epdo8.mongodb.net/pedidos-restaurante";
mongoose.connect(connString)
.then(()=>console.log("se ha contectado a la base de datos"))
.catch((e)=> console.log("no se pudo contectar a la base de datos",e))

//Crear una instancia de express
const app = express();

//Configuramos Sentry

Sentry.init({
    dsn: "https://be23b86afff44bb3aee67de32b390700@o4505162706321408.ingest.sentry.io/4505162715168768",
    tracesSampleRate: 1.0
});

//Agregar un middleware para manejar los JSON
app.use(express.json());

app.use(Sentry.Handlers.requestHandler());

app.use("/api",router);

app.use(Sentry.Handlers.errorHandler());

prisma.$on('beforeExit', (error)=>{
    Sentry.captureException(error)
})

export default app;

//ES6 -> import y export
//ES5 -> require y module.export