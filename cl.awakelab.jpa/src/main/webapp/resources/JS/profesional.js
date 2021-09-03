document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FEditProf").addEventListener('submit', valida_form_prof);
});

function valida_form_prof(evento) {
    evento.preventDefault();

    let anios_exp = document.getElementById('anios_exp').value;
    let departamento = document.getElementById('departamento').value;
    let titulo = document.getElementById('titulo').value;
    let fecha_in = document.getElementById('fecha').value;

    if (anios_exp < 0) {
        alert("años de experiencia debe ser mayor o igual a 0");
        document.getElementById('anios_exp').focus();
        return;
    }

    if (departamento.trim().length <= 0) {
        alert("Ingrese departamento");
        document.getElementById('departamento').focus();
        return;
    }

    if (titulo.trim().length <= 0) {
        alert("Ingrese titulo");
        document.getElementById('titulo').focus();
        return;
    }

    if (fecha_in.trim().length <= 0) {
        alert("Ingrese fecha");
        document.getElementById('fecha').focus();
        return;
    }

    this.submit();
}