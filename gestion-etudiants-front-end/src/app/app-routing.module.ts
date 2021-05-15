import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{ListeEtudiantComponent} from './liste-etudiant/liste-etudiant.component';
import { DetailsEtudiantsComponent} from './details-etudiants/details-etudiants.component';
import{AjoutEtudiantComponent} from './ajout-etudiant/ajout-etudiant.component';
import {RechercheEtudiantComponent} from './recherche-etudiant/recherche-etudiant.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { AuthComponent } from  '../app/auth/auth/auth.component' ;

const routes: Routes = [
   {path:'', redirectTo:'etudiants',pathMatch:'full'},
   {path:'etudiants',component:ListeEtudiantComponent},
   {path:'etudiants/:id', component: DetailsEtudiantsComponent},
   {path:'ajouter',component:AjoutEtudiantComponent},
   {path: 'rechercher',component:RechercheEtudiantComponent},
  // {path:'login', component:AuthComponent},
   {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
