document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FEditAdmin").addEventListener('submit', valida_form_adm);
});

function valida_form_adm(evento) {
    evento.preventDefault();

    let nombreSup = document.getElementById('nombre_sup').value;
    let area = document.getElementById('area').value;
    let exp_prev = document.getElementById('exp_prev').value;
    let funcion = document.getElementById('funcion').value;

    if (nombreSup.trim().length > 0) {
        if (area.trim().length > 0) {
            if (exp_prev.trim().length > 0) {
                if (funcion.trim().length > 0) {

                } else {
                    alert("Ingrese funcion");
                    document.getElementById('funcion').focus();
                    return;
                }
            } else {
                alert("Ingrese experiencia previa");
                document.getElementById('exp_prev').focus();
                return;
            }
        } else {
            alert("Ingrese area");
            document.getElementById('area').focus();
            return;
        }
    } else {
        alert("Ingrese nombre");
        document.getElementById('nombre_sup').focus();
        return;
    }

    this.submit();
}