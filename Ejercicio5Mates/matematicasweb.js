// Vamos a pasarlo a html

// Inputs
var radioCirculo = document.getElementById ("radio_circulo");
var ladoTriangulo = document.getElementById ("lado_triangulo");
var ladoCuadrado = document.getElementById ("lado_cuadrado");
var alturaRectangulo = document.getElementById ("altura_rectangulo");
var baseRectangulo = document.getElementById ("base_rectangulo");

// botones

const botonCirculo = document.getElementById ("enviar_circulo");
const botonTriangulo = document.getElementById ("enviar_triangulo");
const botonCuadrado = document.getElementById ("enviar_cuadrado");
const botonRectangulo = document.getElementById ("enviar_rectangulo");

// Resultados --> funciona sin esta sección
const resultado_circulo = document.getElementById ("resultado_circulo");
const resultado_triangulo = document.getElementById ("resultado_triangulo");
const resultado_cuadrado = document.getElementById ("resultado_cuadrado");
const resultado_rectangulo = document.getElementById ("resultado_rectangulo");


///// CIRCULO
botonCirculo.addEventListener("click", () => {
    let radio = Number(radioCirculo.value);


    if (isNaN(radio) || radio < 0) {
        alert ('por favor, introduce un número válido');
    }
    else {
        let mensaje = circulo(radio);
        resultado_circulo.innerHTML = mensaje;
    }
})
function circulo (r) {
    
    const PI = 3.14;
    var perimetro = 0;
    perimetro = 2 * PI * r;
    area = PI * r ** 2;
    return `El perímetro del círculo es igual a ${perimetro.toFixed(2)} y su area es ${area.toFixed(2)}`;
    
}

var circulo_perArea = circulo(); //lo que ponga entre paréntesis es el radio que me dan
console.log(circulo_perArea);


///////////TRIANGULO

botonTriangulo.addEventListener("click", () => {
    let lado = Number(ladoTriangulo.value);
    
    if (isNaN(lado) || lado < 0) {
        alert ('por favor, introduce un número válido');
    }
    else {
        let mensaje = triangulo_equi(lado);
        resultado_triangulo.innerHTML = mensaje;
    }

})
function triangulo_equi (a) { // entre paréntesis el lado que me dan
    perimetro = 3 * a;
    var h = ((3 ** 1/2) / 2) * a;
    area = (a * h)/2;
    
    return `El perímetro del triángulo equilátero es igual a ${perimetro.toFixed(2)} y su area es ${area.toFixed(2)}`;
}
var triangulo_perArea = triangulo_equi();
console.log(triangulo_perArea);



///////////CUADRADO


botonCuadrado.addEventListener("click", () => {
    let lado = Number(ladoCuadrado.value);
    
    if (isNaN(lado) || lado < 0) {
        alert ('por favor, introduce un número válido');
    }
    else {
        let mensaje = cuadrado(lado);
        resultado_cuadrado.innerHTML = mensaje;
    }

})

function cuadrado (l) {
    let perimetro = 4 * l;
    let area = l**2;

    return `El perímetro del cuadrado es igual a ${perimetro.toFixed(2)} y su area es ${area.toFixed(2)}`;
}
var cuadrado_perArea = cuadrado ();
console.log(cuadrado_perArea);



/////////RECTANGULO

botonRectangulo.addEventListener("click", () => {
    let lado1 = Number(alturaRectangulo.value);
    let lado2 = Number(baseRectangulo.value)
    
    if (isNaN(lado1) || isNaN(lado2) || lado1 < 0 || lado2 < 0) {
        alert ('por favor, introduce un número válido');
    }
    else {
        let mensaje = cuadrado_rectangulo(lado1, lado2);
        resultado_rectangulo.innerHTML = mensaje;
    }

})
function cuadrado_rectangulo (x, y) {
    let perimetro = 2*x + 2*y;
    let area = x * y;

    return `El perímetro del cuadrado rectángulo es igual a ${perimetro.toFixed(2)} y su area es ${area.toFixed(2)}`;
}
var rectangulo = cuadrado_rectangulo (2, 4);
console.log(rectangulo);


///////OCULTAR - DESOCULTAR

const imgCirculo = document.getElementById("imgCirculo");
const seccionCirculo = document.getElementById("seccionCirculo");
const secciones = document.querySelectorAll(".trigonometria > div");

// Función para ocultar todas las secciones
function ocultarSecciones() {
    seccionCirculo.style.display = "none";
}

// Asociar eventos de clic a las imágenes
imgCirculo.addEventListener("click", function() {
    // Ocultar todas las secciones
    ocultarSecciones();
    // Mostrar solo la sección correspondiente
    //seccionCirculo.parentElement.style.display = "block"; 
    seccionCirculo.style.display= 'block';
});