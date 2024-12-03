const boton = document.getElementById('botonEnviar');
const tarea = document.getElementById('tarea');
const fecha = document.getElementById('fecha');
const asignatura = document.getElementById('asignatura');

// Obtener la sección donde se añadirá el mensaje y la imagen
const seccion = document.getElementById("mensajeTareas"); // id mensajeTareas es el nombre que le he dado a la sección

// Obtener el array de tareas desde localStorage
var etxerakoLanak = JSON.parse(localStorage.getItem('etxerakoLanak')) || [];

// Asignamos un evento al botón de enviar
boton.addEventListener('click', () => {
    let tareaTexto = tarea.value.trim(); // Usamos 'tarea.value' y no 'taskInput.value'

    if (tareaTexto) {
        // Creamos el objeto tarea y lo añadimos al array
        const nuevaTarea = {
            text: tareaTexto,
            fecha: fecha.value, // Puedo usar esta fecha si la necesito más adelante
            asignatura: asignatura.value // Similar con la asignatura
        };

        // Agregar la tarea al array
        etxerakoLanak.push(nuevaTarea);
        localStorage.setItem('etxerakoLanak', JSON.stringify(etxerakoLanak));

        // Renderizamos las tareas
        render_tasks();

        // Limpiar el campo de texto después de enviar
        tarea.value = '';
    } else {
        alert("Introduce la tarea");
    }
});

// Función para renderizar las tareas en el div
function render_tasks() {
    // Limpiar la sección antes de renderizar
    seccion.innerHTML = '';

    // Recorrer todas las tareas en el array
    etxerakoLanak.forEach((elemento, index) => {
        // Crear un nuevo div para la tarea
        var nuevaTareaDiv = document.createElement('div');
        nuevaTareaDiv.className = "postit"; // Estilo de la tarea

        // Agregar color de fondo (ciclo entre 4 colores)
        nuevaTareaDiv.classList.add("color_" + (index % 4));

        // Asignar contenido al div
        nuevaTareaDiv.innerHTML = `<strong>${elemento.text}</strong><br><em>Fecha: ${elemento.fecha}</em><br><em>Asignatura: ${elemento.asignatura}</em>`;

        // Agregar el nuevo div al contenedor
        seccion.appendChild(nuevaTareaDiv);
    });
}

// Llamada inicial a render_tasks para mostrar las tareas guardadas
render_tasks();
