import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NAVBARComponent } from './COMPONENTE/navbar/navbar.component';
import { GALERIAComponent } from './COMPONENTE/PAGES/GALERIA/galeria.component';
import { INICIOComponent } from './COMPONENTE/PAGES/INICIO/inicio.component';
import { MAPAComponent } from './COMPONENTE/PAGES/MAPA/mapa.component';
import { FooterComponent } from './COMPONENTE/footer/footer.component';
import { DatosComponent } from './COMPONENTE/PAGES/datos/datos.component';

import { HttpClientModule } from '@angular/common/http';
import { DetalleComponent } from './COMPONENTE/PAGES/datos/detalle/detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    NAVBARComponent,
    GALERIAComponent,
    INICIOComponent,
    DatosComponent,
    MAPAComponent,
    FooterComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
