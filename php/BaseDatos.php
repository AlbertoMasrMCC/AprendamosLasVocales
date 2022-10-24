<?php

class BaseDatos
{

    public static function conectarse()
    {

        return pg_connect("host=localhost dbname=AprendamosABC user=postgres password=root");

    }

    public static function obtenerInformacion($complejidad)
    {

        $conexion = self::conectarse();

        $query = "SELECT
                    P.pregunta,
                    R.respuesta,
                    A.ayuda
                  FROM dificultades D
                  JOIN preguntas P
                  ON D.id = P.id_dificultades
                  JOIN respuestas R
                  ON P.id = R.id_preguntas
                  JOIN ayudas A
                  ON P.id = A.id_preguntas
                  WHERE D.id = $complejidad";

        $resultados = pg_query($conexion, $query);

        return pg_fetch_all($resultados);

    }

}

?>