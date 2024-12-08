let currentInput = "";
let operator = "";
let firstValue = "";

function appendNumber(number) {
  currentInput += number;
  document.getElementById("display").value = currentInput;
}

function appendOperator(op) {
  if (currentInput !== "") {
    firstValue = currentInput;
    operator = op;
    currentInput = "";
  }
}

function clearDisplay() {
  currentInput = "";
  firstValue = "";
  operator = "";
  document.getElementById("display").value = "";
}

function calculateResult() {
  if (firstValue !== "" && currentInput !== "") {
    let result;
    const num1 = parseFloat(firstValue);
    const num2 = parseFloat(currentInput);

    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          result = "Error"; // No se puede dividir entre cero
        } else {
          result = num1 / num2;
        }
        break;
      default:
        result = "Error";
    }

    document.getElementById("display").value = result;
    currentInput = result.toString();
    firstValue = "";
    operator = "";
  }
}
