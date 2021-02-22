import { AutomaCrud } from "./automa";

export interface State {
    next(e: Event, a?:AutomaCrud);
}

export interface Event {
}

export class AddEvent implements Event{}

export class AnnullaEvent implements Event{}

export class ConfermaEvent implements Event{}

export class ModificaEvent implements Event{}

export class RicercaEvent implements Event{}

export class RimuoviEvent implements Event{}

export class SelezionaEvent implements Event{}