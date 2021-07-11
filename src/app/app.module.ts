import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PaquetesComponent } from './components/paquetes/paquetes.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { FotosComponent } from './components/galeria/fotos/fotos.component';
import { VideosComponent } from './components/galeria/videos/videos.component';
import { BlogComponent } from './components/blog/blog.component';
import { PoliticasComponent } from './components/politicas/politicas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { AliadosComponent } from './components/aliados/aliados.component';
import { TiendaComponent } from './components/tienda/tienda.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PaquetesComponent,
    ClientesComponent,
    GaleriaComponent,
    FotosComponent,
    VideosComponent,
    BlogComponent,
    PoliticasComponent,
    NosotrosComponent,
    AliadosComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
