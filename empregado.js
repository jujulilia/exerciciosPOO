"use strict";
class Empregado {
    constructor(nome, salario) {
        this.nome = nome;
        this.salario = salario;
    }
}
class Gerente extends Empregado {
    constructor() {
        super("Rodrigo", 5000);
    }
    calcularSalarioMensal() {
        return this.salario + (this.salario * 10) / 100;
    }
}
class Desenvolvedor extends Empregado {
    constructor() {
        super("Roberson", 3000);
    }
    calcularSalarioMensal() {
        return this.salario;
    }
}
const gerente = new Gerente();
console.log("O salário de " + gerente.nome + " é de " + gerente.calcularSalarioMensal() + " reais.");
const desenvolvedor = new Desenvolvedor();
console.log("O salário de" + desenvolvedor.nome + " é de " + desenvolvedor.calcularSalarioMensal() + " reais.");
