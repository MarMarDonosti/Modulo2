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
////////////////////////////////////////
//Crar nueva tarea
const newTask = { tarea, fecha, asignatura} //, completed:false};
console.log(newTask);
tareas.push(newTask);
console.log(tasks);
localStorage.setItem('tasks', JSON.stringify(tareas)); //Guardo en localStorage
//saveTasks();
//renderTasks();

//Limpiar inputs
taskInput.value = '';
taskDate.value = '';
taskPerson.value = '1';
} else {
    alert('por favor, completa todos los campos.');
}


// Función para renderizar las tareas
function renderTasks () {
    tasksContainer.innerHTML = ''; // Limpiar contenedor
    tareas.forEach((task, index) => {
        // Crar el div de la tarea
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task', `task-person-${task.person}`)
        //if (task.completed) taskDiv.classList.add('completed');

        //Añadir contenido a la tarea
        taskDiv.innerHTML = `
            <strong>${task.tarea}</strong>
            <span>${task.asignatura}</span>
            <span>${task.date}</span>
        `;
        //Añadir evento de clic para completar la tarea
        taskDiv.addEventListener('click', () => {
            tareas[index].completed = !tasks[index].completed;
            saveTasks();
            renderTasks();
        });
        //Añadir la tarea al contenedor
        tasksContainer appendChild(taskDiv);

        ////////////////////////////////
    })
}

    // Añadir al local storage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tareas));
    }
    


