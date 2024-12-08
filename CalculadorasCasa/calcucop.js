function obtenerNumeros() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    return { num1, num2 };
}

function mostrarResultado(resultado) {
    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}

function sumar() {
    const { num1, num2 } = obtenerNumeros();
    mostrarResultado(num1 + num2);
}

function restar() {
    const { num1, num2 } = obtenerNumeros();
    mostrarResultado(num1 - num2);
}

function multiplicar() {
    const { num1, num2 } = obtenerNumeros();
    mostrarResultado(num1 * num2);
}

function dividir() {
    const { num1, num2 } = obtenerNumeros();
    if (num2 !== 0) {
        mostrarResultado(num1 / num2);
    } else {
        mostrarResultado("No se puede dividir por cero");
    }
}
