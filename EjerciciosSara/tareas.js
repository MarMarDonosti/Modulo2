//Identificar mis elementos de html
const taskInput = document.getElementById("task");
const boton = document.getElementById("create");
const tasksContainer = document.getElementById("board");

//Recupero la informacion de localStorage y la guardo en el array mis_tareas
var mis_tareas = JSON.parse(localStorage.getItem('mi_tarea')) || [];

//Asigno un evento al boton, cuando lo pulso es cuando se crea la tarea
boton.addEventListener('click', () =>{
    let text = taskInput.value.trim();
    console.log(text);
    if (text){
        //Crear la tarea
        const newTask = {text};
        console.log(newTask);
        console.log(mis_tareas);
        mis_tareas.push(newTask);
        localStorage.setItem('mi_tarea', JSON.stringify(mis_tareas));
        render_tasks();
    }
    else {
        alert("Introduce la tarea")
    }
})

// Funcion que me pinta mis postit en la web
function render_tasks(){
    tasksContainer.innerHTML = ''; //Dejar vacío el contenedor (no tiene ningun postit pintado)
    mis_tareas.forEach((element, index) => {
        var new_postit = document.createElement('div');
        new_postit.className = "postit";
        //Quiero que el backgroundcolor este 4 definidos
        new_postit.classList.add("color_"+(index%4));
        new_postit.id= "postit_"+index;
        new_postit.innerHTML = `<strong>${element.text}</strong>`;
        tasksContainer.appendChild(new_postit);
    });
}
//Cuando entro en la pagina quiero que pinte las tareas que ya tengo creadas
render_tasks();