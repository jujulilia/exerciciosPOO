"use strict";
class ProdutoLoja {
    constructor(nomeDoProduto, precoDoProduto) {
        this.nome = nomeDoProduto,
            this.preco = precoDoProduto;
    }
}
class CarrinhoCompra {
    constructor() {
        this.produtosDoCarrinho = [];
    }
    adicionarProduto(produto) {
        this.produtosDoCarrinho.push(produto);
    }
    excluirProduto(nomeDoProduto) {
        this.produtosDoCarrinho = this.produtosDoCarrinho.filter(item => item.nome !== nomeDoProduto);
    }
    calcularValorTotal() {
        let soma = 0;
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            soma = soma + this.produtosDoCarrinho[i].preco;
        }
        return soma.toFixed(2);
    }
    exibirProdutos() {
        console.log("Produtos do Carrinho: ");
        for (let i = 0; i < this.produtosDoCarrinho.length; i++) {
            console.log("Produto: " + this.produtosDoCarrinho[i].nome + "R$ " + this.produtosDoCarrinho[i].preco.toFixed(2));
        }
    }
}
class Loja {
    constructor() {
        this.produtosDoEstoque = [];
        this.carrinhoDeCompra = new CarrinhoCompra();
    }
    adicionarProdutoAoEstoque(produto) {
        this.produtosDoEstoque.push(produto);
    }
    removerProdutoDoEstoque(nomeDoProduto) {
        this.produtosDoEstoque = this.produtosDoEstoque.filter(item => item.nome !== nomeDoProduto);
    }
    adicionarProdutoAoCarrinho(produto) {
        const produtoEncontrado = this.produtosDoEstoque.find(item => item.nome == produto.nome);
        if (produtoEncontrado) {
            this.carrinhoDeCompra.adicionarProduto(produtoEncontrado);
            return "produto adicionado ao carrinho de compra";
        }
        else {
            return "Produto não encontrado ao estoque da loja";
        }
    }
    removerProdutoDoCarrinho(produto) {
        this.carrinhoDeCompra.excluirProduto(produto.nome);
    }
    exibirProdutosDoCarrinho() {
        this.carrinhoDeCompra.exibirProdutos();
    }
}
const produtoLoja1 = new ProdutoLoja("Camiseta", 29.99);
const produtoLoja2 = new ProdutoLoja("Calça", 49.99);
const produtoLoja3 = new ProdutoLoja("Sapato", 79.90);
const produtoLoja4 = new ProdutoLoja("Meia", 19.99);
//Criando a loja
const minhaLoja = new Loja();
//Adicionando Produto ao Estoque
minhaLoja.adicionarProdutoAoEstoque(produtoLoja1);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja2);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja3);
minhaLoja.adicionarProdutoAoEstoque(produtoLoja4);
//Adicionando produto ao carrinho de compras
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja1);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja2);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja3);
minhaLoja.adicionarProdutoAoCarrinho(produtoLoja4);
//Remover produto do carrinho de compra
minhaLoja.removerProdutoDoCarrinho(produtoLoja4);
//remover produto do estoque da loja
minhaLoja.removerProdutoDoEstoque(produtoLoja4.nome);
//Exibindo produto do carrinho de compra
minhaLoja.exibirProdutosDoCarrinho();
//Exibindo valor total do carrinho
console.log("Total de carrinho de compras: R$ " + minhaLoja.carrinhoDeCompra.calcularValorTotal());
