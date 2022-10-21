<!DOCTYPE html>
<html lang="es">
<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
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
<header>

    <nav class="navbar bg-light">

        <div class="container-fluid">

            <div style="width: 40%;">

                <span class="navbar-brand mb-0 h1">Aprendamos las vocales</span>

            </div>

            <div class="d-flex justify-content-around" style="width: 40%;">

                <div class="d-flex align-items-center">

                    <a href="" data-bs-toggle="modal" data-bs-target="#ayudasModal" onclick="ayudas()">
                        <img src="./css/iconos/question-circle.svg" id="iAyuda" alt="iAyuda" width="25px" height="25">
                    </a>
                    <p id="ayuda" class="ms-2 pt-3">0</p>
                
                </div>

                <div class="d-flex align-items-center">

                    <img src="./css/iconos/bug.svg" id="iError" alt="iError" width="25px" height="25">
                    <p id="error" class="ms-2 pt-3">0</p>
                
                </div>

                <div class="d-flex align-items-center">

                    <img src="./css/iconos/clock.svg" id="iTiempo" alt="iTiempo" width="25px" height="25">
                    <p id="tiempo" class="ms-2 pt-3">00:00</p>
                
                </div>

            </div>
            
        </div>

    </nav>

</header>
<body onload="reloj()">

    <!-- Modal -->
    <div class="modal fade" id="ayudasModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Ayudas</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                ...
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            </div>
            </div>
        </div>
    </div>

    <div class="container text-center" style="height: 80vh;">

        <div class="row align-items-center" style="height: 10%;">

            <div class="col ms-4 me-4 text-center">

                <audio src="./multimedia/audios/Aa.ogg" controls></audio>

            </div>

        </div>

        <div class="row align-items-center" style="height: 80%;">

            <div class="col ms-4 me-4 text-center">

                <img src="./multimedia/imagenes/Aa.png" alt="" width="300px" height="300px">

            </div>

        </div>

        <div class="row align-items-center" style="height: 10%;">

            <div class="col ms-4 me-4 text-center">

                <button type="button" class="btn btn-outline-dark" onclick="aplicarLogicaDifusa()">Enviar</button>

            </div>

        </div>

    </div>

</body>
<footer>

    <div class="bg-light text-center p-1">

        <span class="mb-0">AprendamosABC. <?php echo date('Y');?></span>

    </div>

</footer>
<!-- Propio -->
<script src="./js/eventos.js"></script>
</html>