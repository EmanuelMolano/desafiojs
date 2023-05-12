
function calcularPrecio(){

    var precioBase = 80;
    var descuento = -0;


    if(precioBase == 0 && descuento > 100 && descuento < 0);{ 
        console.log("Los valores ingresados son inválidos");
        }
    if(descuento == 0){
            console.log(precioBase);
        }
    if(descuento < 100){
            console.log("El precio final con descuento es: $" + (precioBase - descuento));
        }
    }
calcularPrecio();


