import { Uporabnik } from "../../uporabnik/models/uporabnik";
import { Artikel } from "../../artikel/models/artikel";

export class Izposoja {
    id: number;
    from_date: string;
    to_date: string;
    reserved: Date;
    returned: Uporabnik;
    person: Uporabnik;
    item: Artikel
}
