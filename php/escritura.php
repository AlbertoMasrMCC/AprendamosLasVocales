<?php

    define("RUTA_ARCHIVO", "D:\\alber\\Desktop\\Escuela\\Tecnológico de Culiacán\\Maestría en ciencias computacionales\\1er semestre\\Introducción a la inteligencia artificial\\Redes neuronales\\");
    define("NOMBRE_ARCHIVO", "pruebaTexto.txt");

    $opcion = $_POST['opcion'];
    $texto  = $_POST['texto'];        

    switch($opcion)
    {

        case "escribirarchivo":

            escribirArchivo($texto);

        break;

        case "obtenerpersonalidad":

            obtenerPersonalidad($texto);

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

    function consumirAPIPersonText($endPoint, $texto)
    {

        $textoCodificado = urlencode($texto);

        $url = "http://127.0.0.1:5000/persontext/$endPoint/$textoCodificado";

        $curl = curl_init($url);

        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_POST, false);
        curl_setopt($curl, CURLOPT_HTTPGET, true);
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 10);
        curl_setopt($curl, CURLOPT_TIMEOUT, 10);

        $presenta_personalidad  = json_decode(curl_exec($curl), true);
        $estado                 = curl_getinfo($curl, CURLINFO_HTTP_CODE);

        if(is_null($presenta_personalidad))
        {

            $personalidad   = "SIN PERSONALIDAD";
            $estado         = "404"; 

        }
        else
            $personalidad = $presenta_personalidad['presenta_personalidad'];

        return array("presenta_personalidad" => $personalidad, "estado" => $estado);

    }

    function obtenerPersonalidad($texto)
    {

        $estado     = "0";
        $mensaje    = "Error al intentar obtener la personalidad";

        // APERTURA;
        $apertura = consumirAPIPersonText("apertura", $texto);

        if($apertura['estado'] == "400" || $apertura['estado'] == "404")
        {

            $respuesta = array("estado" => $estado, "mensaje" => $mensaje);

            echo json_encode($respuesta);

            return;

        }

        // RESPONSABILIDAD
        $responsabilidad = consumirAPIPersonText("responsabilidad", $texto);

        if($responsabilidad['estado'] == "400" || $responsabilidad['estado'] == "404")
        {

            $respuesta = array("estado" => $estado, "mensaje" => $mensaje);

            echo json_encode($respuesta);

            return;

        }

        // SOCIABILIDAD
        $sociabilidad = consumirAPIPersonText("sociabilidad", $texto);

        if($sociabilidad['estado'] == "400" || $sociabilidad['estado'] == "404")
        {

            $respuesta = array("estado" => $estado, "mensaje" => $mensaje);

            echo json_encode($respuesta);

            return;

        }

        // AMABILIDAD
        $amabilidad = consumirAPIPersonText("amabilidad", $texto);

        if($amabilidad['estado'] == "400" || $amabilidad['estado'] == "404")
        {

            $respuesta = array("estado" => $estado, "mensaje" => $mensaje);

            echo json_encode($respuesta);

            return;

        }

        // NEUROTICISMO
        $neuroticismo = consumirAPIPersonText("neuroticismo", $texto);

        if($neuroticismo['estado'] == "400" || $neuroticismo['estado'] == "404")
        {

            $respuesta = array("estado" => $estado, "mensaje" => $mensaje);

            echo json_encode($respuesta);

            return;

        }

        $estado     = "1";
        $mensaje    = "Personalidad obtenida correctamnete";

        $respuesta = array("estado" => $estado, "mensaje" => $mensaje, "apertura" => $apertura['presenta_personalidad'], "responsabilidad" => $responsabilidad['presenta_personalidad'], "sociabilidad" => $sociabilidad['presenta_personalidad'], "amabilidad" => $amabilidad['presenta_personalidad'], "neuroticismo" => $neuroticismo['presenta_personalidad']);

        echo json_encode($respuesta);

    }

?>