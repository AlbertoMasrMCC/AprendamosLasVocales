iniciar = function(){

        $.ajax({

            type: "POST",
            dataType: "json",
            url: "./php/funciones.php",
            data: {complejidad: "x"},
            success: function(resultado) {

                Swal.fire(
                    '¡EXITO!',
                    'Se ejecutó correctamente',
                    'success'
                  )

            },
            error: function(textStatus) {

                Swal.fire(
                    '¡ERROR!',
                    'Hubo un error al procesar la petición',
                    'error'
                  )

            }

        })

}