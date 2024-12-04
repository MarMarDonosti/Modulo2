//Identificar mis elementos de html
const usuarioInput = document.getElementById('usuario');
const taskInput = document.getElementById("task");
const boton = document.getElementById ("create");
const fechaInput = document.getElementById('fecha');
const tasksContainer = document.getElementById("board"); // va a ser el div

// Recupero la información de local Storage y la guardo en el array mis_tareas
//Si no, la tarea se sobreescribiría cada vez que introduzco tarea nueva
// Creo también un array vacío por si no hay tareas cradas
var mis_tareas = JSON.parse(localStorage.getItem('mi_tarea')) || [];

//Asigno un evento al boton, cuando lo pulso se cra la tarea
boton.addEventListener('click', () =>{
    let usuario = usuarioInput.value;
    let text = taskInput.value.trim(); //trim: Para eliminar los espacios de delante y de detrás
    let fecha = fechaInput.value;                                            // si el usuario los ha introducido
    console.log(text);
    //si tengo texto creo la tarea y si no no
    if(text && fecha){
        //Crear la tarea
        const newTask = {usuario, text, fecha};
        mis_tareas.push(newTask);
        localStorage.setItem('mi_tarea', JSON.stringify(mis_tareas));

        //me invento una función para pintar mi array de tareas (las postit) en la web
        render_tasks()
    }                   
    else {
        alert("Introduce la tarea")
    }                             
});

//llamo a la función que me pintará las postit
function render_tasks() {

    tasksContainer.innerHTML = ''; //Dejar vacío el contenedor (no tiene ningún postit pintado)


    
    mis_tareas.forEach((element, index) => { //le añado el parámetro inventado (intuitivo) index
                                            //nos indica su posición en el array
                                            //hace referencia al índice interno del array
                                           //primer parámetro: el contenido del array (element, es este caso)
                                           //segundo parámetro: la posición de ese contenido (index, en este caso)
        const existe = document.getElementById('postit_'+ element.usuario);
        if (existe){
            existe.innerHTML += `<p>${element.text}</p><span>${element.fecha}<span>`;
        } // += para que no sobreescriba sobre lo anterior
        else {
            //Si quiero añadir cosas:
            var new_postit = document.createElement('div');
            new_postit.className = "postit";
            new_postit.id = "postit_"+ element.usuario;
            //Quiero que el backgroundcolor esté entre 4 definidos
            new_postit.classList.add("color_"+(index%4)); //La siguiente línea que añade un id no sería necesaria

            new_postit.id = "postit_"+element.usuario; //Cada postit tendrá un id, se asignará id automáticamente añadiéndole número a postit_
            // ahora lo añado al contenedor
            new_postit.innerHTML = `
                <div class="contenedor_circulo">
                    <svg width="20" height="20">
                        <circle r="10" cx="10" cy="10" fill="red" />
                    </svg>
                </div>
                <strong>${element.usuario}</strong>
                <p>${element.text}</p>
                <span>${element.fecha}<span>
                `;
            tasksContainer.appendChild(new_postit);
        }
    });
}
//llamo a la función dentro y fuera para ver las tareas anteriormente
//creadas al entrar en la página
render_tasks()

// Intentos para hacer un botón de limpiar
const boton2 = document.getElementById ("limpiar");

boton2.addEventListener('click', () =>{
    localStorage.clear();  // Limpiar el almacenamiento local
    mis_tareas = []; // Vaciar el array de tareas
    render_tasks(); // Actualizar la vista de las tareas
});