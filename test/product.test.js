//A quantidade vendida pode ser de 1 ou mais unidades

import Product from "../src/model/product";
import sell from "../src/service/sellProduct";

test("deve validar baixa de estqoue da venda de uma unidade", () => {
  let produto = new Product("Celular", 500.0, 900.0, 10);
  sell(produto, 1);
  expect(produto.stock).toBe(9);
});

test("deve aceitar a venda de mais do que uma unidade", () => {
  let produto = new Product("Tv", 500.0, 900.0, 10);
  sell(produto, 3);
  expect(produto.stock).toBe(7);
});
