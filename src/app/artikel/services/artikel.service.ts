import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Artikel } from '../models/artikel';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import {Izposoja} from '../../izposoja/models/izposoja';

@Injectable()
export class ArtikelService {

    private headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*'});
    private url = 'http://20.62.179.11/catalog/v1/items';
    private url_izposoja = 'http://20.62.179.11/borrow/v1/items/1/1/reserve';

    constructor(private http: HttpClient) {
    }

    getArtikli(): Observable<Artikel[]> {
        const url = `${this.url}/available`
        return this.http.get<Artikel[]>(url)
                        .pipe(catchError(this.handleError));
    }

    izposodi(artikelId:number,uporabnikId: number): boolean {
        console.log(artikelId +' ' +uporabnikId);
        const url = `http://20.62.179.11/borrow/v1/items/${artikelId}/${uporabnikId}/reserve`;

        try {
            this.http.post<Izposoja>(url, {headers: this.headers}).subscribe(
                data => console.log(data),
                err => console.log(err),
            );
            return true;
        } catch (e) {
            return false;
        }
    }

    getArtikel(id: number): Observable<Artikel> {
        const url = `${this.url}/${id}`;
        return this.http.get<Artikel>(url)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }



    create(artikel: Artikel): Observable<Artikel> {
        return this.http.post<Artikel>(this.url, JSON.stringify(artikel), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

