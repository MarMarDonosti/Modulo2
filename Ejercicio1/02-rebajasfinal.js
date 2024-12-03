console.log("REBAJAS");

function discount2(precio_inicial, descuento_producto){
    var precio_final = 0;
    console.log(precio_inicial);
    precio_final = precio_inicial - (precio_inicial*descuento_producto/100);
    return precio_final.toFixed(2);   // Retorna el precio con dos decimales
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
        precio_final_element.innerText = "El precio no es válido"; // Añadido _element en casa
        precio_final_element.className = ""; // Limpiar cualquier clase previa, añadido en casa
        return;
    }
    console.log(precio);

    let descuento = parseFloat(descuento_element.value); // // Convertir descuento a número. Parsefloat y parentesis añadido en casa
    console.log(descuento) ;
    
    let precio_final = discount2(precio, descuento); //let añadido en casa
    console.log(precio_final);

    // Obtener el elemento donde voy a escribir
    precio_final_element.innerText = precio_final;

    //Asignar una clase emn funcion del descuento
    let clase = ""; // Inicializar la variable clase. Añadido en casa
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
    //else {            // Eliminado en casa
        //clase = "";
    //}
    precio_final_element.className = clase;
}) 