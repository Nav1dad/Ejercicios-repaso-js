// Objetos literales y optional chaining operator

const frutas = ["pera","manzana","sandia"];
console.log(frutas[0]);

// Obejtos literales, no indexados

const animal = {
    color: "Cafe",
    nombre: "Michi",
    maullido: true
}

// concatenar con consola

console.log("Este gatito es de color: " + animal.color);
console.log("Y su nombre es: " + animal.nombre)
console.log(animal["maullido"]);


// Ejemplo de objetos anidados

console.log("")

const enimal = {
    color: "Cafe",
    nombre: "Michi",
    maullido: true,
    favoritos:{
        dia: {
            ok: true,
        },
        nomre: {
            ok: false
        }
    }
}

console.log(enimal.favoritos?.dia.ok);

console.log("")


//Guardar el valor de la propiedad color en una constante

const color = animal.color;
const nombre = animal.nombre;

console.log("color: " + color + "\nanimal: " + nombre)