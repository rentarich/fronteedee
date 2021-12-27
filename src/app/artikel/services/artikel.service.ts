import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Artikel } from '../models/artikel';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import {Izposoja} from '../../izposoja/models/izposoja';
import {Priljubljen} from '../../priljubljen/models/priljubljen';

@Injectable()
export class ArtikelService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://20.62.179.11/catalog/v1/items';

    constructor(private http: HttpClient) {
    }

    getArtikli(): Observable<Artikel[]> {
        const url = `${this.url}`
        return this.http.get<Artikel[]>(url)
                        .pipe(catchError(this.handleError));
    }

    izposodi(artikelId:number,uporabnikId: number): boolean {
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

    priljubljen(artikelId:number,uporabnikId: number): boolean {
        const url = `http://20.62.179.11/favourites/v1/favourites/${artikelId}/${uporabnikId}`;

        try {
            this.http.post<Priljubljen>(url, {headers: this.headers}).subscribe(
                data => console.log(data),
                err => console.log(err),
            );
            return true;
        } catch (e) {
            return false;
        }
    }

    dodajArtike(artikel: Artikel):boolean {
        try {
            this.http.post<Artikel>(this.url, JSON.stringify(artikel), {headers: this.headers}).subscribe(
                data => console.log(data),
                err => console.log(err),
            );
            return true;
        } catch (e) {
            return false;
        }
    }

    izbrisi(artikelId: number):boolean{
        const url = `${this.url}/${artikelId}`;
        try {
            this.http.delete(url, {headers: this.headers}).subscribe(
                data => console.log(data),
                err => console.log(err),
            );
            return true;
        } catch (e) {
            return false;
        }
    }

    posodobi(artikel: Artikel) :boolean{
        const url = `${this.url}/${artikel.id}`;
        try {
            this.http.put(url, JSON.stringify(artikel), {headers: this.headers}).subscribe(
                data => console.log(data),
                err => console.log(err),
            );
            return true;
        } catch (e) {
            return false;
        }
    }
}

