<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="shortcut icon" href="./multimedia/imagenes/logo.png">
    
    <!-- Lógica difusa -->
    <script src="./js/logicaDifusa/fuzzy.min.js"></script>

    <!-- JQuery -->
    <script src="./js/jquery/jquery.min.js"></script>
    
    <!-- Bootstrap -->
    <link rel="stylesheet" href="./css/bootstrap/bootstrap.min.css">
    <script src="./js/bootstrap/bootstrap.min.js"></script>

    <!-- SweetAlert -->
    <script src="./js/sweetalert/sweetalert2.min.js"></script>

    <!-- Propio -->
    <link rel="stylesheet" href="./css/estilos.css">
        
    <title>Aprendamos las vocales</title>

</head>

<?php

    $complejidad = $_GET['complejidad'];

?>

<header>

    <nav class="navbar">

        <div class="container-fluid">

            <div style="width: 40%;">

                <img src="./multimedia/imagenes/logo.png" alt="AprendamosABC" width="100" height="100">

            </div>

            <div class="d-flex justify-content-around" style="width: 40%;">

                <div class="d-flex align-items-center">

                    <a href="" data-bs-toggle="modal" data-bs-target="#ayudasModal" onclick="ayudas()">
                        <img src="./multimedia/imagenes/foco-apagado.png" id="iAyuda" alt="iAyuda" width="75px" height="75">
                    </a>
                    <p id="ayuda" class="ms-2 pt-3">0</p>
                
                </div>

                <div class="d-flex align-items-center">

                    <img src="./multimedia/imagenes/errores.png" id="iError" alt="iError" width="75px" height="75">
                    <p id="error" class="ms-2 pt-3">0</p>
                
                </div>

                <div class="d-flex align-items-center">

                    <img src="./multimedia/imagenes/tiempo.png" id="iTiempo" alt="iTiempo" width="65px" height="65">
                    <p id="tiempo" class="ms-2 pt-3">00:00</p>
                
                </div>

            </div>
            
        </div>

    </nav>

</header>
<body onload="reloj()">

    <!-- ALMACENAMOS LA COMPLEJIDAD -->
    <input type="hidden" id="complejidad" value="<?php echo $complejidad ?>">

    <!-- Modal -->
    <div class="modal fade" id="ayudasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">

        <div class="modal-dialog">

            <div class="modal-content">

                <div class="modal-header">
                    <img src="./css/iconos/info-circle.svg" alt="ayuda" width="30px" height="30px">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">
                    
                    <?php

                    if($complejidad == "1")
                    {

                    ?>

                    <div class="text-center">

                        <audio id="ayuda1" controls></audio>

                    </div>

                    <?php

                    }
                        
                    if($complejidad == "2")
                    {

                    ?>

                    <div class="text-center">

                        <p id="ayuda1">Se deshabilitó una de las imagenes</p>

                    </div>

                    <?php

                    }
                        
                    if($complejidad == "3")
                    {

                    ?>

                        <div class="container">

                            <div class="row">

                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda1"></p>
                                    <audio src="" class="mb-2" id="AAyuda1" controls></audio>

                                </div>

                                <hr>
                                
                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda2"></p>
                                    <audio src="" class="mb-2" id="AAyuda2" controls></audio>

                                </div>

                                <hr>

                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda3"></p>
                                    <audio src="" class="mb-2" id="AAyuda3" controls></audio>

                                </div>

                                <hr>

                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda4"></p>
                                    <audio src="" class="mb-2" id="AAyuda4" controls></audio>

                                </div>

                                <hr>

                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda5"></p>
                                    <audio src="" class="mb-2" id="AAyuda5" controls></audio>

                                </div>

                                <hr>

                            </div>

                            <div class="row">

                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda6"></p>
                                    <audio src="" class="mb-2" id="AAyuda6" controls></audio>

                                </div>

                                <hr>
                                
                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda7"></p>
                                    <audio src="" class="mb-2" id="AAyuda7" controls></audio>

                                </div>

                                <hr>

                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda8"></p>
                                    <audio src="" class="mb-2" id="AAyuda8" controls></audio>

                                </div>

                                <hr>

                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda9"></p>
                                    <audio src="" class="mb-2" id="AAyuda9" controls></audio>

                                </div>

                                <hr>

                                <div class="d-flex justify-content-around">

                                    <p class="mb-0 align-self-center" id="PAyuda10"></p>
                                    <audio src="" class="mb-2" id="AAyuda10" controls></audio>

                                </div>

                            </div>  

                        </div>

                    <?php

                        }

                    ?>

                </div>

                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
                </div>

            </div>

        </div>

    </div>

    <div class="container text-center" style="height: 80vh; padding-top: 100px;">

        <div class="row align-items-center" style="height: 10%;">

            <div class="col ms-4 me-4 text-center"> 

                <?php

                    if($complejidad == "1")
                    {
 
                ?>

                    <audio id="pregunta1" src="./multimedia/audios/selecciona-vocal.ogg" controls></audio>
                <?php

                    }
                    else
                        if($complejidad == "3")
                        {

                    ?>

                        <audio id="pregunta1" src="./multimedia/audios/escribe-vocal.ogg" controls></audio>

                    <?php

                        }

                    ?>

            </div>

        </div>

        <div class="row align-items-center" style="height: 60%;">

            <div class="col ms-4 me-4 text-center">

                <?php

                if($complejidad == "1" || $complejidad == "3")
                {

                ?>

                    <img id="pregunta2" alt="" width="250px" height="auto">

                <?php

                }
                else
                    if($complejidad == "2")
                    {

                ?>

                    <audio id="pregunta2" controls></audio>

                <?php

                    }

                ?>

            </div>

        </div>

        <div class="row align-items-center" style="height: 10%;">

            <div class="col ms-4 me-4 text-center">

                <?php

                if($complejidad == "1" || $complejidad == "2")
                {

                ?>

                    <div class="row justify-content-center">

                        <div class="card border-dark ms-3 mt-3 col-2 tarjetaRespuesta">

                            
                            <a href="#"><img id="respuesta1" class="card-img-top ms-2 me-2" onclick="evaluarRespuesta(1)"></a>

                        </div>

                        <div class="card border-dark ms-3 mt-3 col-2 tarjetaRespuesta">

                            <a href="#"><img id="respuesta2" class="card-img-top ms-2 me-2" onclick="evaluarRespuesta(2)"></a>

                        </div>

                        <div class="card border-dark ms-3 mt-3 col-2 tarjetaRespuesta">

                            <a href="#"><img id="respuesta3" class="card-img-top ms-2 me-2" onclick="evaluarRespuesta(3)"></a>
                            
                        </div>

                        <div class="card border-dark ms-3 mt-3 col-2 tarjetaRespuesta">

                            <a href="#"><img id="respuesta4" class="card-img-top ms-2 me-2" onclick="evaluarRespuesta(4)"></a>

                        </div>

                        <div class="card border-dark ms-3 mt-3 col-2 tarjetaRespuesta">

                            <a href="#"><img id="respuesta5" class="card-img-top ms-2 me-2" onclick="evaluarRespuesta(5)"></a>

                        </div>

                    </div>

                <?php

                }
                else
                    if($complejidad == "3")
                    {

                ?>

                    <!-- Se crearán TextArea de manera dinámica -->
                    <div id="respuestaNivelDificil" class="col ms-4 me-4 mb-2 text-center"></div>

                    <button type="button" class="btn btn-outline-dark mt-2" onclick="evaluarRespuesta(0)">OK</button>

                <?php

                    }

                ?>

            </div>

        </div>

    </div>

</body>
<footer>

    <div class="bg-dark fw-bold text-white text-center p-1">

        <span class="mb-0">AprendamosABC. <?php echo date('Y');  ?></span>

    </div>

</footer>

<!-- Propio -->
<script src="./js/eventos.js"></script>

</html>