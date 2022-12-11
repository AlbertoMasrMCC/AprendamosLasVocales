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

        <audio src="./multimedia/audios/instrucciones.ogg" controls autoplay></audio>

    </div>

    <input id="texto" type="button" value="" class="d-none" style="border: none;">

    <div class="row justify-content-center" style="width: 99%">

        <div class="row justify-content-around mb-2 mt-2">

            <div id="divSpiderMan" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta" onclick="reproducirInstrucciones()">

                <div class="text-center mt-2">

                    <img src="./multimedia/imagenes/spider-man.png" class="card-img-top imagenesPersonajes ms-2 me-2" alt="Hombre araña">

                </div>

            </div>

            <div id="divSuperMan" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta" onclick="reproducirInstrucciones()">

                <div class="text-center mt-2">

                    <img src="./multimedia/imagenes/superman.png" class="card-img-top imagenesPersonajes ms-2 me-2" alt="Superman">

                </div>

            </div>

            <div id="divMujerMaravilla" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta" onclick="reproducirInstrucciones()">

                <div class="text-center mt-2">

                    <img src="./multimedia/imagenes/mujerMaravilla.png" class="card-img-top imagenesPersonajes ms-2 me-2" alt="Batman">
                
                </div>

            </div>

        </div>

        <div class="row justify-content-around mt-2">

            <div id="divCenicienta" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta" onclick="reproducirInstrucciones()">

                <div class="text-center mt-2">

                    <img src="./multimedia/imagenes/cenicienta.png" class="card-img-top imagenesPersonajes ms-2 me-2" alt="Cenicienta">

                </div>

            </div>

            <div id="divMulan" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta" onclick="reproducirInstrucciones()">

                <div class="text-center mt-2">

                    <img src="./multimedia/imagenes/mulan.png" class="card-img-top imagenesPersonajes ms-2 me-2" alt="Mulan">

                </div>

            </div>

            <div id="divAriel" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta" onclick="reproducirInstrucciones()">

                <div class="text-center mt-2">

                    <img src="./multimedia/imagenes/ariel.png" class="card-img-top imagenesPersonajes ms-2 me-2" alt="Ariel">

                </div>

            </div>

        </div>

        <audio id="preguntaPersonalidad" src="./multimedia/audios/PreguntaPersonalidad.ogg"></audio>
        <audio id="preguntaPersonalidadNuevamente" src="./multimedia/audios/PreguntaPersonalidadNuevamente.ogg"></audio>
        <audio id="preguntaPersonalidadOtra" src="./multimedia/audios/PreguntaPersonalidadOtra.ogg"></audio>

    </div>

</body>

<footer>

    <div class="bg-dark fw-bold text-white text-center p-1">

        <span class="mb-0">AprendamosABC. <?php echo date('Y');  ?></span>

    </div>

</footer>

<script src="./js/preguntar.js"></script>

</html>
