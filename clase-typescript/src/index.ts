import { Ubicacion } from "./types";

console.log("Hola mundo desde typescript");

class Persona {

    nombre: string;
    edad: number;
    apellidos : string | undefined;
    ubicacion: Ubicacion;

    constructor(nombre: string, edad:number){
        this.nombre = nombre;
        this.edad = edad;
        this.ubicacion = {latitud : 1234, longitud: 456};
    }

}