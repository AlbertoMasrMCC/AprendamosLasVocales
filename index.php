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

    <!-- Propio -->
    <link rel="stylesheet" href="./css/estilos.css">
        
    <title>Aprendamos las vocales</title>

</head>
<body>

    <div class="mt-2 mb-2 text-center">

        <audio id="audioBienvenida" src="./multimedia/audios/bienvenida.ogg" controls></audio>

    </div>

    <div class="row justify-content-center" style="width: 99%">

        <div class="col-11">

            <div class="row justify-content-around mb-4 mt-2">

                <div id="divVocalA" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <div class="text-center mt-2">

                        <img src="./multimedia/imagenes/Aa.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal A">

                    </div>

                    <audio id="audioVocalA" src="./multimedia/audios/Aa.ogg"></audio>

                </div>

                <div id="divVocalE" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <div class="text-center mt-2">

                        <img src="./multimedia/imagenes/Ee.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal E">

                    </div>

                    <audio id="audioVocalE" src="./multimedia/audios/Ee.ogg"></audio>

                </div>

                <div id="divVocalI" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <div class="text-center mt-2">

                        <img src="./multimedia/imagenes/Ii.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal I">
                    
                    </div>

                    <audio id="audioVocalI" src="./multimedia/audios/Ii.ogg"></audio>

                </div>

            </div>

            <div class="row justify-content-around mt-4">

                <div id="divVocalO" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <div class="text-center mt-2">

                        <img src="./multimedia/imagenes/Oo.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal O">

                    </div>

                    <audio id="audioVocalO" src="./multimedia/audios/Oo.ogg"></audio>

                </div>

                <div id="divVocalU" class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <div class="text-center mt-2">

                        <img src="./multimedia/imagenes/Uu.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal U">

                    </div>

                    <audio id="audioVocalU" src="./multimedia/audios/Uu.ogg"></audio>

                </div>

            </div>

        </div>

        <div class="col-1 align-self-center">
            
            <a href="preguntar.php"><img src="./css/iconos/arrow-right-circle.svg" id="iJugar" alt="iJugar" width="50px" height="50px"></a>

        </div>

    </div>

</body>
<footer>

    <div class="bg-dark fw-bold text-white text-center p-1">

        <span class="mb-0">AprendamosABC. <?php echo date('Y');  ?></span>

    </div>

</footer>
<script src="./js/index.js"></script>
</html>
