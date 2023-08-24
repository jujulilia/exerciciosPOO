"use strict";
class contaBancaria {
    constructor(nomeDoTitular, saldoAtual) {
        this.nomeDoTitular = nomeDoTitular;
        this.saldoAtual = saldoAtual;
    }
    saldoInicial() {
        return "Olá " + this.nomeDoTitular + ", " + "atualmente tem R$" + this.saldoAtual + " de saldo em sua conta.";
    }
    depositoDaConta(deposito) {
        this.saldoAtual = this.saldoAtual + deposito;
        return " Feito depósito de R$" + deposito + ", " + "saldo atual de: R$" + this.saldoAtual;
    }
    saldoDaConta() {
        return this.nomeDoTitular + " possui R$" + this.saldoAtual + " em sua conta bancária atualmente.";
    }
    realizarSaque(saque) {
        let msgSacarSaldo = "saque aprovado. ";
        if (saque > this.saldoAtual) {
            msgSacarSaldo = "saque negado.";
            return msgSacarSaldo;
        }
        else {
            this.saldoAtual = this.saldoAtual - saque;
            return msgSacarSaldo + saque + " Seu saldo atual é R$" + this.saldoAtual;
        }
    }
}
let minhaConta = new contaBancaria("João", 1000);
let minhaContaDois = new contaBancaria("Julia", 10000);
let minhaContaTres = new contaBancaria("Ana", 8000);
console.log(minhaConta.saldoInicial());
console.log(minhaConta.depositoDaConta(500));
console.log(minhaConta.saldoDaConta());
console.log(minhaConta.realizarSaque(200));
console.log(minhaConta.realizarSaque(1500));
console.log(minhaContaDois.saldoInicial());
console.log(minhaContaDois.depositoDaConta(500));
console.log(minhaContaDois.saldoDaConta());
console.log(minhaContaDois.realizarSaque(200));
console.log(minhaContaDois.realizarSaque(1500));
console.log(minhaContaTres.saldoInicial());
console.log(minhaContaTres.depositoDaConta(500));
console.log(minhaContaTres.saldoDaConta());
console.log(minhaContaTres.realizarSaque(200));
console.log(minhaContaTres.realizarSaque(1500));
