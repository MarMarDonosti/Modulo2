const num1 = document.getElementById("nume1");
const num2 = document.getElementById("nume2");

const botonS = document.getElementById("suma");
const botonR = document.getElementById("resta");
const botonM = document.getElementById("multi");
const botonD = document.getElementById("division");

const div_resultado = document.getElementById("casilla-resultado");


//--------------suma------------//
botonS.addEventListener("click", () => {
    let primero = Number(num1.value);
    let segundo = Number(num2.value);

    if (isNaN(primero) || isNaN(segundo)) {
        alert ('por favor, introduce valores validos');
    }
    else {
        let resultado = `La suma es igual a: ${primero + segundo}`
        div_resultado.innerHTML = resultado;
    }
}) 

//-------------resta-----------//
botonR.addEventListener("click", () => {
    let primero = Number(num1.value);
    let segundo = Number(num2.value);
    if (isNaN(primero)||isNaN(segundo)){
        alert (`por favor intruduce valor valido`);
    }else {
        let resultado = `La resta es igual a: ${primero - segundo}`
        div_resultado.innerHTML =resultado;
    }
})

//-------------MULTIPLICACION-----------//
botonM.addEventListener("click", () => {
    let primero = Number(num1.value);
    let segundo = Number(num2.value);
    if (isNaN(primero)||isNaN(segundo)){
        alert (`por favor intruduce valor valido`);
    }else {
        let resultado = `La multiplicación es igual a: ${primero * segundo}`
        div_resultado.innerHTML =resultado;
    }
})

//-------------division-----------//
botonD.addEventListener("click", () => {
    let primero = Number(num1.value);
    let segundo = Number(num2.value);
    if (isNaN(primero)||isNaN(segundo)){
        alert (`por favor intruduce valor valido`);

    }else {
        if (segundo == 0){
            alert (`No se puede dividir entre 0`)
        }
        else {
            let resultado = `La division es igual a: ${primero / segundo}`
            div_resultado.innerHTML =resultado;
        }
    }
})

// Botón para limpiar los campos de entrada y el área de resultados
const botonC = document.getElementById ("limpiar");

botonC.addEventListener('click', () =>{
    num1.value = "";
    num2.value = "";
    div_resultado.innerHTML = "";
});