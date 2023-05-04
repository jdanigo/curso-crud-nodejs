"use strict";
Object.defineProperty(exports, "__esModule", { value: true });

console.log("Hola mundo desde typescript");

class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
        this.ubicacion = { latitud: 1234, longitud: 456 };
    }
}
