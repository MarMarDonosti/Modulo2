console.log("REBAJAS");

function discount2(precio_inicial, descuento_producto){
    var precio_final = 0;
    console.log(precio_inicial);
    precio_final = precio_inicial - (precio_inicial*descuento_producto/100);
    return precio_final.toFixed(2);
}

// recoger el valor del input del precio
// recoger el valor del select (option)
var precio_element = document.getElementById("precio");
var descuento_element = document.getElementById("descuento");
var precio_final_element = document.getElementById("precio_final");
var boton_element = document.getElementById("calcular");
boton_element.addEventListener('click', ()=>{
    let precio = parseFloat(precio_element.value);
    console.log(precio);
    if (isNaN(precio) || precio <= 0) {
        precio_final.innerText = "El precio no es válido";
        return;
    }
    console.log(precio);
    let descuento = descuento_element.value;
    console.log(descuento) ;
    precio_final = discount2(precio, descuento);
    console.log(precio_final);
    // Obtener el elemento donde voy a escribir
    precio_final_element.innerText = precio_final;
    //Asignar una clase emn funcion del descuento
    if (descuento == 50) {
        //Asigno la clase rojo
        clase = 'rojo';
    }
    else if (descuento == 30) {
        clase = "azul";
    }
    else if (descuento == 20) {
        clase = "amarillo";
    }
    else if (descuento == 10) {
        clase = "verde";
    }
    else {
        clase = "";
    }
    precio_final_element.className = clase;
}) 