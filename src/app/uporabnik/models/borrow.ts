import {Artikel} from '../../artikel/models/artikel';
import {Uporabnik} from './uporabnik';

export class Borrow {
    id: number;
    from_date: string;
    to_date: string;
    returned: boolean;
    reserved: boolean;
    item: Artikel;
    user: Uporabnik;
}
