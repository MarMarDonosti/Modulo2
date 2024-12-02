console.log("TAREAS")


const boton = document.getElementById('botonEnviar');

const asignatura = document.getElementById('asignatura');
const tarea = document.getElementById('tarea');
const fecha = document.getElementById('fecha');

    // Obtener la sección donde se añadirá el mensaje y la imagen
const seccion = document.getElementById ("mensajeTareas"); //id mensajeTareas es el nombre que le he dado a la sección
const nuevo = document.createElement("div");

boton.addEventListener("click", ()=> {
    const tarea = tarea.value.trim(); //Limpiar la entrada de la tarea
    const fecha = fecha.value; 
    const asignatura = asignatura.value;

    if (text && date){
        tasksContainer.innerHTML = '<b>${asignatura}</b><span></span>'
        /**
         * Crear nueva tarea
         * const newTask = {text, date, person, completed: false};
         * console.log(newTask);
         * tasks.push(newTask);
         * console.log(tasks);
         * saveTasks ();
         * renderTasks ();
         * Limiar inputs
         */
        taskInput.value = '';
        taskDate.value = '';
        task
    }

    nuevo.innerHTML = `
    <p>${asignatura}</p>
    <p>${fecha}</p>
    <p>${tarea}</p>
    `;

    // Dar estilo a lo nuevo
    nuevo.classList.add("postit");

    seccion.appendChild(nuevo);
    })

    localStorage.setItem("asignatura", "Matematicas")
    


