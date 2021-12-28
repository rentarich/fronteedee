import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Uporabnik } from '../models/uporabnik';
import { NakupovalniSeznam } from '../../nakupovalniSeznam/models/nakupovalniSeznam';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';
import {Artikel} from '../../artikel/models/artikel';
import {Izposoja} from '../../izposoja/models/izposoja';

@Injectable()
export class UporabnikService {

    private headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Methods': '*'});
    private url = 'http://20.62.179.11/userprofile/v1/users/';
    private url2 = 'http://20.62.179.11/userprofile/v1/users/1/borrows';
    private url_priljubljeni = 'http://20.62.179.11/favourites/v1/favourites/';
    private url_odstrani = 'http://20.62.179.11/favourites/v1/favourites'
    private  url_vrni = 'http://20.62.179.11/borrow/v1/items'
    private url_reccomended = 'http://20.62.179.11/recommendation/v1/persons/'

    constructor(private http: HttpClient) {
    }



    getUporabniki(): Observable<Uporabnik[]> {
        return this.http.get<Uporabnik[]>(this.url)
                        .pipe(catchError(this.handleError));
    }


    getUporabnik(id: number): Observable<Uporabnik> {
        const url = `${this.url}/${id}`;
        return this.http.get<Uporabnik>(url)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    create(uporabnik: Uporabnik): Observable<Uporabnik> {
        return this.http.post<Uporabnik>(this.url, JSON.stringify(uporabnik), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    createNS(id: number, nakupovalniSeznam: NakupovalniSeznam): Observable<NakupovalniSeznam> {
        const url = `${this.url}/${id}/nakupovalniSeznami`;
        return this.http.post<NakupovalniSeznam>(url, JSON.stringify(nakupovalniSeznam), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }

    getPriljubljeni(id: number) {
        const url = `${this.url_priljubljeni}/${id}`;
        return this.http.get<Artikel[]>(url)
            .pipe(catchError(this.handleError));
    }

    getIzposojeni(id: number) {
        const url = `${this.url}/${id}/borrows`;
        return this.http.get<Izposoja[]>(url)
            .pipe(catchError(this.handleError));
    }
    getReccomended(id: number) {
        const url = `${this.url_reccomended}/${id}/recommend`;
        return this.http.get<Artikel[]>(url)
        .pipe(catchError(this.handleError));
    }


    priljubljen(id: number, uporabnikId: number) {
        const url = `${this.url_odstrani}/${id}/${uporabnikId}`;
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

    vrni(itemid: number, userid: number) {
        const url = `${this.url_vrni}/${itemid}/${userid}/return`;
        try {
            this.http.put(url, {headers: this.headers}).subscribe(
                data => console.log(data),
                err => console.log(err),
            );
            return true;
        } catch (e) {
            return false;
        }
    }

    posodobi(uporabnik: Uporabnik) {
        const url = `${this.url}/${uporabnik.id}`;
        try {
            this.http.put(url, JSON.stringify(uporabnik), {headers: this.headers}).subscribe(
                data => console.log(data),
                err => console.log(err),
            );
            return true;
        } catch (e) {
            return false;
        }
    }

}

