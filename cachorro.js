"use strict";
class Cachorro {
    constructor(nome, raca, idade) {
        this.nome = nome;
        this.raca = raca;
        this.idade = idade;
    }
    apresentarPara(humano) {
        return "Olá " + humano + +"eu sou" + this.nome + "um "
            + this.raca + "de " + this.idade + " anos";
    }
    apresentar() {
        return "eu sou " + this.nome + "um "
            + this.raca + "de " + this.idade + " anos";
    }
}
let rex = new Cachorro("Rex ", "Labrador ", 3);
let logan = new Cachorro("Logan ", "Bulldog Francês ", 2);
console.log(rex.nome);
console.log(logan.nome);
console.log(rex.apresentar());
console.log(logan.apresentar());
console.log(rex.apresentarPara("Julia"));
console.log(rex.apresentarPara("Julia"));
