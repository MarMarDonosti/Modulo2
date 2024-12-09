const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const CDInput = document.getElementById('CD');

const btnEnviar = document.getElementById('b-enviar');
const btnReset = document.getElementById('b-borrar');

/** Recupero la información de local Storage y la guardo en un array al que llamo datosUsuario
 * Si no, la tarea se sobreescribiría cada vez que introduzco tarea nueva
 * Creo también un array vacío por si no hay tareas cradas
 */
var datosUsuario = JSON.parse(localStorage.getItem('datos_Usuario')) || [];

btnEnviar.addEventListener('click', () =>{
    let nombre = nombreInput.value.trim();
    let email = emailInput.value.trim();
    let telefono = Number(phoneInput.value);
    let codigo_postal = Number(CDInput.value);

    if(nombre && email && telefono && codigo_postal){
        //Crear el nuevo usuario
        const nuevoUsuario = {nombre, email, telefono, codigo_postal}; // creo un array con los datos 
        datosUsuario.push(nuevoUsuario);               
 
        // Guardar los datos en localStorage
        saveUser()
        //me invento una función para pintar mi array de usuario en la web
    
        mensajeConfirmacion.innerHTML = `
        <h3>¡Gracias, ${nombre}! Tus datos han sido enviados correctamente.</h3>
    `;

    // Limpiar el formulario después de enviarlo
    formulario.reset();
    }                   
    else {
        alert("Introduce tus datos")
    }                           
})
// Función para guardar los datos en localStorage
function saveUser () {
    localStorage.setItem('datos_Usuario', JSON.stringify(datosUsuario));
}