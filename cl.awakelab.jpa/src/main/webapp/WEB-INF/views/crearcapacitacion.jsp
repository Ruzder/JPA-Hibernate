<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!doctype html>
<html lang="es">
<head>
<!-- Required meta tags -->
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Bootstrap CSS -->
<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
	crossorigin="anonymous">
<link rel="stylesheet"
	href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
<link rel="shortcut icon"
	href="https://raw.githubusercontent.com/Ruzder/grupal/main/icono.com%20(1).png">
<script
	src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js "
	integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM "
	crossorigin="anonymous "></script>
<link
	href="${pageContext.request.getContextPath()}/resources/css/estiloNEW.css"
	rel="stylesheet" type="text/css">
<title>Capacitacion</title>
</head>
<body>
	<header
		class="container-fluid bg-primary d-flex justify-content-center">
		<p class="text-light mb-0 p-2 fs-6">Contactanos +56 9 3641 7409</p>
	</header>
	<jsp:include page="menu.jsp"></jsp:include>
	<!-- imagen principal -->

	<div class="fondo">
		<h1>Zurita & Seguridad</h1>
		<h2>Somos seguridad y bienestar de tus equipos de trabajo</h2>
	</div>
	<!-- cuerpo de trabajo  -->
	<div class="container">
		<div class="contact-box">
			<div class="left1"></div>
			<div class="right">
				<h2>Formulario de Capacitación</h2>
				<form
					action="${pageContext.request.getContextPath()}/crearcapacitacion"
					method="post">
					<div class="mb-3">
						<label for="id" class="form-label">Id</label> <input
							type="number" class="form-control" id="idTxt"
							name="idTxt">
					</div>
					
					<div class="mb-3">
						<label for="dia" class="form-label">Dia</label> <input type="text"
							class="form-control" id="diaTxt" name="diaTxt">
						<!-- se cambio el type = date por string para el ejercicio -->
					</div>
					<div class="mb-3">
						<label for="hora" class="form-label">Hora</label> <input
							type="text" class="form-control" id="horaTxt" name="horaTxt">
						<!-- se cambio el type = date por string para el ejercicio -->
					</div>
					<div class="mb-3">
						<label for="lugar" class="form-label">lugar</label> <input
							type="text" class="form-control" id="lugarTxt" name="lugarTxt">
					</div>
					<div class="mb-3">
						<label for="duracion" class="form-label">duracion</label> <input
							type="text" class="form-control" id="duracionTxt" name="duracionTxt">
					</div>
					<div class="mb-3">
						<label for="rutCliente" class="form-label">rutCliente</label> <input
							type="number" class="form-control" id="rutTxt"
							name="rutTxt">
					</div>
					<button type="submit" class="btn btn-primary">Crear</button>
					<button type="reset" class="btn btn-secondary">Reset</button>
				</form>
			</div>
		</div>
	</div>
	<!-- footer  -->
	<jsp:include page="footer.jsp"></jsp:include>
	<script
		src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
	<script src="./js/capacitacion.js"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
		integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"
		integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p"
		crossorigin="anonymous"></script>
	<script
		src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js"
		integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF"
		crossorigin="anonymous"></script>
</body>
</html>