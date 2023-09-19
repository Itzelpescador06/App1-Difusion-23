import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { INICIOComponent } from './COMPONENTE/PAGES/INICIO/inicio.component';
import { GALERIAComponent } from './COMPONENTE/PAGES/GALERIA/galeria.component';
import { MAPAComponent } from './COMPONENTE/PAGES/MAPA/mapa.component';

const routes: Routes = [
  {path: 'Inicio', component: INICIOComponent },
  {path: '*', component: INICIOComponent },
  {path:'Mapa', component: MAPAComponent},
  {path:'*', component: MAPAComponent},
  {path: 'Galeria', component: GALERIAComponent},
  {path: 'Galeria', component: GALERIAComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
