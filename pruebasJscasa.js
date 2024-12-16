let saludo= "Hola a todos";
console.log(saludo);

saludo += ", amigos!"
console.log(saludo);

let pregunta = "Qué tal?";
console.log(saludo+' '+pregunta);

console.log("--------------");

let discurso = `${saludo}\n${pregunta}\nBienvenidos`;
let charla= saludo + '\n' + pregunta + '\n' + "Bienvenidos";
console.log(discurso);
console.log(charla);

console.log("--------------");

let enmarcado = `**********************\n${discurso}\n**********************`;
console.log(enmarcado);

console.log("--------------");

let asteriscos = "**********************"
let superenmarcado = `${asteriscos}\n*${saludo}*\n*${pregunta}*\n*Bienvenidos*\n${asteriscos}`;
console.log(superenmarcado);

console.log("--------------");

let tabuladoEnmarcado = `${asteriscos}\n*${saludo}*\n*${pregunta}\t\t\t*\n*Bienvenidos\t\t*\n${asteriscos}`;
console.log(tabuladoEnmarcado)

console.log("--------------");

const compra = ["pollo", "patatas", "bizcocho", "turrón"];

function lista () {
    console.log(compra);
}

lista()

compra.push ("harina")
lista ()

// determino que el número de elementos del array compra va a llamarse numProductos
var numProductos = compra.length;
console.log(numProductos);

compra.push ("angulas");
/**Al haber añadido un elemento al array compra, tengo que
 * actualizar numProductos. Le vuelvo a decir que es el número
 * de elementos del array compra. Si no, me dirá el número de
 * elementos que había antes
 */
numProductos = compra.length;
console.log(numProductos);
lista()

// Si quiero que me de los elementos del array en forma de lista
compra.forEach(numProductos =>{
    console.log (numProductos)
})
console.log("quitar cosas del array:")
// Quiero quitar algo de la lista de la compra (del array)

    //Creando otro array sin ese elemento
    var compraCena = compra.filter(cena=>cena!="pollo");
    console.log(compraCena);

    //Sabiendo la posición
    delete(compra[1]);    //delete deja un espacio vacío, es mejor splice()
    console.log(compra);

    // Eliminar "harina" buscando su índice
    let indice = -1; // Inicializar la variable indice
    compra.forEach((elemento, i) => {
        if (elemento === "harina") {
        indice = i;
        }
    });

    if (indice !== -1) {
        compra.splice(indice, 1); // Elimina el elemento en la posición encontrada
    }

    console.log(compra);

// Ordenar los productos por orden alfabético
console.log("orden alfabético")

let ordenar = compra.sort();
console.log(ordenar)

console.log("--------------");

compra.forEach(numProductos =>{
    console.log (numProductos)
})
