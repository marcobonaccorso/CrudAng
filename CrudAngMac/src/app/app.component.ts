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
  entraStatoAggiungi() {
    throw new Error('Method not implemented.');
  }
  entraStatoVisualizza() {
    throw new Error('Method not implemented.');
  }
  entraStatoRimuovi() {
    throw new Error('Method not implemented.');
  }
  entraStatoModifica() {
    throw new Error('Method not implemented.');
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
  entraStatoRicerca(){
    this.showFormDati=false;
    this.showSeleziona=true;
    this.showNuova=true;
    this.showRicerca=true;
    this.showTable=true;
  }
  
}