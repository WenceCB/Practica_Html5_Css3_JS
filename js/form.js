/**
 * Created by Wence on 9/7/17.
 */

 // Función para simular el envío de información del contacto

var form = document.getElementsByTagName('form')[0];
console.log(form);

var submitButton = document.getElementById('Enviar');


var loadingIcon =  document.createElement('i');
loadingIcon.classList.add("fa", "fa-spinner", "fa-spin");

form.addEventListener('submit', function (event) {

    submitButton.setAttribute("disabled","");
    submitButton.appendChild(loadingIcon);
    event.preventDefault();


    setTimeout(function () {
        submitButton.removeAttribute("disabled");
        submitButton.removeChild(loadingIcon);
        $('#contacto-recibido').show().addClass('contacto-animacion');
    }, 1000);
});