

export default class Totalizador{
    constructor(estado = "_", cantItems = 0, precioItem = 0){
        this.estado = estado; 
        this.cantItems = cantItems; 
        this.precioItem = precioItem; 
    }

    setCantItems(cantItems) {
        this.cantItems = cantItems; 
    }

    setPrecioItems(precioItem) {
        this.precioItem = precioItem; 
    }

    setEstado(estado) {
        this.estado = estado; 
    }

    getImpuesto() {
        let impuestos = {"UT":6.65, "NV": 8, "TX": 6.25, "AL": 4, "CA": 8.25}
        return impuestos[this.estado];
    }

    getDescuento() {
        let descuentos = {1000: 3, 3000: 5, 7000: 7, 10000: 10, 30000: 15}; 
        // if(Object.values(descuentos).includes(this.getPrecioNeto())) 
        if(descuentos[this.getPrecioNeto()] == undefined) return 0;
        return descuentos[this.getPrecioNeto()];
        // else return 0;
    }

    getPrecioDescuento() {
        let porcen = this.getDescuento() / 100; 
        let precioDescuento = this.getPrecioNeto() * porcen; 
        precioDescuento = Number(precioDescuento.toFixed(2))
        return precioDescuento;  
    }

    getPrecioImpuesto() { 
        let porcen = this.getImpuesto() / 100; 
        let precioImpuesto = this.getPrecioNeto() * porcen; 
        precioImpuesto = Number(precioImpuesto.toFixed(2))
        return precioImpuesto;  
    }

    getPrecioNeto() {
        return this.cantItems * this.precioItem;
    }
    

    getPrecioTotal() {
        return this.getPrecioNeto() + this.getPrecioImpuesto(); 
    }

    getPrecioTotalDescuento() {
        return this.getPrecioNeto() + this.getPrecioImpuesto() - this.getPrecioDescuento(); 
    }
}
