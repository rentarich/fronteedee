import { Uporabnik } from "../../uporabnik/models/uporabnik";
import { Artikel } from "../../artikel/models/artikel";

export class Priljubljen {
    id: number;
    item: Artikel;
    person: Uporabnik;
}
