document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("Fcontacto").addEventListener('submit', valida_form_cont);
});


function valida_form_cont(evento) {

    evento.preventDefault();

    let nombre = document.getElementById('nombre').value;
    let email = document.getElementById('email').value;
    let telefono = document.getElementById('telefono').value;
    let mensaje = document.getElementById('mensaje').value;

    if (nombre.trim().length < 1) {
        alert("Ingrese nombre");
        document.getElementById('nombre').focus();
        return;
    }

    if (email.trim().length < 1) {
        alert("Ingrese un correo");
        document.getElementById('email').focus();
        return;
    }

    if (telefono.trim().length < 1) {
        alert("Ingrese un telefono");
        document.getElementById('telefono').focus();
        return;
    }

    if (mensaje.trim().length < 1) {
        alert("Ingrese un mensaje");
        document.getElementById('mensaje').focus();
        return;
    }


    this.submit();
}