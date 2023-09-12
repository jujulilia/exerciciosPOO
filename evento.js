"use strict";
class Evento {
    constructor(nome, data, horario) {
        this.nome = nome;
        this.data = data;
        this.horario = horario;
    }
}
class Agenda {
    constructor() {
        this.eventos = [];
    }
    adicionarEventos(evento) {
        this.eventos.push(evento);
    }
    vizualizar() {
        console.log("Meus eventos são: ");
        for (let i = 0; i < this.eventos.length; i++) {
            console.log(this.eventos[i].nome + "na data" + this.eventos[i].data + this.eventos[i].horario);
        }
    }
    remover(evento) {
        this.eventos = this.eventos.filter((item) => item.nome !== evento.nome);
    }
}
const evento1 = new Evento(" Festa a fantasia", " 18/11", " 21:00 ");
const evento2 = new Evento(" Casamento ", " 15/11", " 20:00 ");
const evento3 = new Evento(" Formatura ", " 12/12", " 19:00 ");
const minhaAgenda = new Agenda();
minhaAgenda.adicionarEventos(evento1);
minhaAgenda.adicionarEventos(evento2);
minhaAgenda.adicionarEventos(evento3);
console.log(minhaAgenda.vizualizar());
console.log(minhaAgenda.remover(evento1));
console.log(minhaAgenda.vizualizar());
