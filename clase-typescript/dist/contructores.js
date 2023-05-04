"use strict";
class Contenedor {
    constructor(...items) {
        this.items = items;
    }
    agregar(item) {
        this.items.push(item);
    }
}
const numeros = new Contenedor(1, 2, 3);
numeros.agregar(4);
const textos = new Contenedor("Daniel", "Oscar");
textos.agregar("Felipe");
