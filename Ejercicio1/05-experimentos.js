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