function helloWorld(){
    alert("Hello World")
}

    /* VAR =  Escopo global
    LET = Escopo local
    CONST = COnstante - Escopo global
    */


let nome = document.getElementById("nome")

function enviar(){
    alert("Olá" + nome.value)
}