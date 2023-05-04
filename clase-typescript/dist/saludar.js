"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function saludar(datoPersona) {
    console.log("Buenos días", datoPersona.nombres, datoPersona.apellidos, "usted tiene ", datoPersona.edad);
}
function saludando(datoPersona) {
    console.log("Buenos días", datoPersona.nombres, datoPersona.apellidos, "usted tiene ", datoPersona.edad);
    return [
        {
            data: "hola mundo",
            statusCode: 200
        }
    ];
}
function saludando2(datoPersona) {
    console.log("Buenos días", datoPersona.nombres, datoPersona.apellidos, "usted tiene ", datoPersona.edad);
    return [
        {
            data: "hola mundo",
            statusCode: 200
        }
    ];
}
//Funcion que permite tipos de datos genericos
function imprimirEnConsola(dato) {
    console.log(dato);
}
let nombre = "Daniel";
imprimirEnConsola(654);
imprimirEnConsola("Daniel Garces");
imprimirEnConsola({ nombres: "Daniel" });
imprimirEnConsola(false);
imprimirEnConsola(TiposDocumento.Cedula);
imprimirEnConsola([1, 2, 3]);
imprimirEnConsola(["daniel", "paola"]);
imprimirEnConsola([{ nombres: "Daniel" }]);
imprimirEnConsola([false, true, false, true]);
//Metodo 1
const p = { nombres: "Daniel", apellidos: "Garces", edad: 50 };
saludar(p);
//Metodo 2
saludar({ nombres: "Daniel", apellidos: "Garces", edad: 67 });
const resultado = saludando({ nombres: "Daniel", apellidos: "Garces", edad: 67 });
