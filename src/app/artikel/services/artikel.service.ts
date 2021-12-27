import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Artikel } from '../models/artikel';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class ArtikelService {

    private headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*'});
    private url = 'http://20.62.179.11/catalog/v1/items/available';
    private url_izposoja = 'http://localhost:5556/v1/items/5/1/reserve'

    constructor(private http: HttpClient) {
    }

    getArtikli(): Observable<Artikel[]> {
        return this.http.get<Artikel[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    izposodi(id: number): Observable<Artikel[]> {
        console.log('here')
        console.log(id)

        return this.http.get<Artikel[]>(this.url)
            .pipe(catchError(this.handleError));

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

