/**
 * Created by Wence on 16/7/17.
 */

// Función para contar el número de palabras, elimino los espacios en blanco y los descuento del total del array

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