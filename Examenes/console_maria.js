
        // MARIA MARQUES GAMBOA

//SUMAS

function sumar(num1, num2) {
    const resultado = num1 + num2;
    console.log(`${num1} + ${num2} = ${resultado}`);
}

  sumar(2, 4); // Indicar primer número y segundo número a sumar

//RESTAS

function restar(num1, num2) {
    const resultado = num1 - num2;
    console.log(`${num1} - ${num2} = ${resultado}`);
}

  restar(2, 4); // Indicar primer número y segundo número a sumar

//MULTIPLICACIONES

function multiplicar(num1, num2) {
    const resultado = num1 * num2;
    console.log(`${num1} x ${num2} = ${resultado}`);
}

  multiplicar(2, 4); // Indicar primer número y segundo número a sumar

//DIVISIONES


function dividir(num1, num2) {
    if (num2 === 0) {
        console.log("Error: No se puede dividir entre cero, el mundo, o al menos tu ordenador, podría implosionar.");
    } else {
        const resultado = num1 / num2;
        console.log(`${num1} / ${num2} = ${resultado}`);
    }
}

dividir(2, 0); // Indicar primer número y segundo número a dividir
