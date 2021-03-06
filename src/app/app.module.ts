import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GenerationsComponent } from './generations/generations.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

import {LOCALE_ID} from '@angular/core';
import {registerLocaleData} from '@angular/common';
import localeFR from '@angular/common/locales/fr';
registerLocaleData(localeFR);
@NgModule({
  declarations: [
    AppComponent,
    GenerationsComponent,
    PokemonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{provide: LOCALE_ID, useValue : 'fr'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
