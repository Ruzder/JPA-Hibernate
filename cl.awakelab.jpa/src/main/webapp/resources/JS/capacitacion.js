document.addEventListener("DOMContentLoaded", function() {
	document.getElementById("Fcapacitacion").addEventListener('submit', valida_form_cap);
});



function valida_form_cap(evento) {

	evento.preventDefault();
	let fecha = document.getElementById('fecha').value;
	const fecha_actual = new Date();

	let hora = document.getElementById('hora').value;
	let lugar = document.getElementById('lugar').value;
	let duracion = document.getElementById('duracion').value;
	let rutCliente = document.getElementById('rutCliente').value;

	if (fecha != "") {
		if (hora != "") {
			if (lugar.trim().length > 0) {
				//alert("lugar: " + lugar.length);
				if (duracion > 0) {
					if (rutCliente >= 1111111 && rutCliente <= 99999999) {

					} else {
						alert("Por favor ingrese un rut valido");
						document.getElementById('rutCliente').focus();
						return;
					}

				} else {
					alert("Por favor ingrese un numero mayor a 0 en duracion");
					document.getElementById('duracion').focus();
					return;
				}
			} else {

				alert("Por favor ingrese lugar");
				document.getElementById('lugar').focus();
				return;
			}

		} else {
			alert("Por favor ingrese una hora valida");
			document.getElementById('hora').focus();
			return;
		}
	} else {
		alert("Por favor ingrese una fecha valida");
		document.getElementById('fecha').focus();
		return;
	}
	
	this.submit();


}