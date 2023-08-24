import { getImpuesto } from "./totalizador";
describe("Totalizador de ventas",()=>{
    it("Impuesto para el estado CA",()=>{
        expect(getImpuesto("CA")).toEqual(8.25);
    });

    it("Impuesto para el estado NV",()=>{
        expect(getImpuesto("NV")).toEqual(8);
    });

    it("Impuesto para el estado TX",()=>{
        expect(getImpuesto("TX")).toEqual(6.25);
    });

    it("Impuesto para el estado AL",()=>{
        expect(getImpuesto("AL")).toEqual(4);
    });

    it("Impuesto para el estado TX",()=>{
        expect(getImpuesto("CA")).toEqual(8.25);
    });

}


);
