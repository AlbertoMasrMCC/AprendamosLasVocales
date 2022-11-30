<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="./multimedia/imagenes/logo.png">

    <!-- Bootstrap -->
    <link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css">
    <script src="./js/bootstrap/bootstrap.min.js"></script>
    
    <title>Aprendamos las vocales</title>

</head>
<body>

    <input type="hidden" id="apertura" class="d-none" value="<?php echo $_GET['apertura'] ?>">
    <input type="hidden" id="responsabilidad" class="d-none" value="<?php echo $_GET['responsabilidad'] ?>">
    <input type="hidden" id="sociabilidad" class="d-none" value="<?php echo $_GET['sociabilidad'] ?>">
    <input type="hidden" id="amabilidad" class="d-none" value="<?php echo $_GET['amabilidad'] ?>">
    <input type="hidden" id="neuroticismo" class="d-none" value="<?php echo $_GET['neuroticismo'] ?>">

    <div class="position-absolute top-50 start-50 translate-middle">

        <h1 id="contador" class="display-1 fw-bold text-dark"></h1>

    </div>

</body>
<script src="./js/splash_screen.js"></script>
</html>