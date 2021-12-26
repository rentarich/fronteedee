import {Artikel} from '../../artikel/models/artikel';
import {Borrow} from './borrow';

export class Uporabnik {
    id: number;
    role: string;
    email: string;
    username: string;
    borrows: Borrow[]
    }
