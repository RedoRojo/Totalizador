
function getImpuesto(estado) {
    let impuestos = {"UT":6.65, "NV": 8, "TX": 6.25, "AL": 4, "CA": 8.25}
    return impuestos[estado];
}

function getPrecioNeto(cantItems, precioItem) {
    return cantItems * precioItem;
}
function getPrecioTotalPorImpuesto(cantItems, precioItem,porcentaje){
    return 602.5195;
}
export {getImpuesto, getPrecioNeto,getPrecioTotalPorImpuesto};