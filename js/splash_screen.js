let contador    = document.getElementById("contador")
let cuerpo      = document.body

function redireccionarActividades(){

    window.location.href = "actividades.php"

}

function cambiarTextoFondo(segundo){

    var mensaje = ""
    var color   = ""

    switch(segundo)
    {

        case 1:
            mensaje = segundo
            color   = 'green'
        break

        case 2:
            mensaje = segundo
            color   = 'red'
        break

        case 3:
            mensaje = segundo
            color   = 'blue'
        break

        case 4:
            mensaje = '¿Listo?'
            color   = 'purple'
        break

        default:
            mensaje = '¡YA!'
            color   = 'yellow'
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