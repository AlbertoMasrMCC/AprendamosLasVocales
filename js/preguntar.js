var grabar                        = false
var final_transcript              = ""

let cuerpo                        = document.body
let texto                         = document.getElementById("texto")

let divSpiderMan                  = document.getElementById("divSpiderMan")
let divSuperMan                   = document.getElementById("divSuperMan")
let divMujerMaravilla             = document.getElementById("divMujerMaravilla")
let divCenicienta                 = document.getElementById("divCenicienta")
let divMulan                      = document.getElementById("divMulan")
let divAriel                      = document.getElementById("divAriel")

let preguntaPersonalidad            = document.getElementById("preguntaPersonalidad")
let preguntaPersonalidadNuevamente  = document.getElementById("preguntaPersonalidadNuevamente")
let preguntaPersonalidadOtra        = document.getElementById("preguntaPersonalidadOtra")

let TIEMPO_PREGUNTA               = 30
let LIMITE_PALABRAS_MINIMAS       = 15
let ROJO                          = "#FF0000"
let AMARILLO                      = "#FFFF00"
let VERDE                         = "#008000"

try {

  var SpeechRecognition           = window.webkitSpeechRecognition;
  var recognition                 = new SpeechRecognition();
  recognition.continuous          = true;
  recognition.interimResults      = true;
  recognition.lang                = 'es-MX'

}
catch(e) {

  debugger

  cambiarColorFondo(ROJO)
  habilidarImagenes(true)

  Swal.fire(
    '¡ERROR!',
    'Hubo un error '+ e,
    'error'
  )

}

async function reproducirInstrucciones() {

  preguntaPersonalidad.play()

  await sleep(5000)

  iniciarDetenerGrabacion()

}

function validarTextoObtenido() {

  debugger

  textoObtenido = texto.value
  palabrasTexto = textoObtenido.split(" ")

  if(textoObtenido == "")
    return false
  
  if(palabrasTexto.length <= LIMITE_PALABRAS_MINIMAS)
    return false

  return true

}

recognition.onspeechend = function() {

  final_transcript  = ""

  if(!validarTextoObtenido()) {

    debugger

    cambiarColorFondo(ROJO)
    habilidarImagenes(true) 

    Swal.fire({
      icon: "error",
      // reproduce el audio cuando se muestra el Swal
      didOpen: () => {
        preguntaPersonalidadNuevamente.play();
      }
    })

    return

  }
  else
    cambiarColorFondo(VERDE)
  
  escribirArchivo().then(function(resultado) {

    if(resultado.estado == "0")
      return

  })
  
  obtenerPersonalidad().then(function(resultado) {

    if(resultado.estado == "0")
      return

    Swal.fire({
      icon: 'success',
      confirmButtonText: "OK"
    }).then(result => {
  
      window.location.href = `splash_screen.php?apertura=${resultado.apertura}&responsabilidad=${resultado.responsabilidad}&sociabilidad=${resultado.sociabilidad}&amabilidad=${resultado.amabilidad}&neuroticismo=${resultado.neuroticismo}`
  
    }) 

  })

}

recognition.onresult = function(event) {

  const text = Array.from(event.results)
  .map(result => result[0])
  .map(result => result.transcript)
  .join('')

  texto.value = text
  
}

function escribirArchivo() {
  
  var parametros = `opcion=escribirarchivo&texto=${texto.value}`

  return ejecutarFunciones(parametros)

}

function obtenerPersonalidad() {

  var parametros = `opcion=obtenerpersonalidad&texto=${texto.value}`

  return ejecutarFunciones(parametros)

}

function ejecutarFunciones(parametros) {

  $resultadoDevolver = ""

  return new Promise ((resolve) =>

  $.ajax({
    type: "POST",
    async: false,
    cache: false,
    dataType: "JSON",
    url: "./php/escritura.php",
    data: parametros,
    success: function(resultado) {

      if(resultado.estado == "0") {

        debugger

        cambiarColorFondo(ROJO)
        habilidarImagenes(true)

        Swal.fire(
          '¡ERROR!',
          'Hubo un error al procesar la petición, '+ resultado.mensaje,
          'error'
        )

      }

      $resultadoDevolver = resultado

    },
    error: function(textStatus) {

      debugger

      cambiarColorFondo(ROJO)
      habilidarImagenes(true)

      Swal.fire(
        '¡ERROR!',
        'Hubo un error al procesar la petición, '+ textStatus.textStatus,
        'error'
      )

      var resultado = {}
      resultado.estado = "0"

      $resultadoDevolver = resultado

    },
    complete: function() {
      
      resolve($resultadoDevolver)

    }

  })

  )

}

function sleep(ms) {

  return new Promise((resolve) => setTimeout(resolve, ms));

}

async function cuentaRegresiva(segundosRestantes) {

  var temporizador = segundosRestantes * 1000

  let timerInterval
  
  Swal.fire({
    html: '<b></b>',
    timer: temporizador,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading()
      const b = Swal.getHtmlContainer().querySelector('b')
      timerInterval = setInterval(() => {
        const timeLeft = Math.round(Swal.getTimerLeft() / 1000);
        b.textContent = timeLeft
      }, 1000)
    },
    willClose: () => {
      clearInterval(timerInterval)
    }
  }).then((result) => {
    /* Read more about handling dismissals below */
    if (result.dismiss === Swal.DismissReason.timer) {
      recognition.stop()
    }
    else {
      cambiarColorFondo(ROJO)
      habilidarImagenes(true) 
      preguntaPersonalidadOtra.play();
      recognition.stop()
    }
  })

}

function cambiarColorFondo(color) {

  cuerpo.style.backgroundColor    = color

}

function habilidarImagenes(habilitar) {

  if(!habilitar) {

    divSpiderMan.style.pointerEvents = "none";

    divSuperMan.style.pointerEvents = "none";

    divMujerMaravilla.style.pointerEvents = "none";

    divCenicienta.style.pointerEvents = "none";

    divMulan.style.pointerEvents = "none";

    divAriel.style.pointerEvents = "none";

  }
  else {

    divSpiderMan.style.pointerEvents = "auto";

    divSuperMan.style.pointerEvents = "auto";

    divMujerMaravilla.style.pointerEvents = "auto";

    divCenicienta.style.pointerEvents = "auto";

    divMulan.style.pointerEvents = "auto";

    divAriel.style.pointerEvents = "auto";

  }

}

function iniciarDetenerGrabacion() {

  cambiarColorFondo(AMARILLO)
  cuerpo.style.backgroundImage = "none";
  habilidarImagenes(false)
  cuentaRegresiva(TIEMPO_PREGUNTA)

  grabar = !grabar
  recognition.start()
  
  if(grabar)
    habilidarImagenes(false)
  else
    habilidarImagenes(true)

}
