import sumar from "./sumador.js";

describe("Sumar", () => {
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });
  it("deberia sumar dos numeros", () => {
    expect(sumar(2, 2)).toEqual(4);
  });
  it("deberia sumar dos numeros", () => {
    expect(sumar(2, 4)).toEqual(6);
  });
 
});
