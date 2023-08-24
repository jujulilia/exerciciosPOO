"use strict";
class Produto {
    constructor(produto, preco) {
        this.produto = produto;
        this.preco = preco;
    }
    detalhesDoProduto() {
        return "Produto" + this.produto + "Preço R$ " + this.preco;
    }
    descontoDoProduto(desconto) {
        return "desconto de " + desconto + "% aplicado. Novo preço R$ " + (this.preco - (this.preco * desconto) / 100);
    }
}
let produto1 = new Produto("Iphone 14", 5966.00);
let produto2 = new Produto("Tablet", 2500.00);
let produto3 = new Produto("Fones de Ouvido", 500.00);
console.log(produto1.detalhesDoProduto());
console.log(produto1.descontoDoProduto(15));
console.log(produto2.detalhesDoProduto());
console.log(produto2.descontoDoProduto(10));
console.log(produto3.detalhesDoProduto());
console.log(produto3.descontoDoProduto(5));
