import { Uporabnik } from "../../uporabnik/models/uporabnik";
import { Artikel } from "../../artikel/models/artikel";
import { Oznaka } from "../../oznaka/models/oznaka";

export class NakupovalniSeznam {
    id: number;
    naziv: string;
    opis: string;
    ustvarjen: Date;
    uporabnik: Uporabnik;
    artikli: Artikel[];
    oznake: Oznaka[]
}
