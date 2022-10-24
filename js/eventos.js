var minutosTranscurridos    = 0
var segundosTranscurridos   = 0
var ayudasTotales           = 0
var erroresTotales          = 0

var preguntasActuales   = []
var respuestasActuales  = []
var ayudasActuales      = []

var preguntaCorrecta    = ""
var respuestaCorrecta   = ""
var ayudaCorrecta       = ""

function reloj()
{

    if(minutosTranscurridos.toString().length == 1)
        minutos = "0"+minutosTranscurridos
    else
        minutos = minutosTranscurridos

    if(segundosTranscurridos.toString().length == 1)
        segundos = "0"+segundosTranscurridos
    else
        segundos = segundosTranscurridos

    document.getElementById("tiempo").innerText = minutos +":"+ segundos

    segundosTranscurridos += 1

    if(segundosTranscurridos == 60)
    {

        minutosTranscurridos  += 1
        segundosTranscurridos = 0

    }

    setTimeout("reloj()", 1000)

}

function ayudas()
{

    ayudasTotales += 1

    document.getElementById("ayuda").innerText = ayudasTotales

}

function evaluarRespuesta(evento)
{

    if(complejidad == "1" || complejidad == "2")
    {

        respuesta = document.getElementById(`respuesta${evento}`).alt

    }
    else
        if(complejidad == "3")
        {

            debugger

            respuesta = ""

            var letras = document.getElementById(`respuestaNivelDificil`).children

            for(var i = 0; i < letras.length; i++)
            {

                respuesta += letras[i].value

            }

        }

    if(respuesta != respuestaCorrecta)
    {

        erroresTotales += 1
        document.getElementById("error").innerText = erroresTotales

        Swal.fire(
            '¡ERROR!',
            'Respuesta incorrecta, vuelve a intentarlo.',
            'error'
        )
        return

    }    
    
    aplicarLogicaDifusa()

}

function aplicarLogicaDifusa()
{

    console.log(`Tuvo ${ayudasTotales} ayudas`)
    console.log(`Tuvo ${erroresTotales} errores`)
    console.log(`Transcurrieron ${minutosTranscurridos} minutos`)

}

function almacenarInformacion(resultado)
{

    for(var i = 0; i < resultado.length; i++)
    {

        preguntasActuales[i]   = resultado[i]['pregunta']
        respuestasActuales[i]  = resultado[i]['respuesta']
        ayudasActuales[i]      = resultado[i]['ayuda']

    }

}

function mostrarPregunta()
{

    if(complejidad == "1" || complejidad == "3")
    {

        document.getElementById("pregunta2").src = `./multimedia/imagenes/${preguntaCorrecta}`

    }
    else
        if(complejidad == "2")
        {

            document.getElementById("pregunta2").src = `./multimedia/audios/${preguntaCorrecta}`

        }

}

function mostrarRespuesta()
{

    if(complejidad == "1" || complejidad == "2")
    {

        for(var i = 0; i < respuestasActuales.length; i++)
        {

            var imagen = document.getElementById(`respuesta${i + 1}`)

            imagen.src = `./multimedia/imagenes/${respuestasActuales[i]}`
            imagen.alt = respuestasActuales[i]


        }

    }
    else
        if(complejidad == "3")
        {

            var contenedor = document.getElementById(`respuestaNivelDificil`)

            for(var i = 0; i < respuestaCorrecta.length; i++)
            {

                var textArea = document.createElement("textarea")
                textArea.cols = "1"
                textArea.rows = "1"
                textArea.maxLength = "1"
                textArea.minLength = "1"
                textArea.style = "resize: none;"
            
                if(respuestaCorrecta[i] ==  "A" || respuestaCorrecta[i] ==  "E" || respuestaCorrecta[i] ==  "I" || respuestaCorrecta[i] ==  "O" || respuestaCorrecta[i] ==  "U")
                {

                    textArea.textContent = ""

                }
                else
                {

                    textArea.textContent = respuestaCorrecta[i]
                    textArea.disabled = true

                }

                contenedor.appendChild(textArea)

            }

        }

}

function mostrarAyuda()
{

    

}

function preguntaRespuestaAyudaCorrecta()
{

    var numeroAleatorio = Math.floor(Math.random() * (preguntasActuales.length - 1))

    preguntaCorrecta    = preguntasActuales[numeroAleatorio]
    respuestaCorrecta   = respuestasActuales[numeroAleatorio]
    ayudaCorrecta       = ayudasActuales[numeroAleatorio]

}

function consultarInformacion(complejidadActual){

    $.ajax({

        type: "POST",
        dataType: "JSON",
        url: "./php/funciones.php",
        data: {complejidad: complejidadActual},
        success: function(resultado) {

            almacenarInformacion(resultado)

            preguntaRespuestaAyudaCorrecta()

            mostrarPregunta()
            mostrarRespuesta()
            mostrarAyuda()

            Swal.fire(
                '¡EXITO!',
                'Se ejecutó correctamente',
                'success'
              )

        },
        error: function(textStatus) {

            Swal.fire(
                '¡ERROR!',
                'Hubo un error al procesar la petición, '+ textStatus.textStatus,
                'error'
              )

        }

    })

}

var complejidad = document.getElementById("complejidad").value

document.addEventListener("DOMContentLoaded", consultarInformacion(complejidad), false)