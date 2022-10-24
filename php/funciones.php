<?php

    include("BaseDatos.php");

    $complejidad = $_POST["complejidad"];

    $informacion = BaseDatos::obtenerInformacion($complejidad);

    echo json_encode($informacion);

?>