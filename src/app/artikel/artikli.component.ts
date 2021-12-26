import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Artikel} from './models/artikel';
import {ArtikelService} from './services/artikel.service';

@Component({
    moduleId: module.id,
    selector: 'vsi-artikli',
    templateUrl: 'artikli.component.html'
})
export class ArtikliComponent implements OnInit {
    artikli: Artikel[];
    artikel: Artikel;

    constructor(private artikelService: ArtikelService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getArtikli();
    }

    getArtikli(): void {
        this.artikelService
            .getArtikli()
            .subscribe(artikli => this.artikli = artikli);
    }



    dodajArtikel(): void {
        this.router.navigate(['/dodajartikel']);
    }

    izposodi(artikel: Artikel) {
        this.artikelService
            .izposodi(artikel.id)
        // window.location.reload();
    }
}
