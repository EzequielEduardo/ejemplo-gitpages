for (let index = 0; index < 10; index++) {
    console.log(index)
    
}
function saludar() {
var User = document.getElementById("txtUser").value;
var Pass = document.getElementById("txtPass").value;
alert("Te damos la vienvenida " + User);
console.log("tu pasword no es secreto, mira: " + Pass);

}

function sumar() {
var n1 = parseInt(document.getElementById("txtUser").value);
var n2 = parseInt(document.getElementById("txtPass").value);
alert("Te damos la vienvenida " +(n1+n2));
}