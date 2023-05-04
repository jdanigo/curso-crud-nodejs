interface Animal {
    nombre: string;
    raza: string;
    apodo?: string;
}

interface GenericResponse {
    data: string | object | Array<any>;
    statusCode: number;
}

export {
    Animal,
    GenericResponse
}