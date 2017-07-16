/**
 * Created by Wence on 15/7/17.
 */


// Galeria

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "flex";
}

// Controlar las 150 palabras

function contarPalabras() {


    var comentario = document.getElementById('comentario-libre');
    var filtrado = comentario.value.split(" ");
    console.log("el total de palarbas con espacios "+filtrado.length);
    var contador = filtrado.filter(e => String(e).trim());

    if (contador.length > 150) {
        alert("No puedes escribir más de 150 palabras");
        console.log("el total de palabras sin espacios es : -> " + contador.length);
        return false;
    }
    else {
        console.log("el total de palabras sin espacios es : -> " + contador.length);

    }
}