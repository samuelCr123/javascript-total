
    let elementoRespuesta = document.getElementById("decision");

    let elementoCantidad = document.getElementById("textoCantidad");
    let cantidadComprada = elementoCantidad.value;

    if (cantidadComprada < cantidadDisponible) {
        elementoRespuesta.textContent = "Compraste " + cantidadComprada 
        + " hay disponble aun " + (cantidadDisponible - parseInt(cantidadComprada)).toString();;
    }function evaluarCompra(cantidadDisponible) {
    let elementoRespuesta = document.getElementById("decision");

    let elementoCantidad = document.getElementById("textoCantidad");
    let cantidadComprada = elementoCantidad.value;

    if (cantidadComprada < cantidadDisponible) {
        elementoRespuesta.textContent = "Compraste " + cantidadComprada 
        + " hay disponble aun " + (cantidadDisponible - parseInt(cantidadComprada)).toString();;
    }
}