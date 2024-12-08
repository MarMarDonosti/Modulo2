// Lucas quiere saber cuanto ganará si pone su dinero en el banco con un interes al mes determinado.
console.log("Interes en el banco")
// Datos que conocemos
var interes = 0.02; //es un 2% es 0.02
var cash = 1000; 
// Inicializar variables
var ganancia = 0;
var ahorro = 0;
// Operaciones
ganancia = cash * interes;
ahorro = cash + ganancia;
// Salida del resultado
console.log("Lucas ha ganado: " + ganancia + " €");
console.log("Lucas tiene " + ahorro + " €");
console.log("-------------------------------------------------------");

// El tren de Vitoria
// distancia 100km y tarda 1h y 15 min, a que velocidad va? y en km/h?
console.log("El tren de Vitoria");
// Datos que conocemos
var distancia = 100;
var tiempo = 75; // En minutos
var velocidad = 0;
// Operaciones
velocidad = distancia / tiempo;
console.log("El tren va a", velocidad ,"Km/min");
// poner solo 2 decimales 
console.log(velocidad.toFixed(2));
console.log("-------------------------------------------------------");

// Suma, resta de dos numeros
num1 = 18
num2 = 10
// Opcion 1
var suma, resta, mul, div, mod;
suma = num1 + num2;
console.log("La suma de los números es: " + suma);

// Opcion 2
console.log("La resta de los números es:", (num1 - num2));
console.log("--------------------------------------------");

// Funcion perimetro del circulo
function perimetro_circulo(radio){
    var perimetro = 0;
    const PI = 3.14;
    perimetro = 2 * PI * radio;
    return perimetro;
}
// Llamada a la funcion perimetro con el valor radio=2
var prueba = perimetro_circulo(2);
console.log("Perimetro de un circulo, usando una funcion")
console.log(prueba);
// Llamada a la funcion perimetro con el valor radio=5
var prueba2 = perimetro_circulo(5);
console.log(prueba2);
console.log("--------------------------------------------");

// Funcion que calcula si una persona es mayor de edad
function mayor_edad(edad){
    if (edad >= 18){
        return true;
    }
}
console.log("Es Mayor de EDAD??");

var age, nombre;
var mayor = false;
age = 26;
nombre = "Pepe";
mayor = mayor_edad(age);
if (mayor){
    console.log(nombre, mayor);
}
console.log("--------------------------------------------");

// seccion a la que tengo que ir para comprar ropa segun la medida
console.log("Seccion de ropa");
var estatura = 201; // En cm
if (estatura <= 98) {
    console.log("Sección baby");
}
else if (estatura < 150){
    console.log("Sección infantil");
}
else if (estatura <= 200){
    console.log("Sección adolescente");
}
else {
    console.log("No hay ropa disponible");
}
console.log("--------------------------------------------");

//Quiero hacer una actividad y tengo que decidir donde y como voy vestida
//IF anidado
// var temperatura = 16;
// var friend = true; // true o false // 1 o 0
console.log("OCIO");
function ocio_anidado(temperatura, friend){
    if (temperatura > 20) {
        //voy al parque y visto informal
        console.log("visto informal y voy al parque");
    }
    else {
        //visto formal y voy al cine
        console.log("Visto formal y voy al cine");
        //Voy a compañada o no?
        if (friend){
            //Voy en coche
            console.log("Voy en coche");
        }
        else{
            //Voy en bus
            console.log("Voy en bus");
        }
    }
}

// If independientes
function ocio_independiente(temperatura, friend){
    if (temperatura > 20){
        // Viste informal y voy al parque
        console.log("Visto informal y voy al parque");
    }
    else {
        // viste formal y voy al cine
        console.log("Visto formal y voy al cine");
    }
    if (friend){
        // Voy en coche
        console.log("Voy en coche");
    }
    else {
        // voy en bus
        console.log("Voy en bus");
    }
}
// Establezco la temperatura y llamo a las funciones de ocio
var temp= 22;
ocio_anidado(temp,false);
ocio_independiente(12, false);
console.log("--------------------------------------------");

//Escribir las notas en texto en función de la nota numérica.
var nota = 9.8; // La nota que quiero transformar en texto
console.log("NOTAS en Texto")
if (nota < 5){
    console.log("Suspendido");
}
else if (nota < 6) {
    console.log("Aprobado");
}
else if (nota < 7) {
    console.log("Bien");
}
else if (nota < 9) {
    console.log("Notable");
}
else if (nota <= 10){
    console.log("Sobresaliente");
    if (nota == 10){
        console.log("Matricula de Honor");
    }
}
else {
    console.log("La nota no es correcta");
}
console.log("--------------------------------------------");

console.log("REBAJAS");

// REBAJAS
//Tengo distintos valores de rebajas 
//(50 (rojo), 30 (naranja), 20(amarillo), 10(verde)) y quiero saber cual es el precio final del producto
//Precio del producto y la rebaja que tiene (datos conocidos)
//Pantalones = 50€ y estan rebajados 50% --> 25€ "La etiqueta sera roja"
//Abrigo = 120€ y esta rebajado 30% --> 84€ "La etiqueta será naranja"
//Quiero que escriba el color de la etiqueta que tengo que poner 

var precio = 100; // Valor del producto
var oferta = 530; // Descuento del producto
var descuento = 0; 
var precio_final = 0;

if (oferta == 50){
    descuento = precio * oferta / 100;
    precio_final = precio - descuento;
    console.log("El precio del producto es:", precio_final);
    console.log("Etiqueta roja"); 
}
else if (oferta == 30){
    descuento = precio * oferta / 100;
    precio_final = precio - descuento;
    console.log("El precio del producto es:", precio_final);
    console.log("Etiqueta naranja"); 
}
else if (oferta == 20){
    descuento = precio * oferta / 100;
    precio_final = precio - descuento;
    console.log("El precio del producto es:", precio_final);
    console.log("Etiqueta amarillo"); 
}
else if (oferta == 10){
    descuento = precio * oferta / 100;
    precio_final = precio - descuento;
    console.log("El precio del producto es:", precio_final);
    console.log("Etiqueta verde"); 
}
else {
    console.log("El descuento no es válido")
}
console.log("--- Switch ---");

// Ejemplo con switch
switch (oferta) {
    case 50: 
        descuento = precio * oferta / 100;
        precio_final = precio - descuento;
        console.log("El precio del producto es:", precio_final);
        console.log("Etiqueta roja"); 
        break;
    case 30: 
        descuento = precio * oferta / 100;
        precio_final = precio - descuento;
        console.log("El precio del producto es:", precio_final);
        console.log("Etiqueta roja"); 
        break;
    case 20: 
        descuento = precio * oferta / 100;
        precio_final = precio - descuento;
        console.log("El precio del producto es:", precio_final);
        console.log("Etiqueta roja"); 
        break;
    case 10: 
        descuento = precio * oferta / 100;
        precio_final = precio - descuento;
        console.log("El precio del producto es:", precio_final);
        console.log("Etiqueta roja"); 
        break;
    default: 
        console.log("Precio no valido");
}
console.log("--------------------------------------------");