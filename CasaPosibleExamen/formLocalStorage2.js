// LocalStorage + pintar datos (renderizar). El botón de borrado borra el formulario pero no lo pintado.

const formulario = document.getElementById('miFormulario');
const nombreInput = document.getElementById('nombre');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const CDInput = document.getElementById('CD');

const btnReset = document.getElementById('b-borrar');

// Recuperar datos desde localStorage
var datosUsuario = JSON.parse(localStorage.getItem('datos_Usuario')) || [];

formulario.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita el envío tradicional del formulario
    let nombre = nombreInput.value.trim();
    let email = emailInput.value.trim();
    let telefono = phoneInput.value.trim();
    let codigo_postal = CDInput.value.trim();

    if (nombre && email && telefono && codigo_postal) {
        const nuevoUsuario = { nombre, email, telefono, codigo_postal };
        datosUsuario.push(nuevoUsuario);
        
        saveUser();
        render_tasks();
    } else {
        alert("Introduce tus datos");
    }
});

function saveUser() {
    localStorage.setItem('datos_Usuario', JSON.stringify(datosUsuario));
}

function render_tasks() {
    const contenedorUsuarios = document.getElementById('contenedorUsuarios');
    contenedorUsuarios.innerHTML = ''; // Limpiar el contenedor

    datosUsuario.forEach(usuario => {
        const divUsuario = document.createElement('div');
        divUsuario.classList.add('usuario');
        divUsuario.innerHTML = `
            <p>Nombre: ${usuario.nombre}</p>
            <p>Email: ${usuario.email}</p>
            <p>Teléfono: ${usuario.telefono}</p>
            <p>Código Postal: ${usuario.codigo_postal}</p>
        `;
        contenedorUsuarios.appendChild(divUsuario);
    });
}
