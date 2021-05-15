import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {FormsModule} from '@angular/forms';
import { ListeEtudiantComponent } from './liste-etudiant/liste-etudiant.component';
import { DetailsEtudiantsComponent } from './details-etudiants/details-etudiants.component';
import { RechercheEtudiantComponent } from './recherche-etudiant/recherche-etudiant.component';
import { AjoutEtudiantComponent } from './ajout-etudiant/ajout-etudiant.component';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
//import { AuthInterceptor } from "./auth/auth-interceptor.interceptor";
//import { AuthModule } from "./auth/auth.module";



@NgModule({
  declarations: [
    AppComponent,
    ListeEtudiantComponent,
    DetailsEtudiantsComponent,
    RechercheEtudiantComponent,
    AjoutEtudiantComponent,
    PageNotFoundComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   // AuthModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
    


  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
