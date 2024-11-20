console.log("Inicio")
// Nombre
var nombre = "Maria";
// Variables
var num1 = 10;
var num2 = 5;
// Inicializar la variable result
var result;
// Suma de dos variables
result = num1 + num2;

console.log(result);

//Fin del programa
console.log("FIN");

console.log("-------");

var interes = 2; //es un 2%
var cash = 1000;
ganancia = cash * interes / 100;

console.log(ganancia);

console.log("-------");

//Datos que conocemos
var interes = 0.02; //es un 2%
var cash = 1000;

// Inicializar variables
var ganancia = 0;
var ahorro = 0

// Operaciones
ganancia = cash * interes;
ahorro = cash + ganancia;

//Salida del resultado
console.log("Lucas ha ganado: " + ganancia + "€");
console.log("Lucas tiene: " + ahorro + "€")

console.log("-------");
// El tren de Vitoria
// 100km y tarda 1h y 15 min, a que velociadad va? y en km/m?

var distancia = 100; //km
var tiempo = 1.25; //horas. porque 15 minutos es igual a 0.25 horas

velocidad = distancia / tiempo;

//poner solo 2 decimales

console.log("El tren va a: " + velocidad + "km/h")

console.log(velocidad.toFixed(2))

console.log("-------");
// Suma, resta, multiplicacion, division y modulo de dos numeros

var num1 = 18
var num2 = 10

var suma = num1 + num2
var resta = num1 - num2
var multiplicacion = num1 * num2
var division = num1 / num2
var resto = num1 % num2

console.log("La suma de " + num1 + " y " + num2 + " es " + suma)
console.log("La resta de " + num1 + " y " + num2 + " es " + resta)
console.log("La multiplicacion de " + num1 + " y " + num2 + " es " + multiplicacion)
console.log("La division de " + num1 + " y " + num2 + " es " + division)
console.log("El resto de la división entre " + num1 + " y " + num2 + " es " + resto)

console.log("-------");
var suma, resta, mul, div, mod;
suma = num1 + num2;
console.log("La suma de los números es: " + suma);

console.log("La resta de los números es: " , (num1 - num2))

console.log("-------");
var radio = 5
const PI = 3.14
perimetro = 2 * PI * radio
area = PI * (radio * radio)

console.log("El perímetro es: " + perimetro)
console.log("El área es: " + area)
console.log(perimetro.toFixed(2))