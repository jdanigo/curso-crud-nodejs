"use strict";
var Direccion;
(function (Direccion) {
    Direccion[Direccion["Arriba"] = 0] = "Arriba";
    Direccion[Direccion["Abajo"] = 1] = "Abajo";
    Direccion[Direccion["Izquierda"] = 2] = "Izquierda";
    Direccion[Direccion["Derecha"] = 3] = "Derecha";
})(Direccion || (Direccion = {}));
var TiposDocumento;
(function (TiposDocumento) {
    TiposDocumento[TiposDocumento["Cedula"] = 0] = "Cedula";
    TiposDocumento[TiposDocumento["TarjetaIdentidad"] = 1] = "TarjetaIdentidad";
    TiposDocumento[TiposDocumento["Pasaporte"] = 2] = "Pasaporte";
})(TiposDocumento || (TiposDocumento = {}));
