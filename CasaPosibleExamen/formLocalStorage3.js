const formulario = document.getElementById('miFormulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const CDInput = document.getElementById('CD');

const btnReset = document.getElementById('btnReset');

// Recuperar datos desde localStorage
var datosUsuario = JSON.parse(localStorage.getItem('datos_Usuario')) || [];

// Contenedor del mensaje de confirmación
const mensajeConfirmacion = document.getElementById('mensajeConfirmacion');

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío tradicional del formulario
    
    let nombre = nombreInput.value.trim();
    let email = emailInput.value.trim();
    let telefono = phoneInput.value.trim();
    let codigo_postal = CDInput.value.trim();

    if (nombre && email && telefono && codigo_postal) {
        // Crear el nuevo usuario: un nuevo array con los datos
        const nuevoUsuario = { nombre, email, telefono, codigo_postal };
        datosUsuario.push(nuevoUsuario);
        
        // Guardar los datos en localStorage
        saveUser();

        // Mostrar el mensaje de confirmación con el nombre del usuario
        mensajeConfirmacion.style.display = 'block';
        mensajeConfirmacion.innerHTML = `
            <h3>¡Gracias, ${nombre}! Tus datos han sido enviados correctamente.</h3>
        `;

        // Opcional: Limpiar el formulario después de enviarlo
        formulario.reset();
    } else {
        alert("Introduce tus datos");
    }
});

// Función para guardar los datos en localStorage
function saveUser() {
    localStorage.setItem('datos_Usuario', JSON.stringify(datosUsuario));
}
