<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="./multimedia/imagenes/logo.png">

    <!-- JQuery -->
    <script src="./js/jquery/jquery.min.js"></script>

    <!-- SweetAlert -->
    <script src="./js/sweetalert/sweetalert2.min.js"></script>

    <!-- Bootstrap -->
    <link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css">
    <script src="./js/bootstrap/bootstrap.min.js"></script>

    <!-- Propio -->
    <link rel="stylesheet" href="./css/estilos.css">
    
    <title>Aprendamos las vocales</title>

</head>
<body>

    <div class="mt-2 mb-2 text-center">

        <audio src="./multimedia/audios/pregunta.ogg" controls autoplay></audio>

    </div>

    <input id="texto" type="button" value="" class="d-none" style="border: none;">

    <div class="row justify-content-center aling-item-center" style="width: 99%; height: 90vh;">

        <button id="btnReproducir" class="btn btn-none" onclick="iniciarDetenerGrabacion()"><img src="./css/iconos/play.svg" id="iReproducir" alt="iReproducir" width="100px" height="100px"></button>
        
    </div>

</body>

<footer>

    <div class="bg-dark fw-bold text-white text-center p-1">

        <span class="mb-0">AprendamosABC. <?php echo date('Y');  ?></span>

    </div>

</footer>

<script src="./js/preguntar.js"></script>

</html>