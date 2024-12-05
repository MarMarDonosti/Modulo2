const boton_suma = document.getElementById("suma");
const boton_resta = document.getElementById("resta");
const boton_multi = document.getElementById("multi");
const boton_division = document.getElementById ("division");
const tasksContainer = document.getElementById("result"); // hace referencia al div crado para contener lo que pintamos
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");

boton_suma.addEventListener ('click', () =>{

    suma = parseFloat(num1.value) + parseFloat(num2.value); // En vez de parseFloat se puede poner Number (es más nuevo)
    tasksContainer.innerHTML = `El resultado es ${suma}`
});

boton_resta.addEventListener ('click', () =>{

    resta = parseFloat(num1.value) - parseFloat(num2.value);
    tasksContainer.innerHTML = `El resultado es ${resta}`
});
boton_multi.addEventListener ('click', () =>{

    //multi = parseFloat(num1.value) * parseFloat(num2.value);
    //tasksContainer.innerHTML = `El resultado es ${multi}`
    let num1 = Number(num1.value);
    let num2 = Number(num2.value);
    if (isNaN(primero) || isNaN(segundo)){
        alert('por favor introduce valor válido');
    }else{
        if (segundo == 0){
            alert ('no se puede dividir entre 0');
        }
        else {
            let resultado =`la división es igual a: ${primero}/${segundo}`;
            tasksContainer.innerHTML = resultado;
        }
    }

});
boton_division.addEventListener ('click', () =>{

    division = parseFloat(num1.value) / parseFloat(num2.value);
    tasksContainer.innerHTML = `El resultado es ${division}`
});