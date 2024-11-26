document.getElementById("calcular").addEventListener("click", function () {
    // Obtener el precio introducido
    var precio = parseFloat(document.getElementById("precio").value);

    // Verificar si el precio es un número válido
    if (isNaN(precio) || precio <= 0) {
        alert("Por favor, introduce un precio válido.");
        return;
    }

    // Obtener el valor del descuento seleccionado
    var descuento = document.getElementById("descuento").value;

    // Convertir el valor de descuento a número entero
    var porcentajeDescuento = parseInt(descuento);

    // Calcular el descuento y el precio final
    var descuentoAplicado = (precio * porcentajeDescuento) / 100;
    var precioFinal = precio - descuentoAplicado;

    // Mostrar el resultado en el párrafo con id "resultado_rebajas"
    document.getElementById("resultado_rebajas").textContent = "El precio con el descuento aplicado es: " + precioFinal.toFixed(2) + " €";
});
