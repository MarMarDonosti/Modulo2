//Identificar mis elementos de html
const taskInput = document.getElementById("task");
const boton = document.getElementById ("create");
const tasksContainer = document.getElementById("board"); // va a ser el div

// Recupero la información de local Storage y la guardo en el array mis_tareas
//Si no, la tarea se sobreescribiría cada vez que introduzco tarea nueva
// Creo también un array vacío por si no hay tareas cradas
var mis_tareas = JSON.parse(localStorage.getItem('mi_tarea')) || [];

//Asigno un evento al boton, cuando lo pulso se cra la tarea
boton.addEventListener('click', () =>{
    let text = taskInput.value.trim(); //trim: Para eliminar los espacios de delante y de detrás
                                                // si el usuario los ha introducido
    console.log(text);
    //si tengo texto creo la tarea y si no no
    if(text){
        //Crear la tarea
        const newTask = {text};
        mis_tareas.push(newTask);
        localStorage.setItem('mi_tarea', JSON.stringify(mis_tareas));

        //me invento una función para pintar mi array de tareas (las postit) en la web
        render_tasks()
    }                   
    else {
        alert("Introduce la tarea")
    }                             
})

//llamo a la función que me pintará las postit
function render_tasks() {
    tasksContainer.innerHTML = ''; //Dejar vacío el contenedor (no tiene ningún postit pintado)
    mis_tareas.forEach((element, index) => { //le añado el parámetro inventado (intuitivo) index
                                            //nos indica su posición en el array
                                            //hace referencia al índice interno del array
                                           //primer parámetro: el contenido del array (element, es este caso)
                                            //segundo parámetro: la posición de ese contenido (index, en este caso)
        //Si quiero añadir cosas:
        var new_postit = document.createElement('div');
        new_postit.className = "postit";
        //Quiero que el backgroundcolor esté entre 4 definidos
        new_postit.classList.add("color_"+(index%4)); //La siguiente línea que añade un id no sería necesaria

        new_postit.id = "postit_"+index; //Cada postit tendrá un id, se asignará id automáticamente añadiéndole número a postit_
        // ahora lo añado al contenedor
        new_postit.innerHTML = `<strong>${element.text}<strong>`;
        tasksContainer.appendChild(new_postit);
    });
}
//llamo a la función dentro y fuera para ver las tareas anteriormente
//creadas al entrar en la página
render_tasks()