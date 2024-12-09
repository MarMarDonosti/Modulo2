// Variables para el DOM, identificar los elementos HTML
const taskInput = document.getElementById('taskInput');
const taskDate = document.getElementById('taskDate');
const taskPerson = document.getElementById('taskPerson');
const addTaskButton = document.getElementById('addTaskButton');
const tasksContainer = document.getElementById('tasksContainer');

// Cargar tareas desde el almacenamiento local
let tareas = JSON.parse(localStorage.getItem('tasks')) || [];

addTaskButton.addEventListener('click', () => {
    const text = taskInput.value.trim(); // Limpiar la entrada de la tarea. 
    const date = taskDate.value;
    const personSelected = taskPerson.options[taskPerson.selectedIndex];
    const person_id = personSelected.value;
    const person = personSelected.text;
    if (text && date && person_id) {
        //Add code, no es permanente, hay que buscar una forma de guardar la informacion --> localStorage
        //tasksContainer.innerHTML += `<b>${person}</b><span>${text}</span><span>${date}</span>`
        // Crear nueva tarea
        const newTask = { text, date, person_id, person, completed: false }; //Por defecto se crea completed=false
        tareas.push(newTask);
        saveTasks();
        renderTasks();

        // Limpiar inputs (html)
        taskInput.value = '';
        taskDate.value = '';
        taskPerson.value = '0';
    } else {
        alert('Por favor, completa todos los campos.');
    }
});


// Función para renderizar las tareas
function renderTasks() {
    tasksContainer.innerHTML = ''; // Limpiar contenedor
    tareas.forEach((task, index) => {
        // Crear el div de las tareas si no existe, si ya existe, añadir a su lista de tareas.
        let existe = document.getElementById('div_'+task.person_id);
        completa="";
        if (existe){
            if (task.completed) {
                completa = 'class="completed"' // task.completed ? class="completed" : ""
            }
            existe.innerHTML += `<span ${completa} onclick="toggleTask(${index})">${task.date} - ${task.text}</span> `;
            tasksContainer.appendChild(existe);
        }
        else {
            const taskDiv = document.createElement('div');
            taskDiv.id = 'div_'+task.person_id;
            taskDiv.classList.add('task', `task-person-${index%5}`);
            if (task.completed == true) {
                completa = 'class="completed"'
            }
            let name_upperCase = capitalizarPrimeraLetra(task.person);
            // Añadir contenido al postit de la persona
            taskDiv.innerHTML = `
                <strong>${name_upperCase}</strong>
                <span ${completa} onclick="toggleTask(${index})">${task.date} - ${task.text}</span> 
            `;

            // Añadir la tarea al contenedor
            tasksContainer.appendChild(taskDiv);
        }    
    });
}

function toggleTask(indice){
    tareas[indice].completed = !tareas[indice].completed;
    saveTasks();
    renderTasks();
}
// Función para guardar tareas en el localStorage
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tareas));
}

//Funcion que escribe en mayusculas la primera letra del nombre
function capitalizarPrimeraLetra(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


// Renderizar tareas iniciales al cargar la página 
renderTasks();


// Dar estilo, por ejemplo inclinar los postit

// Los usuarios cargarlos desde un json en js (en el tengo los nombres de los usuarios y sus valores.)

// Cambiar el formato de la fecha (Ordenar las tareas por fecha)

// Añadir accion de completar la tarea 

// Añadir accion de borrar postit 

// Función para crear los colores en funcion de los usuarios (random) ??

// Tener un maximo para las tareas de un usuario en un postit, cuando se supere este maximo, crear un nuevo postit para ese usuario.