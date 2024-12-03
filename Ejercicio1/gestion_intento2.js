console.log(intento2)

const boton = document.getElementById('botonEnviar');

const asignatura = document.getElementById('asignatura');
const tarea = document.getElementById('tarea');
const fecha = document.getElementById('fecha');

// Obtener la sección donde se añadirá el mensaje y la imagen
const seccion = document.getElementById("mensajeTareas"); //id mensajeTareas es el nombre que le he dado a la sección
const nuevo = document.createElement("div"); // ELIMINO

var etxerakoLanak = JSON.parse(localStorage.getItem('etxerakoLanak')) || [];

//Asigno un evento al boton, cuando lo pulso se cra la tarea
boton.addEventListener('click', () =>{
    let tarea = taskInput.value.trim();  // CAMBIO TASKINPUT POR TAREA

    if(tarea){
        const newTask = {text};
        etxerakoLanak.push(newTask);
        localStorage.setItem('etxerakoLanak', JSON.stringify(etxerakoLanak));

        render_tasks()
    }
    else {
        alert("Introduce la tarea")
    }
})

function render_tasks() {
    tasksContainer.innerHTML = '';
    etxerakoLanak.forEach((element, index) => {
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
render_tasks()