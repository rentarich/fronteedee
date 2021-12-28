import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import { switchMap } from 'rxjs/operators';

import {Uporabnik} from './models/uporabnik';
import {UporabnikService} from './services/uporabnik.service';

import {NakupovalniSeznam} from '../nakupovalniSeznam/models/nakupovalniSeznam';
import {NakupovalniSeznamService} from '../nakupovalniSeznam/services/nakupovalniSeznam.service';
import {Artikel} from '../artikel/models/artikel';

@Component({
    moduleId: module.id,
    selector: 'uporabnik-podrobnosti',
    templateUrl: 'uporabnik-podrobnosti.component.html'
})
export class UporabnikPodrobnostiComponent implements OnInit {
    uporabnik: Uporabnik;
    priljublljeni: Artikel[];


    constructor(private uporabnikService: UporabnikService,
                private nakupovalniSeznamService: NakupovalniSeznamService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.uporabnikService.getUporabnik(+params['id'])))
            .subscribe(uporabnik => this.uporabnik = uporabnik);
       this.route.params.pipe(
           switchMap((params: Params) => this.uporabnikService.getPriljubljeni(+params['id'])))
               .subscribe(priljubljeni => this.priljublljeni = priljubljeni);
    }

    priljubljen(artikel: Artikel, uporabnikId: number) {
        this.uporabnikService
            .priljubljen(artikel.id, uporabnikId);
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
