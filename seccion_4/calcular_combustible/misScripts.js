function calcularLitros(){
    var elementoKm =document.getElementById("textoKm");
    var textoKm = elementoKm.ariaValueMax;
    var cantKm = Number(textoKm);

    var cantLitros= Number(Math.ceil(cantKm/8.8))

    var resultado =document.getElementById(textoResultado);
    resultado.textContent= "carga" + cantLitros + "litros combustible"
}