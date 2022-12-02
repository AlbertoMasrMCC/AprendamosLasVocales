var grabar                  = false
var final_transcript        = ""

let cuerpo                  = document.body
let btnReproducir           = document.getElementById("btnReproducir")
let texto                   = document.getElementById("texto")
let iconoReproducir         = document.getElementById("iReproducir")
let TIEMPO_PREGUNTA         = 30
let LIMITE_PALABRAS_MINIMAS = 15
let ROJO                    = "#FF0000"
let AMARILLO                = "#FFFF00"
let VERDE                   = "#008000"

try {

  var SpeechRecognition       = window.webkitSpeechRecognition;
  var recognition             = new SpeechRecognition();
  recognition.continuous      = true;
  recognition.interimResults  = true;
  recognition.lang            = 'es-MX'

}
catch(e) {

  Swal.fire(
      '¡ERROR!',
      'Hubo un error al procesar la petición, '+ e,
      'error'
    )

  btnReproducir.disabled = false
  cambiarColorFondo(ROJO)
  mostrarIconoReproducir(true)

}

recognition.onspeechstart = function() { 

  cambiarColorFondo(AMARILLO)
  cuerpo.style.backgroundImage = "none";
  mostrarIconoReproducir(false)
  cuentaRegresiva(TIEMPO_PREGUNTA)

}

function validarTextoObtenido() {

  textoObtenido = texto.value
  palabrasTexto = textoObtenido.split(" ")

  if(texto == "")
    return false
  
  if(palabrasTexto.length <= LIMITE_PALABRAS_MINIMAS)
    return false

  return true

}

recognition.onspeechend = function() {

  final_transcript  = ""

  if(!validarTextoObtenido())
  {

    Swal.fire({
      icon: 'error',
    })

    btnReproducir.disabled = false
    cambiarColorFondo(ROJO)
    mostrarIconoReproducir(true)  

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
 
recognition.onerror = function(event) {

  if(event.error == 'no-speech') {

    btnReproducir.disabled = false
    cambiarColorFondo(ROJO)
    mostrarIconoReproducir(true)

  };

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

      if(resultado.estado == "0"){

        Swal.fire(
          '¡ERROR!',
          resultado.mensaje,
          'error'
        )

        btnReproducir.disabled = false
        cambiarColorFondo(ROJO)
        mostrarIconoReproducir(true)

      }

      $resultadoDevolver = resultado

    },
    error: function(textStatus) {

      Swal.fire(
          '¡ERROR!',
          'Hubo un error al procesar la petición',
          'error'
        )

      btnReproducir.disabled = false
      cambiarColorFondo(ROJO)
      mostrarIconoReproducir(true)

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

  await sleep(1000);

  segundosRestantes = segundosRestantes - 1;

  if(segundosRestantes == 0) {

      recognition.stop()
      return

  }

  cuentaRegresiva(segundosRestantes)

}

function cambiarColorFondo(color) {

  cuerpo.style.backgroundColor    = color

}

function mostrarIconoReproducir(reproducir) {

  if(reproducir)
      iconoReproducir.src = "./css/iconos/play.svg"
  else
      iconoReproducir.src = "./css/iconos/stop.svg"

}

function iniciarDetenerGrabacion() {

  grabar = !grabar
  recognition.start()
  btnReproducir.disabled = true

}