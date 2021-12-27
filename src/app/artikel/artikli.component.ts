import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

import {Artikel} from './models/artikel';
import {ArtikelService} from './services/artikel.service';
import {Uporabnik} from '../uporabnik/models/uporabnik';

@Component({
    moduleId: module.id,
    selector: 'vsi-artikli',
    templateUrl: 'artikli.component.html'
})
export class ArtikliComponent implements OnInit {
    artikli: Artikel[];
    artikel: Artikel=new Artikel();

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

    submitForm(artikel: Artikel): void {

        this.artikelService.dodajArtike(artikel);
    }

    dodajArtikel(): void {
        this.router.navigate(['/dodajartikel']);
    }

    izposodi(artikel: Artikel, uporabnikId: number) {
        this.artikelService
            .izposodi(artikel.id,uporabnikId);
        // window.location.reload();
    }

    priljubljen(artikel: Artikel, uporabnikId: number) {
        this.artikelService
            .priljubljen(artikel.id,uporabnikId);
        // window.location.reload();
    }

    izbrisi(artikel: Artikel) {
        this.artikelService
            .izbrisi(artikel.id);
    }

    posodobi(artikel: Artikel) {
        let id=artikel.id+'';
        let element=document.getElementById(id);
        let title=element.getElementsByTagName('span')[0];
        let description=element.getElementsByTagName('span')[1];
        let category=element.getElementsByTagName('span')[2];
        artikel.title=title.innerText;
        artikel.category=category.innerText;
        artikel.description=description.innerText
        this.artikelService.posodobi(artikel);
    }
}
