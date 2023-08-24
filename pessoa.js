"use strict";
class Pessoa {
    constructor(nome, idade, comidas) {
        this.nome = nome;
        this.idade = idade;
        this.comidas = comidas;
    }
    cumprimentar() {
        let msgHabilitacao = " Já posso tirar minha CNH";
        if (this.idade < 18) {
            msgHabilitacao = " não posso tirar minha CNH";
        }
        return "Olá meu nome é " + this.nome + " e tenho " + this.idade + " anos" + msgHabilitacao + ".";
    }
    comidasFavoritas() {
        console.log("Minha(s) comidas(s) favorita(s)");
        for (let i = 0; i <= this.comidas.length; i++) {
            console.log(this.comidas[i]);
        }
    }
}
let pessoa1 = new Pessoa("Julia", 16, ["Lasanha", "Lanche"]);
console.log(pessoa1.cumprimentar());
console.log(pessoa1.comidasFavoritas());
