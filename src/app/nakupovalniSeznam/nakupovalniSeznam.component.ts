import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {NakupovalniSeznam} from './models/nakupovalniSeznam';
import {NakupovalniSeznamService} from './services/nakupovalniSeznam.service';

@Component({
    moduleId: module.id,
    selector: 'vsi-nakupovalniSeznami',
    templateUrl: 'nakupovalniSeznami.component.html'
})
export class NakupovalniSeznamComponent implements OnInit {
    nakupovalniSeznami: NakupovalniSeznam[];
    nakupovalniSeznam: NakupovalniSeznam;

    constructor(private nakupovalniSeznamService: NakupovalniSeznamService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getNakupovalneSezname();
    }

    getNakupovalneSezname(): void {
        this.nakupovalniSeznamService
            .getNakupovalneSezname()
            .subscribe(nakupovalniSeznami => this.nakupovalniSeznami = nakupovalniSeznami);
    }

    delete(nakupovalniSeznam: NakupovalniSeznam): void {
        this.nakupovalniSeznamService
            .delete(nakupovalniSeznam.id)
            .subscribe(nakupovalniSeznamId => this.nakupovalniSeznami = this.nakupovalniSeznami.filter(u => u.id !== nakupovalniSeznamId));
    }

    dodajNakupovalniSeznam(): void {
        this.router.navigate(['/dodajnakupovalniSeznam']);
    }

}
