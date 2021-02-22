import { Component } from '@angular/core';
import { Prodotto } from './prodotto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // proprietà funzionali dell'interfaccia utente
  prodotto: Prodotto = new Prodotto();
  prodotti: Prodotto[] = []; // il vero DB
  righe: Prodotto[] = []; // la lista filtrata tramite ricerca
  criterioRicerca: string = "";
  rigaCorrente: number;
  codice : Prodotto;
  descrizione : Prodotto;

  // stato della UI
  stato: string = "RIC";

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
    switch (this.stato) {
      case "RIC":
        this.showFormDati = false;
        this.showModifica = false;
        this.showConferma = false;
        this.showNuova = true;
        this.showSeleziona = true;
        this.showRicerca = true;
        this.showTable = true;
        this.stato = "AGG";
        break;
      default:
        console.log("evento add imprevisto");
        break;
        case "VIS":
          this.showFormDati = true;
          this.showRicerca = false;
          this.showNuova = false;
          this.showConferma = true;
          this.showAnnulla = true;
          this.codice = true;
          this.stato = "AGG";
    }
  }
}

