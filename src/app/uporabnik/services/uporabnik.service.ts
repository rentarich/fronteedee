import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Uporabnik } from '../models/uporabnik';
import { NakupovalniSeznam } from '../../nakupovalniSeznam/models/nakupovalniSeznam';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class UporabnikService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://20.62.179.11/userprofile/v1/users/';

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
}

