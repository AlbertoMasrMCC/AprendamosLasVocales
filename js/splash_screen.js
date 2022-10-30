let contador    = document.getElementById("contador")
let cuerpo      = document.body

function redireccionarActividades()
{

    window.location.href = "actividades.php?complejidad=1"

}

function cambiarTextoFondo(segundo){

    var mensaje = ""
    var color   = ""

    switch(segundo)
    {

        case 1:
            mensaje = segundo
            color   = '#ff6961'
        break

        case 2:
            mensaje = segundo
            color   = '#77dd77'
        break

        case 3:
            mensaje = segundo
            color   = '#fdfd96'
        break

        case 4:
            mensaje = 'Comenzará en...'
            color   = '#84b6f4'
        break

        default:
            mensaje = ''
            color   = '#fdcae1'
        break

    }

    contador.innerHTML              = mensaje
    cuerpo.style.backgroundColor    = color

}

function sleep(ms) {

    return new Promise((resolve) => setTimeout(resolve, ms));

}
  
async function mostrarContador(){

    cambiarTextoFondo(4)
    await sleep(1000);
    cambiarTextoFondo(3)
    await sleep(1000);
    cambiarTextoFondo(2)
    await sleep(1000);
    cambiarTextoFondo(1)
    await sleep(1000);
    cambiarTextoFondo(0)
    await sleep(1000);
    redireccionarActividades()

}

mostrarContador()