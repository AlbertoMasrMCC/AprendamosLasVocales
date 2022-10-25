var minutosTranscurridos    = 0
var segundosTranscurridos   = 0
var ayudasTotales           = 0
var erroresTotales          = 0

var preguntasActuales           = []
var indicesPreguntasMostradas   = []
var indiceAyudasMostradas       = []
var respuestasActuales          = []
var ayudasActuales              = []

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

    if(complejidad == 2)
    {

        respuestaDistinta = false

        var indicePregunta = -1

        if(indiceAyudasMostradas.length == respuestasActuales.length - 1)
        {

            document.getElementById("ayuda1").innerText = "Ya se mostraron todas las ayudas posibles."
            return

        }

        while(!respuestaDistinta)
        {

            indicePregunta = Math.floor(Math.random() * (respuestasActuales.length))

            if(respuestaCorrecta == respuestasActuales[indicePregunta])
                continue

            if(indiceAyudasMostradas.includes(indicePregunta))
                continue

            respuestaDistinta = true
            indiceAyudasMostradas.push(indicePregunta)

        }

        var imagenActual = document.getElementById(`respuesta${(indicePregunta + 1)}`)

        imagenActual.src = " ./multimedia/imagenes/incorrecto.png"
        imagenActual.parentNode.style = "cursor: not-allowed; pointer-events: none;"

    }

}

function errores()
{

    erroresTotales += 1
    document.getElementById("error").innerText = erroresTotales

}

function reiniciarContadores()
{

    minutosTranscurridos    = 0
    segundosTranscurridos   = 0
    document.getElementById("tiempo").innerText = "00:00"
    
    ayudasTotales           = 0
    document.getElementById("ayuda").innerText = ayudasTotales
    
    erroresTotales          = 0
    document.getElementById("error").innerText = erroresTotales

}

function restanPreguntas()
{

    hayPreguntasSinHacer = false

    for(var i = 0; i < preguntasActuales.length; i++)
    {

        if(!indicesPreguntasMostradas.includes(i))
        {

            hayPreguntasSinHacer = true
            break

        }

    }

    return hayPreguntasSinHacer

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

            respuesta = ""

            var letras = document.getElementById(`respuestaNivelDificil`).children

            for(var i = 0; i < letras.length; i++)
            {

                respuesta += letras[i].value

            }

        }

    if(respuesta.toUpperCase() != respuestaCorrecta.toUpperCase())
    {

        errores()

        Swal.fire(
            '¡ERROR!',
            'Respuesta incorrecta, vuelve a intentarlo.',
            'error'
        )
        return

    }    
    
    var complejidadNueva = aplicarLogicaDifusa()

    if(complejidadNueva == complejidad)
    {

        if(!restanPreguntas())
        {

            window.location.href = "terminado.html"
            return

        }

        preguntaRespuestaAyudaCorrecta()

        reiniciarContadores()

        mostrarPregunta()
        mostrarRespuesta()
        mostrarAyuda()
        
        return

    }

    window.location.href = `actividades.php?complejidad=${complejidadNueva}`

}

function aplicarLogicaDifusa()
{

    console.log(`Tuvo ${ayudasTotales} ayudas`)
    console.log(`Tuvo ${erroresTotales} errores`)
    console.log(`Transcurrieron ${minutosTranscurridos} minutos`)

    return 3

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

            if(contenedor.hasChildNodes())
            {

                contenedor.innerHTML = ""

            }

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

    if(complejidad == 1)
    {

        document.getElementById("ayuda1").src = `./multimedia/audios/${preguntaCorrecta}`

    }
    else
        if(complejidad == 3)
        {

            var seccionRespuestaCorrecta = ayudaCorrecta.split("|")

            for(var i = 0; i < seccionRespuestaCorrecta.length; i++)
            {

                var partesRespuestaCorrecta = seccionRespuestaCorrecta[i].split(",")

                document.getElementById(`PAyuda${(i + 1)}`).innerText = partesRespuestaCorrecta[0]
                document.getElementById(`AAyuda${(i + 1)}`).src       = partesRespuestaCorrecta[1]

            }

        }

}

function preguntaRespuestaAyudaCorrecta()
{

    var preguntaNueva = false
    
    var indicePregunta = 0

    while(!preguntaNueva)
    {

        indicePregunta = Math.floor(Math.random() * (preguntasActuales.length))

        if(!indicesPreguntasMostradas.includes(indicePregunta))
        {

            indicesPreguntasMostradas.push(indicePregunta)
            preguntaNueva = true

        }

    }

    preguntaCorrecta    = preguntasActuales[indicePregunta]
    respuestaCorrecta   = respuestasActuales[indicePregunta]
    ayudaCorrecta       = ayudasActuales[indicePregunta]

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