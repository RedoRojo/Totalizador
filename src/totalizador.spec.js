import Totalizador from "./totalizador";
describe("Totalizador de ventas",()=>{
    it("Impuesto para el estado CA",()=>{
        let tot = new Totalizador("CA"); 
        expect(tot.getImpuesto()).toEqual(8.25);
    });

    it("Impuesto para el estado NV",()=>{
        let tot = new Totalizador("NV"); 
        expect(tot.getImpuesto()).toEqual(8);
    });

    it("Impuesto para el estado TX",()=>{
        let tot = new Totalizador("TX"); 
        expect(tot.getImpuesto()).toEqual(6.25);
    });

    it("Impuesto para el estado AL",()=>{
        let tot = new Totalizador("AL"); 
        expect(tot.getImpuesto()).toEqual(4);
    });

    it("Impuesto para el estado UT",()=>{
        let tot = new Totalizador("UT"); 
        expect(tot.getImpuesto()).toEqual(6.65);
    });

    it("Precio neto para cantidad 5 precio por item 20",()=>{
        let tot = new Totalizador(); 
        tot.setCantItems(5); 
        tot.setPrecioItems(20); 
        expect(tot.getPrecioNeto()).toEqual(100);
    });

    it("Precio neto para cantidad 23 precio por item 24.2",()=>{
        let tot = new Totalizador(); 
        tot.setCantItems(23); 
        tot.setPrecioItems(24.2); 
        expect(tot.getPrecioNeto()).toEqual(556.6);
    });
    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado CA",()=>{
        let tot = new Totalizador("CA", 23, 24.2); 
        expect(tot.getPrecioTotalPorImpuesto()).toEqual(602.5195);
    });

    it("Precio total con impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado NV",()=>{
        let tot = new Totalizador("NV", 23, 24.2); 
        expect(tot.getPrecioTotalPorImpuesto()).toEqual(601.128);
    });

}

);
