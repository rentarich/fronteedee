import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';

import {UporabnikiComponent} from './uporabnik/uporabniki.component';
import {UporabnikiDodajComponent} from './uporabnik/uporabniki-dodaj.component';
import {UporabnikPodrobnostiComponent} from './uporabnik/uporabnik-podrobnosti.component';
import {UporabnikService} from './uporabnik/services/uporabnik.service';

import {OznakeComponent} from './oznaka/oznake.component';
import {OznakeDodajComponent} from './oznaka/oznake-dodaj.component';
import {OznakaService} from './oznaka/services/oznaka.service';

import {ArtikliComponent} from './artikel/artikli.component';
import {ArtikliDodajComponent} from './artikel/artikli-dodaj.component';
import {ArtikelService} from './artikel/services/artikel.service';

import {NakupovalniSeznamComponent} from './nakupovalniSeznam/nakupovalniSeznami.component';
import {NakupovalniSeznamDodajComponent} from './nakupovalniSeznam/nakupovalniSeznam-dodaj.component';
import {NakupovalniSeznamPodrobnostiComponent} from './nakupovalniSeznam/nakupovalniSeznam-podrobnosti.component';
import {NakupovalniSeznamService} from './nakupovalniSeznam/services/nakupovalniSeznam.service';


@NgModule({
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        UporabnikiComponent,
        UporabnikPodrobnostiComponent,
        UporabnikiDodajComponent,
        OznakeComponent,
        OznakeDodajComponent,
        ArtikliComponent,
        ArtikliDodajComponent,
        NakupovalniSeznamComponent,
        NakupovalniSeznamDodajComponent,
        NakupovalniSeznamPodrobnostiComponent
    ],
    providers: [UporabnikService, OznakaService, ArtikelService, NakupovalniSeznamService],
    bootstrap: [AppComponent]
})
export class AppModule {
}

