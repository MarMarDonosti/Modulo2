console.log("EXPERIMENTOS");

/* FORMULARIO
Quiero que al clicar el botón me devuelva
un mensaje que incluya el nombre de la persona
y una imagen
*/

document.getElementById('enviar').addEventListener('click', (e) => {

    /*Si no deseas que el formulario se recargue al hacer clic
     en el botón de enviar, debes usar esta línea.*/
     e.preventDefault();

    console.log("despues de clic");
    var nombre = document.getElementById ("nombre").value;

     // Obtener la sección donde se añadirá el mensaje y la imagen
    const seccion = document.getElementById ("experimento1"); //id experimento1 es el nombre que le he dado a la sección
    
    // Crear un nuevo div para contener el mensaje y la imagen
    const nuevo = document.createElement("div");

    //innerHTML porque quiero que me cree <p>
    nuevo.innerHTML = `
    <p>Muy bien ${nombre}, ya te has suscrito a nuestra Newsletter!</p>
    <img width=50px src="https://w7.pngwing.com/pngs/931/518/png-transparent-joy-of-inside-out-united-states-pixar-happiness-film-joy-s-sadness-fictional-character-desktop-wallpaper-thumbnail.png">
    `;
    
    // Añadir el nuevo contenido a la sección
    seccion.appendChild(nuevo);
})

/* EDAD
Quiero que según la edad introducida
Aparezca un mensaje diferente */

function tu_realidad (edad){
    let result;  // Definir la variable `result` para almacenar el mensaje
    console.log("despues de let result");
    if (edad < 20) {
        result="Eres un bebé";
    }
    else if (edad < 30) {
        result="Tu capacidad de dormir 10 horas y dormitar en clase es admirable";
    }
    else if (edad < 40) {
        result="Si estas cansado ¿para qué vas?";
    }
    else if (edad < 50) {
        result="Haznos un favor y deja de hablar de los 80";
    }
    else {
        result = "Eres invisible";
    }
    return result;
    }

    console.log("antes de document");
    document.getElementById('cuentame').addEventListener('click', (e) => {

        /*Si no deseas que el formulario se recargue al hacer clic
         en el botón de enviar, debes usar esta línea.*/
         e.preventDefault();

         // Obtener el valor de la edad ingresada por el usuario
        const edad = parseInt(document.getElementById("edad").value);
        
        console.log("despues de edad");
        // Verificar que la edad sea un número válido
        // Es necesario si he puesto number??
        if (isNaN(edad) || edad <= 0) {
            alert("Por favor, introduce una edad válida.");
            return;
        }

        // Obtener el mensaje de la función `tu_realidad`
        const mensaje = tu_realidad(edad);

        // Obtener la sección donde se añadirá el mensaje
        const seccion = document.getElementById ("experimento2");
        
        // Crear un nuevo div para contener el mensaje
        const nuevo = document.createElement("div");
    
        //innerHTML porque quiero que me cree <p>.
        nuevo.innerHTML = `<p>${mensaje}</p>`;
        
        // Añadir el nuevo contenido a la sección
        seccion.appendChild(nuevo);
    })

    // JUEGO DE ADIVINACIÓN

    let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

function verificarSuposicion() {
    const suposicion = parseInt(document.getElementById('suposicion').value);
    const mensaje = document.getElementById('mensaje');

    if (isNaN(suposicion)) {
        mensaje.innerText = "Por favor, ingresa un número válido.";
    } else if (suposicion < 1 || suposicion > 100) {
        mensaje.innerText = "Por favor, ingresa un número entre 1 y 100.";
    } else if (suposicion === numeroAleatorio) {
        mensaje.innerText = `¡Correcto! El número era ${numeroAleatorio}.`;
    } else if (suposicion < numeroAleatorio) {
        mensaje.innerText = "El número es mayor.";
    } else {
        mensaje.innerText = "El número es menor.";
    }
}
/**
 *  Explicación de la línea:
 *  let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
   
 *  Math.random():
        Esta función genera un número decimal aleatorio entre 0 (inclusive) y 1 (exclusivo).
    Math.random() * 100:
        Multiplicamos el número aleatorio generado por Math.random() por 100. Esto nos da un número decimal aleatorio entre 0 (inclusive) y 100 (exclusivo). Por ejemplo, podríamos obtener un valor como 57.8923.
    Math.floor(Math.random() * 100):
        Math.floor() es una función que redondea hacia abajo a su número entero más cercano. Entonces, Math.floor(Math.random() * 100) convierte nuestro número decimal aleatorio en un número entero entre 0 y 99. Por ejemplo, Math.floor(57.8923) sería 57.
    Math.floor(Math.random() * 100) + 1:
        Finalmente, sumamos 1 al resultado para asegurarnos de que el número entero esté en el rango de 1 a 100 en lugar de 0 a 99. Entonces, si teníamos 57 después de usar Math.floor, ahora será 58.

En resumen, toda la línea de código genera un número entero aleatorio entre 1 y 100 y lo asigna a la variable numeroAleatorio.
 */