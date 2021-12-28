import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import { switchMap } from 'rxjs/operators';

import {Uporabnik} from './models/uporabnik';
import {UporabnikService} from './services/uporabnik.service';
import {ArtikelService} from '../artikel/services/artikel.service';
import {NakupovalniSeznam} from '../nakupovalniSeznam/models/nakupovalniSeznam';
import {NakupovalniSeznamService} from '../nakupovalniSeznam/services/nakupovalniSeznam.service';
import {Artikel} from '../artikel/models/artikel';
import {Izposoja} from '../izposoja/models/izposoja';

@Component({
    moduleId: module.id,
    selector: 'prva.component',
    templateUrl: 'prva.component.html'
})

export class PrvaComponent implements OnInit {
    uporabnik: Uporabnik;
    priporoceni: Artikel[];


    constructor(private uporabnikService: UporabnikService,
                private artikelService: ArtikelService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
        this.route.params.pipe(
            switchMap((params: Params) => this.uporabnikService.getUporabnik(+params['id'])))
            .subscribe(uporabnik => this.uporabnik = uporabnik);
        this.route.params.pipe(
            switchMap((params: Params) => this.uporabnikService.getReccomended(+params['id'])))
            .subscribe(priljubljeni => this.priporoceni = priljubljeni);
    }

    priljubljen(artikel: Artikel, uporabnikId: number) {
        this.uporabnikService
            .priljubljen(artikel.id, uporabnikId);
        // window.location.reload();
    }

    izposodi(artikel: Artikel, uporabnikId: number) {
        this.artikelService
            .izposodi(artikel.id, uporabnikId);
        // window.location.reload();
    }

    nazaj(): void {
        this.router.navigate(['/uporabniki']);
    }




    vrni(itemid: number, userid: number) {
        this.uporabnikService
            .vrni(itemid, userid);
    }
}
