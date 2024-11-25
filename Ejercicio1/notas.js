console.log("FUNCIONA")

//var valor_nota = document.getElementById("nota1").value; //document recoge el elemento con ese id y var guarda el valor. Value me pide la nota
                        // getElementById --> pide q obtenga el elemento de lo que está entre paréntesis
 

function calcular_nota (nota){
    if (nota < 5) {
        result="Suspendido";
    }
    else if (nota < 6) {
        result="Suficiente";
    }
    else if (nota < 7) {
        result="Bien";
    }
    else if (nota < 9) {
        result="Notable";
    }
    else if (nota <=10) {
        result="Sobresaliente";
        if (nota == 10) {
            result +="\nMatrícula de Honor";
        }
    }
    else {
        result = "La nota no es correcta";
    }
    return result;
    }


var boton = document.getElementById("calcular");

boton.addEventListener("click", ()=> {
    var nombre = document.getElementById("nombre").value;
    var nota1 = parseFloat(document.getElementById("nota1").value); //no hace falta parseFloat si en el input le digo que es de tipo numer en vez de text
    var nota2 = parseFloat(document.getElementById("nota2").value);
    var media = (nota1 + nota2) / 2;
    if (0<= media && media <= 10) {
        resultado = calcular_nota(media);
        document.getElementById("resultado").innerText =nombre+", has sacado un: "+resultado
        var elemento_resultado = document.getElementById("resultado");
        //elemento_resultado.innerText =resultado;
        elemento_resultado.style.backgroundColor = 'white';
        elemento_resultado.style.fontWeight = 'bold';
        elemento_resultado.style.fontSize = '1.3em';
        elemento_resultado.style.fontFamily = 'Lucida Sans';
    }
    else alert("Nota no válida");
    }); //Cuando haga clic en el botón va a ocurrir lo que le pido