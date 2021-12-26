import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

import { switchMap } from 'rxjs/operators';

import {NakupovalniSeznam} from './models/nakupovalniSeznam';
import {NakupovalniSeznamService} from './services/nakupovalniSeznam.service';
import {Artikel} from '../artikel/models/artikel'
import {ArtikelService} from '../artikel/services/artikel.service'

@Component({
    moduleId: module.id,
    selector: 'nakupovalniSeznam-podrobnosti',
    templateUrl: 'nakupovalniSeznam-podrobnosti.component.html'
})
export class NakupovalniSeznamPodrobnostiComponent implements OnInit {
    nakupovalniSeznam: NakupovalniSeznam;
    artikli: Artikel[];

    constructor(private nakupovalniSeznamService: NakupovalniSeznamService,
                private route: ActivatedRoute,
                private artikelService: ArtikelService,
                private location: Location,
                private router: Router) {
    }

    ngOnInit(): void {
       this.route.params.pipe(
            switchMap((params: Params) => this.nakupovalniSeznamService.getNakupovalniSeznam(+params['id'])))
            .subscribe(nakupovalniSeznam => this.nakupovalniSeznam = nakupovalniSeznam);
    }

    nazaj(seznam: NakupovalniSeznam): void {
        this.router.navigate(['/uporabniki']);
        // this.location.back();
    }

    dodajArtikel(nakupovalniSeznam: NakupovalniSeznam): void {
        this.router.navigate(['/nakupovalniSeznami/' + nakupovalniSeznam.id + '/dodajartikel']);
    }


}
