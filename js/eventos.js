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

var relojActual

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

    relojActual = setTimeout("reloj()", 1000)

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

    reloj()
    
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

        Swal.fire({
            icon: 'error',
            confirmButtonText: "OK"
        })

        return

    }
    
    var valorCrips = aplicarLogicaDifusa()

    clearTimeout(relojActual)

    //window.open(`mostrarGraficas.php?valorCrisp=${valorCrips}&ayudas=${ayudasTotales}&errores=${erroresTotales}&tiempo=${minutosTranscurridos}`, "_blank")

    Swal.fire({
        icon: 'success',
        confirmButtonText: "OK"
    }).then(resultado => {

        if(resultado.value){

            var complejidadNueva = obtenerDificultad(valorCrips)
            
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

    })

}

function obtenerDificultad(valorCrips)
{

    if(valorCrips >= 0 && valorCrips <= 45)
    {

        return 1

    }

    if(valorCrips >= 46 && valorCrips <= 85)
    {

        return 2

    }

    if(valorCrips >= 86 && valorCrips <= 100)
    {

        return 3

    }

    return 0

}

function aplicarLogicaDifusa()
{

    if(erroresTotales > 5)
        erroresTotales = 5

    if(ayudasTotales > 5)
        ayudasTotales = 5

    if(minutosTranscurridos > 5)
        minutosTranscurridos = 5

    var obj = {
		crisp_input: [erroresTotales, ayudasTotales, minutosTranscurridos],
		variables_input: [
			{
				name: "Errores",
				setsName: ["Pocos", "Normales", "Muchos"],
				sets: [
					[0,0,0,1.5],
					[1,2,2,3],
					[2,5,5,5]
				]
			},
			{
				name: "Ayuda",
				setsName: ["Pocas", "Normales", "Muchas"],
				sets: [
					[0,0,0,1],
					[1,2,2,3],
					[2,5,5,5]
				]
			},
			{
				name: "Tiempo",
				setsName: ["Poco", "Moderado", "Excedido"],
				sets: [
					[0,0,0,1],
					[1,2,2,3],
					[2,5,5,5]
				]
			}
		],
		variable_output: {
			name: "Complejidad",
			setsName: ["Facil", "Media", "Dificil"],
			sets: [
				[0,0,0,45],
				[45,65,65,85],
				[85,100,100,100]
			]
		},
		inferences: [
			[2,1,0],
			[2,1,0],
			[2,1,0]
		]
	};

    var fl = new FuzzyLogic();

    return fl.getResult(obj)

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
            
                if(respuestaCorrecta[i] ==  "a" || respuestaCorrecta[i] ==  "e" || respuestaCorrecta[i] ==  "i" || respuestaCorrecta[i] ==  "o" || respuestaCorrecta[i] ==  "u")
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

        document.getElementById("ayuda1").src = `./multimedia/audios/${ayudaCorrecta}`

    }
    else
        if(complejidad == 3)
        {

            var seccionRespuestaCorrecta = ayudaCorrecta.split("|")

            for(var i = 0; i < seccionRespuestaCorrecta.length; i++)
            {

                var partesRespuestaCorrecta = seccionRespuestaCorrecta[i].split(",")

                document.getElementById(`PAyuda${(i + 1)}`).innerText = partesRespuestaCorrecta[0]
                document.getElementById(`AAyuda${(i + 1)}`).src       = `./multimedia/audios/${partesRespuestaCorrecta[1]}`

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