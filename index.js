// Defnición de variables tipo inferido
var nombre = "Cristian David";
var edad = 31;
var vivo = true;
// También se infieren en los parametros y el valor de retorno
var miFuncion = function (param) {
    if (param === void 0) { param = "texto"; }
    return param.length;
};
var res = miFuncion("12");
// Definición de variables tipo explicito
var apellido = "Home";
var iq = 100;
var malvado = true;
// Tipo void
var sentidoDeLaVida = function () {
    console.log("42");
};
// Tipos Undefined y Null
var anUndefinedVariable = undefined;
var aNullVariable = null;
// Tipo any, cualquier valor
var cualquiera;
cualquiera = 4;
cualquiera = "Prueba";
cualquiera = true;
// Array de strings (todos los elementos deben ser strings)
var lenguajes = [
    "PHP",
    "C#",
    "C++",
    "Python",
    "Java",
    "JavaScript",
    "TypeScript",
    "Rust",
    "Dart",
];
// Tuplas ( un array con un número fijo de elementos de distinto tipo )
var miTupla;
miTupla = ["Prueba", 20, true];
// Enum asigna automáticamente numeros
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 0] = "Small";
    Sizes[Sizes["Medium"] = 1] = "Medium";
    Sizes[Sizes["Large"] = 2] = "Large";
})(Sizes || (Sizes = {}));
Sizes.Small; // => 0
Sizes.Medium; // => 1
Sizes.Large; // => 2
// Enum estableciendo el primer valor
var Places;
(function (Places) {
    Places[Places["First"] = 1] = "First";
    Places[Places["Second"] = 2] = "Second";
    Places[Places["Third"] = 3] = "Third";
})(Places || (Places = {}));
Places.First; // => 1
Places.Second; // => 2
Places.Third; // => 3
// Enum con valores tipo string
var ThemeColors;
(function (ThemeColors) {
    ThemeColors["Primary"] = "primary";
    ThemeColors["Secondary"] = "secondary";
    ThemeColors["Dark"] = "dark";
    ThemeColors["DarkSecondary"] = "darkSecondary";
})(ThemeColors || (ThemeColors = {}));
var perro;
perro = {
    tipo: "mamífero",
    peso: 10
};
var carro;
carro = {
    llantas: 4,
    color: "rojo"
};
// Imprimir valores
console.log("Nombre: " + nombre);
console.log("Apellido: " + apellido);
console.log("Edad: " + edad);
console.log("Vivo: " + vivo);
console.log("Iq: " + iq);
console.log("Malvado: " + malvado);
// Enums
console.log(Sizes);
console.log(Places);
console.log(ThemeColors);
// Interfaces
console.log(perro);
// Type alias
console.log(carro);
