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
    it("Precio del impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado CA",()=>{
        let tot = new Totalizador("CA", 3, 23); 
        expect(tot.getPrecioImpuesto()).toEqual(5.69);
    });

    it("Precio del impuesto para cantidad 23 precio por item 24.2 y porcentaje de impuesto de estado NV",()=>{
        let tot = new Totalizador("NV", 23, 24.2); 
        expect(tot.getPrecioImpuesto()).toEqual(44.53);
    });

    it("Precio total segun el impuesto y el precio neto para cant:23, precio:10, estado: TX", ()=>{
        let tot = new Totalizador("TX", 23, 10); 
        expect(tot.getPrecioTotal()).toEqual(244.38);
    })

    it("Precio total segun el impuesto y el precio neto para cant:23, precio:10, estado: NV", ()=>{
        let tot = new Totalizador("NV", 23, 10); 
        expect(tot.getPrecioTotal()).toEqual(248.4);
    })

    it("Descuento para cantidad de items: 1000 ",()=>{
        let tot = new Totalizador(); 
        tot.setCantItems(1000);
        tot.setPrecioItems(1);
        expect(tot.getDescuento()).toEqual(3);
    });

    it("Descuento para cantidad de items: 3000 ",()=>{
        let tot = new Totalizador(); 
        tot.setCantItems(3000);
        tot.setPrecioItems(1);
        expect(tot.getDescuento()).toEqual(5);
    });

    it("Descuento para cantidad de items: 7000 ",()=>{
        let tot = new Totalizador(); 
        tot.setCantItems(7000);
        tot.setPrecioItems(1);
        expect(tot.getDescuento()).toEqual(7);
    });

    it("Descuento para cantidad de items: 10000 ",()=>{
        let tot = new Totalizador(); 
        tot.setCantItems(10000);
        tot.setPrecioItems(1);
        expect(tot.getDescuento()).toEqual(10);
    });

    it("Descuento para cantidad de items: 30000 ",()=>{
        let tot = new Totalizador(); 
        tot.setCantItems(30000);
        tot.setPrecioItems(1);
        expect(tot.getDescuento()).toEqual(15);
    });
    
    it("Precio total con el porcentaje de descuento que correponde a 1000",()=>{
        let tot = new Totalizador("NV", 1000, 1); 
        expect(tot.getPrecioTotalDescuento()).toEqual(1050);
    });

    it("Precio total con el porcentaje de descuento que correponde a 3000",()=>{
        let tot = new Totalizador("NV", 1000, 3); 
        expect(tot.getPrecioTotalDescuento()).toEqual(3090);
    });
}

);
