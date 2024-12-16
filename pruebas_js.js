// function prepareGifts(gifts){
//     //ordenar los elementos del array
//     const aux = gifts.sort(function(a, b){
//     return b - a;
// });
// const dataArr = new Set(aux);
// let result = [...dataArr]
// return a - b;
// }
// const gifts = [1,2,3,4,5,8,6,7];
// const gifts1 = prepareGifts(gifts);


function createFrame(names) {
    const names = ["midu", "madeval", "educalvolpz"];
    return `*${names}*`;
}



// declaramos el array llamándolo Nombres
const nombres = ["midu", "madeval", "educalvolpz"];

// Crear una cadena con cada elemento en una línea, enmarcado con asteriscos
const marco = nombres.map(item => `* ${item} *`).join('\n');

// *array.map(item => \ ${item} *`)`**:
//      El método map() se utiliza para transformar cada elemento del array.
//      item => \ ${item} `**: Es una función de flecha que toma cada **item` (un valor del array) y lo convierte en una cadena con asteriscos a su alrededor.
//          Por ejemplo, si item es 1, el resultado sería * 1 *.
//      El resultado de map() es un nuevo array donde cada valor está enmarcado entre asteriscos.
//          En este caso, el array resultante sería: ['* 1 *', '* 2 *', '* 3 *', '* 4 *', '* 5 *'].

// .join('\n'):
//      Después de que se han creado las cadenas con los asteriscos, el método join('\n') las une en una sola cadena.
//      El argumento \n es un salto de línea (newline), lo que significa que los elementos del array resultante serán separados por saltos de línea en lugar de comas.

// Enmarcar la salida completa con una línea de asteriscos alrededor
const resultado = `*************
${marco}
*************`;

console.log(resultado);

function prepareGifts(gifts) {
    const aux = gifts.sort(function(a,b)) {
        return a - b 
    }
}