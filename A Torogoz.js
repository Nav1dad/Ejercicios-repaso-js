const animal = {
    color: "Azul",
    nombre: "Torogoz",
    volando: true
}

// Destructuring objetos literales
const{color, nombre, volando} = animal
console.log("EL "  + nombre + " es de color " + color);

// Arrays indexados
const frutas = ["pera","manzana","sandia"];

// Destructurin array
const [pera, manzana, sandia] = frutas;
console.log("A mi me gusta mucho la " + manzana);