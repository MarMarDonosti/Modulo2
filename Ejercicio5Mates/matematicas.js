// Áreas y perímetros

/**Haremos una función por cada figura
 * los parámetros que necesito en cada una de ellas
 * son los datos que nos tienen que dar para calcular
 * áreas y perímetros
 */


function circulo (r) {
    const PI = 3.14;
    var perimetro = 0;
    perimetro = 2 * PI * r;
    area = PI * r ** 2;
    return `El perímetro del círculo es igual a ${perimetro} y su area es ${area}`;
}
var circulo_perArea = circulo(2); //lo que ponga entre paréntesis es el radio que me dan
console.log(circulo_perArea);


function triangulo_equi (a) { // entre paréntesis el lado que me dan
    perimetro = 3 * a;
    var h = ((3 ** 1/2) / 2) * a;
    area = (a * h)/2;
    
    return `El perímetro del triángulo equilátero es igual a ${perimetro} y su area es ${area}`;
}
var triangulo_perArea = triangulo_equi(2);
console.log(triangulo_perArea);


function cuadrado (l) {
    perimetro = 4 * l;
    area = l**2;

    return `El perímetro del cuadrado es igual a ${perimetro} y su area es ${area}`;
}
var cuadrado_perArea = cuadrado (2);
console.log(cuadrado_perArea);

function cuadrado_rectangulo (x, y) {
    perimetro = 2*x + 2*y;
    area = x * y;

    return `El perímetro del cuadrado rectángulo es igual a ${perimetro} y su area es ${area}`;
}
var rectangulo = cuadrado_rectangulo (2, 4);
console.log(rectangulo);