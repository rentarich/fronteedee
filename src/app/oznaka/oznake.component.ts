import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Oznaka} from './models/oznaka';
import {OznakaService} from './services/oznaka.service';

@Component({
    moduleId: module.id,
    selector: 'vse-oznake',
    templateUrl: 'oznake.component.html'
})
export class OznakeComponent implements OnInit {
    oznake: Oznaka[];
    oznaka: Oznaka;

    constructor(private oznakaService: OznakaService,
                private router: Router) {
    }

    ngOnInit(): void {
        this.getOznake();
    }

    getOznake(): void {
        this.oznakaService
            .getOznake()
            .subscribe(oznake => this.oznake = oznake);
    }

    delete(oznaka: Oznaka): void {
        this.oznakaService
            .delete(oznaka.id)
            .subscribe(oznakaId => this.oznake = this.oznake.filter(u => u.id !== oznakaId));
        window.location.reload();
    }

    dodajOznako(): void {
        this.router.navigate(['/dodajoznako']);
    }

}
