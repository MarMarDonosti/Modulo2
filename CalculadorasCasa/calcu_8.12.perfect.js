const num1 = document.getElementById("nume1");
const num2 = document.getElementById("nume2");

const botonS = document.getElementById("suma");
const botonR = document.getElementById("resta");
const botonM = document.getElementById("multi");
const botonD = document.getElementById("division");

const div_resultado = document.getElementById("casilla-resultado");

// Función de validación común
function validarEntradas() {
    let primero = Number(num1.value);
    let segundo = Number(num2.value);

    if (isNaN(primero) || isNaN(segundo)) {
        alert('Por favor, introduce valores válidos');
        return false;
    }

    return { primero, segundo };
}

//--------------Suma------------//
botonS.addEventListener("click", () => {
    const { primero, segundo } = validarEntradas();
    if (primero !== undefined && segundo !== undefined) {
        let resultado = `La suma es igual a: ${primero + segundo}`;
        div_resultado.innerHTML = resultado;
    }
});

//-------------Resta-----------//
botonR.addEventListener("click", () => {
    const { primero, segundo } = validarEntradas();
    if (primero !== undefined && segundo !== undefined) {
        let resultado = `La resta es igual a: ${primero - segundo}`;
        div_resultado.innerHTML = resultado;
    }
});

//-------------Multiplicación-----------//
botonM.addEventListener("click", () => {
    const { primero, segundo } = validarEntradas();
    if (primero !== undefined && segundo !== undefined) {
        let resultado = `La multiplicación es igual a: ${primero * segundo}`;
        div_resultado.innerHTML = resultado;
    }
});

//-------------División-----------//
botonD.addEventListener("click", () => {
    const { primero, segundo } = validarEntradas();
    if (primero !== undefined && segundo !== undefined) {
        if (segundo === 0) {
            alert("No se puede dividir entre 0");
        } else {
            let resultado = `La división es igual a: ${primero / segundo}`;
            div_resultado.innerHTML = resultado;
        }
    }
});
