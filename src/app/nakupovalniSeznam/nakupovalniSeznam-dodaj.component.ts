import {Component} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {NakupovalniSeznam} from './models/nakupovalniSeznam';
import {NakupovalniSeznamService} from './services/nakupovalniSeznam.service';

import {UporabnikService} from '../uporabnik/services/uporabnik.service'

@Component({
    moduleId: module.id,
    selector: 'dodaj-nakupovalniSeznam',
    templateUrl: 'nakupovalniSeznami-dodaj.component.html'
})
export class NakupovalniSeznamDodajComponent {
    nakupovalniSeznam: NakupovalniSeznam = new NakupovalniSeznam;

    constructor(private nakupovalniSeznamService: NakupovalniSeznamService,
                private uporabnikService: UporabnikService,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router) {
    }

    submitForm(): void {
        let id: number = Number(this.route.snapshot.paramMap.get('id'));
        this.uporabnikService.createNS(id, this.nakupovalniSeznam)
        .subscribe(() => this.router.navigate(['/uporabniki/'+id]));
    }

    nazaj(): void {
        this.location.back();
        //this.router.navigate(['/nakupovalniSeznami']);
    }

}
