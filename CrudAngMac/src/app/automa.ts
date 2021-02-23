import { AddEvent, AnnullaEvent, ConfermaEvent, Event, ModificaEvent, RicercaEvent, RimuoviEvent, SelezionaEvent, State } from "./state";

export class AutomaCrud implements State {

    ui: Automabile;
    stato: State;

    constructor(ui: Automabile) {
        this.ui = ui;
        //this.stato = new RicercaEvent;
    }

    next(e: Event) {
        this.stato.next(e);
    }
}

export class Ricerca implements State {
    next(e: Event, a: AutomaCrud) {
        if (e instanceof AddEvent) {
            a.stato = new Aggiungi();
        }
        else if (e instanceof SelezionaEvent) {
            a.stato = new Visualizza();
        }

        else if (e instanceof RicercaEvent) {

        }
        else {
            console.log('ricevuto evento' + e + 'non previsto');
        }
    }
}

export class Aggiungi implements State {
    next(e: Event, a: AutomaCrud) {
        if (e instanceof ConfermaEvent) {
            a.stato = new Visualizza();
        }
        else if (e instanceof AnnullaEvent) {
            a.stato = new Ricerca();
        }
        else {
            console.log('ricevuto evento' + e + 'non previsto');
        }

    }
}

export class Visualizza implements State {
    next(e: Event, a: AutomaCrud) {
        if (e instanceof AddEvent) {
            a.stato = new Aggiungi();
        }
        else if (e instanceof SelezionaEvent) {
            a.stato = new Visualizza();
        }
        else if (e instanceof ModificaEvent) {
            a.stato = new Modifica();
        }
        else if (e instanceof RimuoviEvent) {
            a.stato = new Rimuovi();
        }
        else if (e instanceof RicercaEvent) {
            a.stato = new Ricerca();
        }

        else {
            console.log('ricevuto evento' + e + 'non previsto');
        }

    }
}

export class Rimuovi implements State {
    next(e: Event, a: AutomaCrud) {
        if (e instanceof AnnullaEvent) {
            a.stato = new Visualizza();
        }
        else if (e instanceof ConfermaEvent) {
            a.stato = new Ricerca();
        }
        else {
            console.log('ricevuto evento' + e + 'non previsto');
        }
    }
}

export class Modifica implements State {
    next(e: Event, a: AutomaCrud) {
        if (e instanceof AnnullaEvent) {
            a.stato = new Visualizza();
        }
        else if (e instanceof ConfermaEvent) {
            a.stato = new Visualizza();
        }
        else {
            console.log('ricevuto evento' + e + 'non previsto');

        }

    }
}

export interface Automabile {

    entraStatoRicerca();
    entraStatoAggiungi();
    entraStatoVisualizza();
    entraStatoRimuovi();
    entraStatoModifica();

}

