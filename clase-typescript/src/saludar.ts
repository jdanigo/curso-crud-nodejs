import { GenericResponse } from "./interfaces";
import { Persona } from "./types";

function saludar(datoPersona : Persona): void {
    console.log("Buenos días", datoPersona.nombres, datoPersona.apellidos, "usted tiene ", datoPersona.edad)
}

function saludando(datoPersona : Persona): Array<string | number | GenericResponse>  {
    console.log("Buenos días", datoPersona.nombres, datoPersona.apellidos, "usted tiene ", datoPersona.edad)
    return [
        {
            data: "hola mundo",
            statusCode: 200
        }   
    ]
}

function saludando2(datoPersona : Persona): string | number | Array<GenericResponse>  {
    console.log("Buenos días", datoPersona.nombres, datoPersona.apellidos, "usted tiene ", datoPersona.edad)
    return [
        {
            data: "hola mundo",
            statusCode: 200
        }   
    ]
}

//Funcion que permite tipos de datos genericos
function imprimirEnConsola<T>(dato: T): void {
    console.log(dato)
}

let nombre : string = "Daniel";


imprimirEnConsola<number>(654);
imprimirEnConsola<string>("Daniel Garces");
imprimirEnConsola<object>({nombres: "Daniel"});
imprimirEnConsola<boolean>(false);
imprimirEnConsola<TiposDocumento>(TiposDocumento.Cedula);
imprimirEnConsola<Array<number>>([1, 2, 3]);
imprimirEnConsola<Array<string>>(["daniel", "paola"]);
imprimirEnConsola<Array<object>>([{nombres: "Daniel"}]);
imprimirEnConsola<Array<boolean>>([false, true, false, true]);

//Metodo 1
const p:Persona = {nombres: "Daniel", apellidos: "Garces", edad:50};
saludar(p);

//Metodo 2
saludar({nombres: "Daniel", apellidos: "Garces", edad: 67});


const resultado = saludando({nombres: "Daniel", apellidos: "Garces", edad: 67})