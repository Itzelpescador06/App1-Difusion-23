import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVBARComponent } from './COMPONENTE/navbar/navbar.component';
import { GALERIAComponent } from './COMPONENTE/PAGES/galeria/galeria.component';
import { INICIOComponent } from './COMPONENTE/PAGES/inicio/inicio.component';
import { MAPAComponent } from './COMPONENTE/PAGES/mapa/mapa.component';

@NgModule({
  declarations: [
    AppComponent,
    NAVBARComponent,
    GALERIAComponent,
    INICIOComponent,
    MAPAComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
