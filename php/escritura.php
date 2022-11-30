<?php

    define("RUTA_ARCHIVO", "D:\\alber\\Desktop\\Escuela\\Tecnológico de Culiacán\\Maestría en ciencias computacionales\\1er semestre\\Introducción a la inteligencia artificial\\Redes neuronales\\");
    define("NOMBRE_ARCHIVO", "pruebaTexto.txt");

    $opcion = $_POST['opcion'];
    $texto  = "";

    if(isset($_POST['texto']))
        $texto = $_POST['texto'];

    switch($opcion)
    {

        case "escribirarchivo":

            escribirArchivo($texto);

        break;

        case "obtenerpersonalidad":

            obtenerPersonalidad();

        break;

    }

    function escribirArchivo($texto) {

        $estado  = "1";
        $mensaje = "Archivo creado correctamente";

        if(file_exists(RUTA_ARCHIVO. NOMBRE_ARCHIVO))
            if(!unlink(RUTA_ARCHIVO. NOMBRE_ARCHIVO))
            {
    
                $estado  = "0";
                $mensaje = "Error al intentar eliminar archivo";
    
            }

        if(!file_put_contents(RUTA_ARCHIVO. NOMBRE_ARCHIVO, $texto))
        {

            $estado  = "0";
            $mensaje = "No se puede crear archivo";

        }

        echo json_encode(array("estado" => $estado, "mensaje" => $mensaje));

    }

    function obtenerPersonalidad()
    {

        $estado     = "1";
        $mensaje    = "Personalidad obtenida correctamnete";

        $apertura           = "Si";
        $responsabilidad    = "No";
        $sociabilidad       = "Si";
        $amabilidad         = "No";
        $neuroticismo       = "Si";

        $respuesta = array("estado" => $estado, "mensaje" => $mensaje, "apertura" => $apertura, "responsabilidad" => $responsabilidad, "sociabilidad" => $sociabilidad, "amabilidad" => $amabilidad, "neuroticismo" => $neuroticismo);

        echo json_encode($respuesta);

    }

?>