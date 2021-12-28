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
import {Izposoja} from '../izposoja/models/izposoja';

@Component({
    moduleId: module.id,
    selector: 'uporabnik-podrobnosti',
    templateUrl: 'uporabnik-podrobnosti.component.html'
})
export class UporabnikPodrobnostiComponent implements OnInit {
    uporabnik: Uporabnik;
    priljublljeni: Artikel[];
    izposojeni: Izposoja[];


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
        this.route.params.pipe(
            switchMap((params: Params) => this.uporabnikService.getIzposojeni(+params['id'])))
            .subscribe(izposojeni => this.izposojeni = izposojeni);
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

    posodobi(uporabnik: Uporabnik) {
        let id = uporabnik.id + '';
        let element= document.getElementById(id);
        let upime = element.getElementsByTagName('span')[0].innerText;
        console.log(upime)
        let mail= element.getElementsByTagName('span')[1].innerText;
        uporabnik.email = mail
        uporabnik.username = upime
        this.uporabnikService.posodobi(uporabnik);
    }

}
