import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UporabnikiComponent } from './uporabnik/uporabniki.component';
import { UporabnikPodrobnostiComponent } from './uporabnik/uporabnik-podrobnosti.component';
import { UporabnikiDodajComponent } from './uporabnik/uporabniki-dodaj.component';

import { OznakeComponent } from './oznaka/oznake.component';
import { OznakeDodajComponent } from './oznaka/oznake-dodaj.component';

import { ArtikliComponent } from './artikel/artikli.component';
import { ArtikliDodajComponent } from './artikel/artikli-dodaj.component';

import { NakupovalniSeznamComponent } from './nakupovalniSeznam/nakupovalniSeznami.component';
import { NakupovalniSeznamDodajComponent } from './nakupovalniSeznam/nakupovalniSeznam-dodaj.component';
import { NakupovalniSeznamPodrobnostiComponent } from './nakupovalniSeznam/nakupovalniSeznam-podrobnosti.component';

const routes: Routes = [
    {path: '', redirectTo: '/uporabniki', pathMatch: 'full'},
    {path: 'uporabniki', component: UporabnikiComponent},
    {path: 'dodajuporabnika', component: UporabnikiDodajComponent},
    {path: 'uporabniki/:id', component: UporabnikPodrobnostiComponent},
    {path: 'uporabniki/:id/dodajnakupovalniSeznam', component: NakupovalniSeznamDodajComponent },

    {path: 'oznake', component: OznakeComponent},
    {path: 'dodajoznako', component: OznakeDodajComponent},

    {path: 'artikli', component: ArtikliComponent},
    //{path: 'dodajartikel', component: ArtikliDodajComponent},

    {path: 'nakupovalniSeznami', component: NakupovalniSeznamComponent},
    {path: 'nakupovalniSeznami/:id', component: NakupovalniSeznamPodrobnostiComponent },
    {path: 'nakupovalniSeznami/:id/dodajartikel', component: ArtikliDodajComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
