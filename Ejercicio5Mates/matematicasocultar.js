// Obtener las imágenes
var imagenCirculo = document.getElementById("imagen_circulo");
var imagenTriangulo = document.getElementById("imagen_triangulo");
var imagenCuadrado = document.getElementById("imagen_cuadrado");
var imagenRectangulo = document.getElementById("imagen_rectangulo");

// Obtener las secciones de las figuras
var seccionCirculo = document.getElementById("radio_circulo");
var seccionTriangulo = document.getElementById("lado_triangulo");
var seccionCuadrado = document.getElementById("lado_cuadrado");
var seccionRectanguloAltura = document.getElementById("altura_rectangulo");
var seccionRectanguloBase = document.getElementById("base_rectangulo");

// Obtener las divs donde mostrar los resultados
var resultado_circulo = document.getElementById("resultado_circulo");
var resultado_triangulo = document.getElementById("resultado_triangulo");
var resultado_cuadrado = document.getElementById("resultado_cuadrado");
var resultado_rectangulo = document.getElementById("resultado_rectangulo");

// Asociar eventos de clic a las imágenes
imagenCirculo.addEventListener("click", function() {
    // Ocultar todas las secciones
    ocultarSecciones();
    // Mostrar solo la sección correspondiente
    seccionCirculo.parentElement.style.display = "block"; 
});

imagenTriangulo.addEventListener("click", function() {
    ocultarSecciones();
    seccionTriangulo.parentElement.style.display = "block";
});

imagenCuadrado.addEventListener("click", function() {
    ocultarSecciones();
    seccionCuadrado.parentElement.style.display = "block";
});

imagenRectangulo.addEventListener("click", function() {
    ocultarSecciones();
    seccionRectanguloAltura.parentElement.style.display = "block";
    seccionRectanguloBase.parentElement.style.display = "block";
});

// Función para ocultar todas las secciones
function ocultarSecciones() {
    // Ocultar todas las secciones de entrada
    document.querySelectorAll('.trigonometria > div').forEach(function(div) {
        div.style.display = "none";
    });
    // Ocultar los resultados previos
    resultado_circulo.style.display = "none";
    resultado_triangulo.style.display = "none";
    resultado_cuadrado.style.display = "none";
    resultado_rectangulo.style.display = "none";
}
