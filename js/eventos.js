// $.ajax({

//     type: "POST",
//     dataType: "json",
//     url: "./php/funciones.php",
//     data: {complejidad: "x"},
//     success: function(resultado) {

//         Swal.fire(
//             '¡EXITO!',
//             'Se ejecutó correctamente',
//             'success'
//           )

//     },
//     error: function(textStatus) {

//         Swal.fire(
//             '¡ERROR!',
//             'Hubo un error al procesar la petición',
//             'error'
//           )

//     }

// })

var minutosTranscurridos    = 0
var segundosTranscurridos   = 0
var ayudasTotales           = 0
var erroresTotales          = 0

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

function errores()
{

    erroresTotales += 1

}

function ayudas()
{

    ayudasTotales += 1

    document.getElementById("ayuda").innerText = ayudasTotales

}

function aplicarLogicaDifusa()
{

    console.log(`Tuvo ${ayudasTotales} ayudas`)
    console.log(`Tuvo ${erroresTotales} ayudas`)
    console.log(`Transcurrieron ${minutosTranscurridos} minutos`)

}