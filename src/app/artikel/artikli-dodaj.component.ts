import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {Artikel} from './models/artikel';
import {ArtikelService} from './services/artikel.service';

import {NakupovalniSeznamService} from '../nakupovalniSeznam/services/nakupovalniSeznam.service';

@Component({
    moduleId: module.id,
    selector: 'dodaj-artikli',
    templateUrl: 'artikli-dodaj.component.html'
})
export class ArtikliDodajComponent {
    artikel: Artikel = new Artikel;

    constructor(private artikelService: ArtikelService,
                private nakupovalniSeznamService: NakupovalniSeznamService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    submitForm(): void {
        let id: number = Number(this.route.snapshot.paramMap.get('id'));
        this.nakupovalniSeznamService.createArtikel(id, this.artikel)
        .subscribe(() => this.router.navigate(['/nakupovalniSeznami/'+id]));
    }

    nazaj(): void {
        this.location.back();
        //this.router.navigate(['/artikli']);
    }

}
