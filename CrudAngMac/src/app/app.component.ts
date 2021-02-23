import { Component } from '@angular/core';
import { Automabile, AutomaCrud } from './automa';
import { Prodotto } from './prodotto';
import { AddEvent } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements Automabile {

  prodotto: Prodotto = new Prodotto();
  criterioRicerca: string = "";
  automa: AutomaCrud;
  constructor(){
    this.automa = new AutomaCrud(this);
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

}