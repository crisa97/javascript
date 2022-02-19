function anoBisiesto() {
    let ano = prompt("ingrese el año : ");
    if ((ano % 4 == 0 && (ano % 100 != 0) || ano % 400 == 0)) {
        window.alert("El año " + ano + " es bisiesto" )
    }else
    {
        window.alert("El año " + ano + " no es bisiesto" )

    }
}
anoBisiesto()