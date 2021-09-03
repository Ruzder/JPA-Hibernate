document.getElementById('tipo_c').style.display = 'none';
document.getElementById('tipo_p').style.display = 'none';
document.getElementById('tipo_a').style.display = 'none';

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("FUsuario").addEventListener('submit', valida_form_usu);
});



function tipoUsuario() {
    let tipo = document.getElementById('tipo_u').value;
    let cliente = document.getElementById('tipo_c');
    let profesional = document.getElementById('tipo_p');
    let administrativo = document.getElementById('tipo_a');

    if (tipo == 1) {
        profesional.style.display = 'none';
        administrativo.style.display = 'none';
        cliente.style.display = 'block';
    } else if (tipo == 2) {
        cliente.style.display = 'none';
        administrativo.style.display = 'none';
        profesional.style.display = 'block';
    } else if (tipo == 3) {
        cliente.style.display = 'none';
        profesional.style.display = 'none';
        administrativo.style.display = 'block';
    } else {
        cliente.style.display = 'none';
        profesional.style.display = 'none';
        administrativo.style.display = 'none';
    }

}


function valida_form_usu(evento) {

    evento.preventDefault();

    let nombres = document.getElementById('nombres').value;
    let apellidos = document.getElementById('apellidos').value;
    let fecha_n = document.getElementById('fecha').value;
    let run = document.getElementById('run').value;

    let tipo = document.getElementById('tipo_u').value;

    if (nombres.trim().length < 1) {
        alert("Ingrese nombres");
        document.getElementById('nombres').focus();
        return;
    }
    if (apellidos.trim().length < 1) {
        alert("Ingrese apellidos");
        document.getElementById('apellidos').focus();
        return;
    }

    if (fecha_n.trim().length < 1) {
        alert("Ingrese fecha de nacimiento");
        document.getElementById('fecha').focus();
        return;
    }

    if (run.trim().length < 1) {
        alert("Ingrese run");
        document.getElementById('run').focus();
        return;
    }

    //validacion de campos segun tipo
    if (tipo == 1) {
        //validar campos cliente
        let rut = document.getElementById('rut').value;
        let direccion = document.getElementById('direccion').value;
        let comuna = document.getElementById('comuna').value;
        let cantEmpleados = document.getElementById('cant_e').value;
        let telefono = document.getElementById('tel_c').value;
        let razonSocial = document.getElementById('razon').value;

        if (rut.trim().length > 1) {

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
        } else {
            alert("Ingrese rut");
            document.getElementById('rut').focus();
            return;
        }

    } else if (tipo == 2) {
        //validar campos profesional
        let anios_exp = document.getElementById('anios_exp').value;
        let departamento = document.getElementById('departamento').value;
        let titulo = document.getElementById('titulo').value;
        let fecha_in = document.getElementById('fecha2').value;

        if (anios_exp < 0 || anios_exp.trim().length < 1) {
            alert("anios de experiencia debe ser mayor o igual a 0");
            document.getElementById('anios_exp').focus();
            return;
        }

        if (departamento.trim().length < 1) {
            alert("Ingrese departamento");
            document.getElementById('departamento').focus();
            return;
        }

        if (titulo.trim().length < 1) {
            alert("Ingrese titulo");
            document.getElementById('titulo').focus();
            return;
        }

        if (fecha_in.trim().length < 1) {
            alert("Ingrese fecha");
            document.getElementById('fecha2').focus();
            return;
        }

    } else if (tipo == 3) {
        //validar campost administrativo
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


    } else {
        alert("Seleccione un tipo de usuario");
        document.getElementById('tipo_u').focus();
        return;
    }


    this.submit();
}