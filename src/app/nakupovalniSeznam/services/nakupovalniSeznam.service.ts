import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Artikel } from '../../artikel/models/artikel';
import { NakupovalniSeznam } from '../models/nakupovalniSeznam';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class NakupovalniSeznamService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/nakupovalniSeznami';

    constructor(private http: HttpClient) {
    }

    getNakupovalneSezname(): Observable<NakupovalniSeznam[]> {
        return this.http.get<NakupovalniSeznam[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    getNakupovalniSeznam(id: number): Observable<NakupovalniSeznam> {
        const url = `${this.url}/${id}`;
        return this.http.get<NakupovalniSeznam>(url)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    deleteSeznam(id: number, idSeznama: number): Observable<number> {
        const url = `http://localhost:8080/v1/uporabniki/${id}/nakupovalniSeznami/${idSeznama}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    create(nakupovalniSeznam: NakupovalniSeznam): Observable<NakupovalniSeznam> {
        return this.http.post<NakupovalniSeznam>(this.url, JSON.stringify(nakupovalniSeznam), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    createArtikel(id:number, artikel: Artikel): Observable<Artikel> {
        const url = `${this.url}/${id}/artikli`;
        return this.http.post<Artikel>(url, JSON.stringify(artikel), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

