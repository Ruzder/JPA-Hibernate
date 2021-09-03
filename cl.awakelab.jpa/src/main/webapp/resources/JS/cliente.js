document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FEditCliente").addEventListener('submit', valida_form_cli);
});

function valida_form_cli(evento) {
    evento.preventDefault();

    let direccion = document.getElementById('direccion').value;
    let comuna = document.getElementById('comuna').value;
    let cantEmpleados = document.getElementById('cant_e').value;
    let telefono = document.getElementById('tel_c').value;
    let razonSocial = document.getElementById('razon').value;

    if (direccion.trim().length > 0) {
        if (comuna.trim().length > 0) {
            if (cantEmpleados > 0) {
                if (telefono.trim().length > 0) {
                    if (razonSocial.trim().length > 0) {

                    } else {
                        alert("Ingrese razon social");
                        document.getElementById('razon').focus();
                        return;
                    }
                } else {
                    alert("Ingrese un telefono");
                    document.getElementById('tel_c').focus();
                    return;
                }
            } else {
                alert("Ingrese una cantidad de empleados mayor a 0");
                document.getElementById('cant_e').focus();
                return;
            }
        } else {
            alert("Ingrese una comuna valida");
            document.getElementById('comuna').focus();
            return;
        }
    } else {
        alert("Ingrese una direccion valida");
        document.getElementById('direccion').focus();
        return;
    }
    this.submit();

}