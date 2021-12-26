import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {Oznaka} from './models/oznaka';
import {OznakaService} from './services/oznaka.service';

@Component({
    moduleId: module.id,
    selector: 'dodaj-oznake',
    templateUrl: 'oznake-dodaj.component.html'
})
export class OznakeDodajComponent {
    oznaka: Oznaka = new Oznaka;

    constructor(private oznakaService: OznakaService,
                private router: Router) {
    }

    submitForm(): void {
        this.oznakaService.create(this.oznaka)
        .subscribe(() => this.router.navigate(['/oznake']));
    }

    nazaj(): void {
        this.router.navigate(['/oznake']);
    }

}
