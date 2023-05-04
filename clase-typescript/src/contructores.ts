class Contenedor<T> {
    items: T[];

    constructor(...items: T[]){
        this.items = items;
    }

    agregar(item: T): void {
        this.items.push(item);
    }
}

const numeros = new Contenedor<number>(1,2,3)
numeros.agregar(4)

const textos = new Contenedor<string>("Daniel", "Oscar")
textos.agregar("Felipe")