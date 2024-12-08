const num1 = document.getElementById("nume1");
const num2 = document.getElementById("nume2");

const botonS = document.getElementById("suma");
const botonR = document.getElementById("resta");
const botonM = document.getElementById("multi");
const botonD = document.getElementById("division");

const div_resultado = document.getElementById("resultados");


//--------------suma------------//
botonS.addEventListener("click", () => {
    let primero = Number(num1.value);
    let segundo = Number(num2.value);

    if (isNaN(primero) || isNaN(segundo)) {
        alert ('por favor, introduce valor validos');
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
        let resultado = `la resta es igual a: ${primero - segundo}`
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
        let resultado = `la multiplicación es igual a: ${primero * segundo}`
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
            alert (`no se puede dividir entre O`)
        }
        else {
            let resultado = `la division es igual a: ${primero / segundo}`
            div_resultado.innerHTML =resultado;
        }
    }
})

// Diferencia entre Number y parseFloat
const n1 = document.getElementById("numero1");
const div_number = document.getElementById("result_number");
const div_parse = document.getElementById("result_parse");

function ver_diferencias(){
    let uno = n1.value;
    let dos = ''; //el valor esta vacio, me devuelve distinto tambien
    div_number.innerHTML = parseFloat(uno); // parseFloat(dos)  --> NaN
    div_parse.innerHTML = Number(uno);      // Number(dos)      --> 0
}