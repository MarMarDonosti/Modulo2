const nombreRecetaInput = document.getElementById('nombreReceta');
const ingredientesInput = document.getElementById('ingredientes');
const pasosInput = document.getElementById('pasos');
const btnEnviarInput = document.getElementById('btnEnviar');

const divErrorMensaje = document.getElementById("error-message");
const form = document.getElementById("formRecetas")
const recetasContainer = document.getElementById("recetasContainer");
// Obtener las recetas almacenados en el localStorage
const recetas = JSON.parse(localStorage.getItem("recetas")) || [];

form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Comprobar si ya se ha usado ese nombre de receta
    const recetaExistente = recetas.find(receta => receta.nombre === nombreRecetaInput.value.trim());

    if (recetaExistente) {
        divErrorMensaje.innerHTML = 'Ya hay una receta con ese nombre. Prueba con otro o cámbialo un poco.';
        //divErrorMensaje.style.padding = '1em'
        divErrorMensaje.style.display = 'block'; // Mostrar el mensaje de error
        return;
    }

    // Guardar los datos en localStorage
    const nuevaReceta = {
        nombre: nombreRecetaInput.value,
        ingredientes: ingredientesInput.value,
        pasos: pasosInput.value
    };
    // Agregar la nueva receta al array
    recetas.push(nuevaReceta);

    // Guardar el array actualizado en el localStorage
    localStorage.setItem("recetas", JSON.stringify(recetas));

    // Limpiar campos del formulario
    nombreRecetaInput.value = '';
    ingredientesInput.value = '';
    pasosInput.value = '';

    // Actualizar la visualización de recetas
    renderRecetas(recetas);

});

//llamo a la función que me pintará las postit
function renderRecetas(recetas) {

    // Vaciar el contenedor de recetas
    recetasContainer.innerHTML = '';

    // Mostrar cada receta
    recetas.forEach((receta, index) => {
        const recetaDiv = document.createElement('div');
        recetaDiv.className = 'receta';

        recetaDiv.innerHTML = `
            <strong>${receta.nombre}</strong>
            <p><strong>Ingredientes:</strong> ${receta.ingredientes}</p>
            <p><strong>Pasos:</strong> ${receta.pasos}</p>
            <button class="btn-borrar" onclick="eliminarReceta(${index})">Eliminar</button>
        `;

        recetasContainer.appendChild(recetaDiv);
    });
}

// Función para eliminar receta
function eliminarReceta(index) {
    let recetas = JSON.parse(localStorage.getItem("recetas")) || [];
    recetas.splice(index, 1); // Eliminar receta por índice
    localStorage.setItem("recetas", JSON.stringify(recetas));

    // Actualizar la visualización de recetas
    renderRecetas(recetas);
}

// Renderizar recetas al cargar la página
// window.onload = renderRecetas;


// Buscador

function filtrarRecetas() {
    const valorABuscar = document.getElementById("searchInput").value.toLowerCase();

    //tolowerCase () es una función que ya existe, no la he hecho yo. Transforma las letras
    //en minúscula para que en la búsqueda no haga distinción

    //Filtrar receetas por nombre o ingredientes
    const recetasFiltradas = recetas.filter(receta =>
        receta.nombre.toLowerCase().includes(valorABuscar) ||
        receta.ingredientes.toLowerCase().includes(valorABuscar)  // quiero que también me filtre en los ingredientes, por eso he puesto ||
    );
    console.log(recetasFiltradas)
    renderRecetas(recetasFiltradas)
}

document.getElementById("searchInput").addEventListener("input", filtrarRecetas);
//results = datos.filter(receta => receta.nombre.includes (valorBuscar) )

renderRecetas(recetas);