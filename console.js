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

console.log("La resta de los números es: ", (num1 - num2))

console.log("-------");
var radio = 5
const PI = 3.14
perimetro = 2 * PI * radio
area = PI * (radio * radio)

console.log("El perímetro es: " + perimetro)
console.log("El área es: " + area)
console.log(perimetro.toFixed(2))

console.log("-------");
var edad = 5
if (edad > 17) {
    console.log("MAYOR")
}
if (edad < 18) {
    console.log("MENOR")
}

console.log("-------");

var perro = 0
var gato = 1
if (perro || gato) {
    console.log("tengo mascota")
}

console.log("-------");

var edad = 19
var mide = 160
if (edad > 18 && mide > 150) {
    console.log("entras")
}

console.log("-------");
// Funcion perimetro del circulo
function perimetro_circulo(radio) {
    var perimetro = 0
    const PI = 3.14
    perimetro = 2 * PI * radio
    return perimetro;
}

var prueba = perimetro_circulo(2)
console.log(prueba)

var prueba2 = perimetro_circulo(5)
console.log(prueba)


// Funcion para que me escriba "hola"
function hola() {
    console.log("HOLA")
}
hola()

// Función que calcula si una persona es mayor de edad
function mayor_edad(edad) {
    if (edad >= 18) {
        return true
    }
}

mayor_edad(20)

var age, nombre
var mayor = false
age = 26
nombre = "Pepe"
mayor = mayor_edad(age)
if (mayor) {
    console.log(`${nombre} ${mayor}`)
}

// Sección según la medida (variable anidada)

var estatura = 98 // En cm
if (estatura <= 98) {
    console.log("Seccion baby")
}
else if (estatura < 150) {
    console.log("Seccion infantil")
}

else if (estatura < 170) {
    console.log("Seccion adolescente")
}

else {
    console.log("No hay ropa disponible")
}

// *Diapositiva

var temperatura = 18
var compania = false
function ocio_anidado(temperatura, compania) {

    if (temperatura > 20) {
        console.log("Vestir ropa deportiva")
    }
    else {
        console.log("Vestir informalmente")

        if (compania) {
            console.log("Usar el carro")
        }
        else {
            console.log("Usar transporte público")
        }
    }
}
ocio_anidado(20, false)

//* De otro algoritmo

var temperatura = 18
var compania = true
if ((temperatura > 20) && (compania)) {
    console.log("Vestir ropa deportiva y usar el carro")
}
if ((temperatura > 20) && (compania == false)) {
    console.log("Vestir ropa deportiva y usar transporte publico")
}
if ((temperatura < 20) && (compania)) {
    console.log("Vestir ropa informal y usar el carro")
}
if ((temperatura > 20) && (compania == false)) {
    console.log("Vestir informalmente y usar transporte público")
}

// Quiero hacer una actividad y tengo que decidir donde y como voy vestida
// IF anidado

function ocio_independiente(temperatura, compania) {
    if (temperatura > 20) {
        console.log("Vestir ropa deportiva y voy al parque")
    }
    else {
        console.log("Visto informal y voy al cine")
    }
    if (compania) {
        console.log("Voy en coche")
    }
    else {
        console.log("Voy en bus")
    }
}
ocio_independiente(12, false)

console.log("--------------");
function calificacion(nota) {

    if (nota < 5) {
        console.log("Suspendido");
    }
    else if (nota < 6) {
        console.log("Suficiente");
    }
    else if (nota < 7) {
        console.log("Bien");
    }
    else if (nota < 9) {
        console.log("Notable");
    }
    else if (nota <= 10) {
        console.log('Sobresaliente');
        if (nota == 10) {
            console.log('Matrícula de Honor');
        }
    }
    else {
        console.log("La nota no es correcta")
    }
}
calificacion(10);

// Rebajas
// Tengo distintos valores de rebajas (50, 30, 20, 10) y quiero saber
// Cual es el precio de un producto y la rebaja que tiene

console.log("--------------");

var precio = 100; // Valor del producto
var oferta = 50; // Descuento del producto
var descuento = 0;
var precio_final = 0;

if (descuento == 50) {
    descuento = precio * oferta / 100;
    precio_final = precio - descuento;
    console.log("El precio del producto es:", precio_final);
    console.log("Etiqueta roja");
}
if (descuento == 30) {
    descuento = precio * oferta / 100;
    precio_final = precio - descuento;
    console.log("El precio del producto es:", precio_final);
    console.log("Etiqueta naranja");
}
if (descuento == 20) {
    descuento = precio * oferta / 100;
    precio_final = precio - descuento;
    console.log("El precio del producto es:", precio_final);
    console.log("Etiqueta amarilla");
}
if (descuento == 10) {
    descuento = precio * oferta / 100;
    precio_final = precio - descuento;
    console.log("El precio del producto es:", precio_final);
    console.log("Etiqueta verde");
}
else {
    console.log("El descuento no es válido");
}

// se podría usar el switch. Aquí va algo incompleto:
switch (oferta) {
    case 50:
        descuento = precio * oferta / 100;
        precio_final = precio - descuento;
        console.log("El precio del producto es:", precio_final);
        console.log("Etiqueta roja");
}
console.log("--------------");
function descuento(precio, desc) {
    console.log("Etiqueta Roja " + (precio - (precio * desc / 100)))
}
console.log("--------------");

var i = 1;

while (i <= 10) {
    var valor = 3 * i; // también puedo poner let en vez de var. Sólo afectará a lo que está entre corchetes
    i = i + 1;  // como hemos puesto que i=1, tengo que poner este cálculo detrás del primer cálculo
    // si no me empezaría por el dos

    console.log(valor);
}

console.log("--------------");
// para que cuente hasta 5
var i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

console.log("--------------");
//para que me de números pares
var i = 1
while (i <= 15) {
    if (i % 2 == 0) {
        console.log(i);
    }
    i++;
}

console.log("--------------");
//quiero los múltiplos 3
var i = 1;
while (i <= 20) {
    if (i % 3 == 0) {
        console.log(i)
    }
    i++
}

console.log("--------------");
//quiero los múltiplos 3 y 2
var i = 1;
while (i <= 20) {
    if (i % 3 == 0 && i % 2 == 0) {
        console.log(i)
    }
    i++
}

console.log("--------------");
//quiero los múltiplos 3 o 2
var i = 1;
while (i <= 20) {
    if ((i % 3 == 0) || (i % 2 == 0 && i)) {
        console.log(i)
    }
    i++
}

console.log("--------------");
//quiero los múltiplos 3 o (2 y 5)
var i = 1;
while (i <= 20) {
    if ((i % 3 == 0) || (i % 2 == 0 && i % 5 == 0)) {
        console.log(i)
    }
    i++
}

console.log("--------------");
//quiero los múltiplos (3 o 2) y 5
var i = 1;
while (i <= 20) {
    if ((i % 3 == 0 || i % 2 == 0) && (i % 5 == 0)) {
        console.log(i)
    }
    i++
}
console.log("--------------");
//suma de todos los número mútliplos de 3 del 1 al 20
var i = 1;
var suma = 0;
while (i <= 20) {
    if (i % 3 == 0) {
        suma = suma + i;   // también se podría poner suma += i
    }
    i++
}
console.log(suma)

console.log("--------------");
//sumar los número del 1 al 10
var i = 1;
var suma = 0;
while (i <= 10) {
    suma = suma + i;   // también se podría poner suma += i
    i++
}
console.log(suma)

console.log("--------------");
//Saber si un número es primo
var num = 12;   //valor de prueba para comprobar si funciona
var primo = true;
while (i < num) {
    if (num % i == 0) {
        primo = false
    }
    i++
}
console.log(`Es primo ${num} ? ${primo}`)


console.log("--------------");

// inicialización de la variable; la condición; el incremento
for (let day = 0; day < 4; day = day + 1){
    console.log('streaming')
}
console.log("--------------");
//personasEnBici = personasEnBici + 1
/* asldfjlasdkjfñlsadjf
sdflkjalskdf jhgkuygkugy
así se ponen comentarios largos*/

console.log("--------------");
400

console.log("--------------");
//suma de los números del 1 al 10 con for

var suma = 0;
for (i = 1; i <= 10; i++) {
    suma += i
}
console.log(suma)

//escribir del 1 al 20 los múltiplos de 3



console.log("--------------");
//quiero los múltiplos 3

for (i = 1; i<=20; i++) {
    if (i % 3 == 0)
        console.log(i)
}

console.log("--------------");
//Todos los números pares del 1 al 15

for (i = 1; i<=15; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("--------------");
//Números pares del 10 al 30

for (i = 10; i<=30; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
console.log("--------------");
// Saber si un número es primo con for
var num = 4;   //valor de prueba para comprobar si funciona
var i = 2    // se le da nuevo valor a i porque ya la hemos utilizado antes y tendrá el que se le ha dado
var primo = true;
while (i < num) {
    if (num % i == 0) {
        primo = false;
        break;
    }
    i++
}
console.log(`Es primo ${num} ? ${primo}`)


console.log("--------------");
var primo = true;
for (i = 2; i < num; i++) {
    if (num % i == 0) {
        primo = false;
        break;
    }
}
console.log(`Es primo ${num} ? ${primo}`)

console.log("--------------");
// Función Primo
function es_primo(num){
    let primo = true;
    if (num == 1) {       // en caso de que el número sea 1
        return primo;
    }
    for (i = 2; i < num; i++) {
        if (num % i == 0) {
            primo = false;
            return primo; // se pone return en vez de break
        }
    }
    return primo;
}

console.log(es_primo(21));  //Para comprobar si 21 es primo