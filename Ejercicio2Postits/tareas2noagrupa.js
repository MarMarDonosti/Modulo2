const usuarioInput = document.getElementById('usuario');
const taskInput = document.getElementById("task");
const boton = document.getElementById("create");
const fechaInput = document.getElementById('fecha');
const tasksContainer = document.getElementById("board");

var mis_tareas = JSON.parse(localStorage.getItem('mi_tarea')) || [];

boton.addEventListener('click', () => {
    let usuario = usuarioInput.value;
    let text = taskInput.value.trim();
    let fecha = fechaInput.value;

    if (text && fecha) {
        const newTask = { usuario, text, fecha, completed: false };
        mis_tareas.push(newTask);
        localStorage.setItem('mi_tarea', JSON.stringify(mis_tareas));
        render_tasks();
    } else {
        alert("Introduce la tarea");
    }
});

function render_tasks() {
    tasksContainer.innerHTML = '';

    mis_tareas.forEach((element, index) => {
        let completa = element.completed ? 'class="completed"' : "";

        var new_postit = document.createElement('div');
        new_postit.className = "postit";
        new_postit.classList.add("color_" + (index % 4));
        new_postit.innerHTML = `
            <div class="contenedor_circulo">
                <svg width="20" height="20">
                    <circle r="10" cx="10" cy="10" fill="red" />
                </svg>
            </div>
            <strong>${element.usuario}</strong>
            <div ${completa} onclick="toggleTask(${index})">
                <p>${element.text}</p>
                <span>${element.fecha}</span>
                <button class="btn-borrar" onclick="eliminarTarea(${index})">
                    <img src="x-24.png" title="eliminar tarea">
                </button>
            </div>`;
        tasksContainer.appendChild(new_postit);
    });
}

function toggleTask(indice) {
    mis_tareas[indice].completed = !mis_tareas[indice].completed;
    localStorage.setItem('mi_tarea', JSON.stringify(mis_tareas));
    render_tasks();
}

const boton2 = document.getElementById("limpiar");

boton2.addEventListener('click', () => {
    localStorage.removeItem('mi_tarea');
    mis_tareas = [];
    render_tasks();
});

function eliminarTarea(index) {
    mis_tareas.splice(index, 1);
    localStorage.setItem('mi_tarea', JSON.stringify(mis_tareas));
    render_tasks();
}

render_tasks();
