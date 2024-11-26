console.log("REBAJAS") // Sólo se verá en consola

function descuento(precio_inicial, descuento_producto) {
    var precio_final = 0; // Para comprobar si el cálculo tiene error
    console.log(precio_inicial);
    precio_final = precio_inicial - (precio_inicial*descuento_producto/100);
    return precio_final;
}
var precio = 150;
var rebaja = 30;

var resultado = descuento(precio, rebaja); // Para hacer prueba
console.log(resultado);