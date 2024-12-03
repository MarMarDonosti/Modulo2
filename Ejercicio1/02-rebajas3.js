console.log("REBAJAS") // Sólo se verá en consola

function discount2(precio, descuento) {
    var precio_final = 0; // Para comprobar si el cálculo tiene error
    console.log(precio_inicial);
    precio_final = precio_inicial - (precio_inicial*descuento_producto/100);
    return precio_final;
}

var precio_element = document.getElementById("precio");
var descuento_element = document.getElementById("descuento");
var precio_final_element = document.getElementById("precio_final");
var boton_element = document.getElementById("calcular");
boton_element.addEventListener('click', ()=>{
    let precio = parseFloat(precio_element.value)
    if (isNaN(precio) || precio <= 0) {
        precio_final.innerText="El precio no es válido";
        return;
    }
    console.log (precio);
    let descuento = descuento_element.value;
    console.log(descuento);
    precio_final = discount2(precio, descuento)
    console.log(precio_final);

    // Obtener el elemento donde voy a escribir
    precio_final.element.innerText = precio_final;
    // Asignar una clase
    precio_final_element.classList.className = " "
    if (descuento == 50) {
        //Asigno la clase rojo
        clase = "rojo";
    }
    else if (descuento == 30) {
        clase = "azul";
    }
    else if (descuento == 20) {
        clase = "amarillo"
    }
    else if (descuento == 10) {
        clase = "verde"
    }
    else {
        clase = ""
    }
    precio_final_element.className = clase;

    //document.getElementById("resultado_rebajas").textContent = "El precio final es " + precio_final + " €";
})
