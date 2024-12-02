console.log("PERFECTO");

function es_perfecto(){
    var num = document.getElementById("numero").value;
    console.log("sí, es el num");
    if (isNaN (num) || num <= 0) {
        alert("Valor incorrecto. No se puede calcular");
        return;
    }
    console.log("2")
    // Recorro todos los numeros del 1 hasta num
    let suma = 0;
    for (i = 1; i< num; i++){
        if (num % i == 0){
            suma += i;
        }
    }
    // Comprobar si la suma de sus divisores es igual al numero
    const elemento = document.getElementById("perfecto"); // podría ser un var o un let en vez de const
    console.log(elemento)
    const nuevo = document.createElement("p");
        // Cambiar el estilo del texto de la nueva p crada
        //nuevo.style.fontFamily = "Arial, sans-serif"; // Usa el nombre de la fuente que desees
        nuevo.style.fontSize = "20px"; // Tamaño de la fuente
        nuevo.style.color = "orangered"; // Color de la letra
        // Otra forma de dar estilo es agregando una clase CSS
        nuevo.classList.add("p_apareceDesdeJs"); // las modificaciones se harán en CSS con el class .miClaseDeEstilo


    var result = "";
    if (suma == num) {
        //alert ("Es Perfecto");  La vamos a sustituir por un p creada desde aquí que aparecerá
        /*crear un trozo de html para ver el resultado
        utilizar: innerHTML appendChild
        Tengo que crear el trozo html que quiero
        y añadirle un hijo (el trozo html crado antes)*/

        result = "El número es Perfecto <span> Yuhu!! <span>";
        
        /*let elemento = document.getElementById("miElemento");
        console.log(elemento.innerHTML); // Devuelve el contenido HTML del elemento
        let elemento = document.getElementById("miElemento");
        elemento.innerHTML = "¡Nuevo contenido <em>HTML</em> aquí!";*/
    }

    else {
        result = "El número no es Perfecto";
    }
    //forma sencilla con innerText
    nuevo.innerText = result;

    //si quiero que dentro de la p haya otras etiquetas, como span, le añado el span al result
    nuevo.innerHTML = `${result}`;

    elemento.appendChild(nuevo);
}