import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import { Oznaka } from '../models/oznaka';
import { Observable } from 'rxjs';

import { catchError } from 'rxjs/operators';

@Injectable()
export class OznakaService {

    private headers = new HttpHeaders({'Content-Type': 'application/json'});
    private url = 'http://localhost:8080/v1/oznake';

    constructor(private http: HttpClient) {
    }

    getOznake(): Observable<Oznaka[]> {
        return this.http.get<Oznaka[]>(this.url)
                        .pipe(catchError(this.handleError));
    }

    getOznaka(id: number): Observable<Oznaka> {
        const url = `${this.url}/${id}`;
        return this.http.get<Oznaka>(url)
                        .pipe(catchError(this.handleError));
    }

    delete(id: number): Observable<number> {
        const url = `${this.url}/${id}`;
        return this.http.delete<number>(url, {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    create(oznaka: Oznaka): Observable<Oznaka> {
        return this.http.post<Oznaka>(this.url, JSON.stringify(oznaka), {headers: this.headers})
                        .pipe(catchError(this.handleError));
    }

    private handleError(error: any): Promise<any> {
        console.error('Prišlo je do napake', error);
        return Promise.reject(error.message || error);
    }
}

