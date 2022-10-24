<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css">
    <script src="./js/bootstrap/bootstrap.min.js"></script>

    <!-- Propio -->
    <link rel="stylesheet" href="./css/estilos.css">
        
    <title>Aprendamos las vocales</title>

</head>
<body>

    <p class="h1 text-center">¡JUGUEMOS A APRENDER!</p>

    <div class="row justify-content-center" style="width: 99%">

        <div class="col-11">

            <div class="row justify-content-center">

                <div class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <img src="./multimedia/imagenes/Aa.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal A">

                    <div class="card-body ps-0">

                        <audio src="./multimedia/audios/Aa.ogg" controls></audio>

                    </div>

                </div>

                <div class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <img src="./multimedia/imagenes/Ee.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal E">

                    <div class="card-body ps-0">

                        <audio src="./multimedia/audios/Ee.ogg" controls></audio>

                    </div>

                </div>

                <div class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <img src="./multimedia/imagenes/Ii.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal I">
                    
                    <div class="card-body ps-0">

                        <audio src="./multimedia/audios/Ii.ogg" controls></audio>

                    </div>

                </div>

            </div>

            <div class="row justify-content-center">

                <div class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <img src="./multimedia/imagenes/Oo.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal O">

                    <div class="card-body ps-0">

                        <audio src="./multimedia/audios/Oo.ogg" controls></audio>

                    </div>

                </div>

                <div class="card border-dark ms-3 mt-3 shadow col-2 tarjeta">

                    <img src="./multimedia/imagenes/Uu.png" class="card-img-top imagenesVocales ms-2 me-2" alt="Vocal U">

                    <div class="card-body ps-0">

                        <audio src="./multimedia/audios/Uu.ogg" controls></audio>

                    </div>

                </div>

            </div>

        </div>

        <div class="col-1 align-self-center">
            
            <a href="splash_screen.html"><img src="./css/iconos/arrow-right-circle.svg" id="iJugar" alt="iJugar" width="50px" height="50px"></a>

        </div>

    </div>

</body>
<footer>

    <div class="bg-light text-center p-1">

        <span class="mb-0">AprendamosABC. <?php echo date('Y');  ?></span>

    </div>

</footer>
</html>