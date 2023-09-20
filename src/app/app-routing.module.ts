import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INICIOComponent } from './COMPONENTE/PAGES/INICIO/inicio.component';
import { DatosComponent } from './COMPONENTE/PAGES/datos/datos.component';
import { MAPAComponent } from './COMPONENTE/PAGES/MAPA/mapa.component';
import { GALERIAComponent } from './COMPONENTE/PAGES/GALERIA/galeria.component';


const routes: Routes = [
  {path: 'Inicio', component: INICIOComponent },
  {path: 'Datos', component: DatosComponent },
  {path:'Mapa', component: MAPAComponent},
  {path: 'Galeria', component: GALERIAComponent},
  {path: '**', component: GALERIAComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
