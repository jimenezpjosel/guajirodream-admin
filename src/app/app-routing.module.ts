import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FotosComponent } from './components/galeria/fotos/fotos.component';
import { VideosComponent } from './components/galeria/videos/videos.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { TiendaComponent } from './components/tienda/tienda.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'blog', component: BlogComponent},
  { path: 'aliados', component: AliadosComponent},
  { path: 'clientes', component: ClientesComponent},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'fotos', component: FotosComponent},
  { path: 'videos', component: VideosComponent},
  { path: 'nosotros', component: NosotrosComponent},
  { path: 'paquetes', component: PaquetesComponent},
  { path: 'politicas', component: PoliticasComponent},
  { path: 'tienda', component: TiendaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
