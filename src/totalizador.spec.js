import { getImpuesto } from "./totalizador";
describe("Totalizador de ventas",()=>{
    it("Impuesto para el estado CA",()=>{
        expect(getImpuesto("CA")).toEqual(8.25);
    });

    it("Impuesto para el estado NV",()=>{
        expect(getImpuesto("NV")).toEqual(8);
    });

}


);
