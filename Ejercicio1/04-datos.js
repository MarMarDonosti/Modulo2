/*Mostrar la información
Añadir un evento al botón de tipo click -- adEventListener()
Crear el código html con innerHTML*/
console.log("DATOS");

enviar.addEventListener(`click`, ()=> {
    console.log("despues de clic");
    var nombre = document.getElementById ("nombre").value;
    var edad = document.getElementById ("edad").value;
    const seccion = document.getElementById ("datos"); //id datos es el nombre que le he dado a la sección
    
    const nuevo = document.createElement("div");
    //innerHTML porque quiero que me cree <p>
    nuevo.innerHTML = `<p>${nombre} tiene: <span>${edad}</span> años</p>`;
    console.log("casifinal");
    seccion.appendChild(nuevo);
})




