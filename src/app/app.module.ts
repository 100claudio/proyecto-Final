import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componente/encabezado/encabezado.component';
import { LogoAPComponent } from './componente/logo-ap/logo-ap.component';
import { SocialComponent } from './componente/social/social.component';
import { BannerComponent } from './componente/banner/banner.component';
import { AcercaDeComponent } from './componente/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componente/experiencia/experiencia.component';
import { EducacionComponent } from './componente/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HysComponent } from './componente/hys/hys.component';
import { ProyectoComponent } from './componente/proyecto/proyecto.component';
import { FooterComponent } from './componente/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    LogoAPComponent,
    SocialComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HysComponent,
    ProyectoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
