import { Component } from '@angular/core';
import { Automabile, AutomaCrud } from './automa';
import { Prodotto } from './prodotto';
import { AddEvent, AnnullaEvent, ConfermaEvent, ModificaEvent, RicercaEvent, SelezionaEvent } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Automabile {

  prodotto: Prodotto = new Prodotto();
  criterioRicerca: string = "";
  automa: AutomaCrud;
  constructor() {
    this.automa = new AutomaCrud(this);
  }
  entraStatoRicerca() {
    this.showFormDati = false;
    this.showSeleziona = true;
    this.showNuova = true;
    this.showRicerca = true;
    this.showTable = true;
    this.showModifica = false;
  }
  entraStatoAggiungi() {
    this.showFormDati = false;
    this.showAnnulla = true;
    this.showConferma = true;
    this.showSeleziona = false;
    this.showNuova = false;
    this.showRicerca = false;
    this.showTable = false;
  }
  entraStatoVisualizza() {
    this.showFormDati = true;
    this.showAnnulla = false;
    this.showConferma = false;
    this.showSeleziona = true;
    this.showNuova = true;
    this.showRicerca = true;
    this.showTable = true;
    this.showModifica = true;
  }
  entraStatoRimuovi() {
    this.showFormDati = true;
    this.showAnnulla = true;
    this.showConferma = true;
    this.showModifica = false;
    this.showSeleziona = false;
    this.showNuova = false;
    this.showRicerca = false;
    this.showTable = false;
  }
  entraStatoModifica() {
    this.showFormDati = true;
    this.showRimuovi = false;
    this.showModifica = false;
    this.showSeleziona = false;
    this.showNuova = false;
    this.showRicerca = false;
    this.showTable = false;
  }




  // proprietà per la gestione del layout della UI
  showFormDati: boolean = false;
  showModifica: boolean;
  showConferma: boolean;
  showAnnulla: boolean;
  showRimuovi: boolean;
  showNuova: boolean;
  showSeleziona: boolean;
  showRicerca: boolean = true;
  showTable: boolean = false;
  disableInputs: boolean = false;

  add() {
    this.automa.next(new AddEvent());
  }
  conferma() {
    this.automa.next(new ConfermaEvent());
  }

  annulla() {
    this.automa.next(new AnnullaEvent());
  }

  rimuovi() {
    this.automa.next(new RicercaEvent());
  }

  modifica() {
    this.automa.next(new ModificaEvent());
  }
  seleziona() {
    this.automa.next(new SelezionaEvent());
  }
  ricerca() {
    this.automa.next(new RicercaEvent());
  }


}