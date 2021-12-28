import {Component} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'prpo-app',
    template: `
        <app-navaiagation-bar></app-navaiagation-bar>
        <router-outlet></router-outlet>
    `
})
export class AppComponent {
    naslov = 'RENTARICH';
}
