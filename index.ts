// Defnición de variables tipo inferido
let nombre = "Cristian David";
let edad = 31;
let vivo = true;

// También se infieren en los parametros y el valor de retorno
const miFuncion = (param = "texto") => {
  return param.length;
};

let res: number = miFuncion("12");

// Definición de variables tipo explicito
let apellido: string = "Home";
let iq: number = 100;
let malvado: boolean = true;

// Tipo void
const sentidoDeLaVida = (): void => {
  console.log("42");
};

// Tipos Undefined y Null
let anUndefinedVariable: undefined = undefined;
let aNullVariable: null = null;

// Tipo any, cualquier valor
let cualquiera: any;
cualquiera = 4;
cualquiera = "Prueba";
cualquiera = true;

// Array de strings (todos los elementos deben ser strings)
let lenguajes: string[] = [
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
let miTupla: [string, number, boolean];
miTupla = ["Prueba", 20, true];

// Enum asigna automáticamente numeros
enum Sizes {
  Small,
  Medium,
  Large,
}

Sizes.Small; // => 0
Sizes.Medium; // => 1
Sizes.Large; // => 2

// Enum estableciendo el primer valor
enum Places {
  First = 1,
  Second,
  Third,
}

Places.First; // => 1
Places.Second; // => 2
Places.Third; // => 3

// Enum con valores tipo string
enum ThemeColors {
  Primary = "primary",
  Secondary = "secondary",
  Dark = "dark",
  DarkSecondary = "darkSecondary",
}

// Interfaces
interface Animal {
  tipo: string;
  peso: number;
}

let perro: Animal;

perro = {
  tipo: "mamífero",
  peso: 10,
};

// Type Alias
type Vehiculo = {
  llantas: number;
  color: string;
};

let carro: Vehiculo;

carro = {
  llantas: 4,
  color: "rojo",
};

// Imprimir valores
console.log(`Nombre: ${nombre}`);
console.log(`Apellido: ${apellido}`);
console.log(`Edad: ${edad}`);
console.log(`Vivo: ${vivo}`);
console.log(`Iq: ${iq}`);
console.log(`Malvado: ${malvado}`);

// Enums
console.log(Sizes);
console.log(Places);
console.log(ThemeColors);

// Interfaces
console.log(perro);

// Type alias
console.log(carro);
