class contaBancaria{
    nomeDoTitular: string;
    saldoAtual: number;

    constructor(nomeDoTitular: string, saldoAtual: number){
        this.nomeDoTitular = nomeDoTitular;
        this.saldoAtual = saldoAtual;
    }

    saldoInicial(){
        return "Olá " + this.nomeDoTitular + ", " + "atualmente tem R$" + this.saldoAtual + " de saldo em sua conta."
    }

    depositoDaConta(deposito: number){
        this.saldoAtual = this.saldoAtual + deposito; 
         return " Feito depósito de R$" + deposito + ", " + "saldo atual de: R$" + this.saldoAtual;
    }


    saldoDaConta(){
        return this.nomeDoTitular + " possui R$" + this.saldoAtual + " em sua conta bancária atualmente."
    }

    realizarSaque(saque: number){
        let msgSacarSaldo = "saldo aprovado R$";
        if (saque > this.saldoAtual){
            msgSacarSaldo = "saque negado.";
            return msgSacarSaldo;
        } else{
            this.saldoAtual = this.saldoAtual - saque;
            return msgSacarSaldo + saque + "O saldo atual é R$" + this.saldoAtual;
        }
    }
   

}


let minhaConta = new contaBancaria("João", 1000);
console.log(minhaConta.saldoInicial());
console.log(minhaConta.depositoDaConta(500));
console.log(minhaConta.saldoDaConta());
console.log(minhaConta.realizarSaque(200));
console.log(minhaConta.realizarSaque(1500));






