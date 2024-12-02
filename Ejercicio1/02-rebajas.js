console.log("FUNCIONA")
boton.addEventListener("click", ()=> {
var precio = document.getElementById("precio").value;     // Obtener el precio introducido

var descuento = document.getElementById("descuento").value; // le digo de dónde sacará el valor descuento

var boton = document.getElementById("calcular");

    // Calcular el descuento y el precio final

var descuentoAplicado = (precio * porcentajeDescuento) / 100;
var precioFinal = precio - descuentoAplicado;

    // Mostrar el resultado en el párrafo con id "resultado_rebajas"
document.getElementById("resultado_rebajas").textContent = "El precio con el descuento aplicado es: " + precioFinal.toFixed(2) + " €";
});