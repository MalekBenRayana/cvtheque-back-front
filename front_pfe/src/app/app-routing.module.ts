import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutCandidatComponent } from './composants/ajout-candidat/ajout-candidat.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GestionBesoinsComponent } from './pages/gestion-besoins/gestion-besoins.component';
import { GestionCandidatComponent } from './pages/gestion-candidat/gestion-candidat.component';
import { GestionDemandesComponent } from './pages/gestion-demandes/gestion-demandes.component';
import { GestionEntretienComponent } from './pages/gestion-entretien/gestion-entretien.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';

const routes: Routes = [
  { path: '', redirectTo: 'gestion-candidat', pathMatch: 'full' },
  

  {
    path: '',
    component: DashboardComponent,

    children: [
      {
        path: 'accueil',
        component: AccueilComponent,
      },
      { path: 'gestion-demandes', component: GestionDemandesComponent },
      { path: 'gestion-candidat', component: GestionCandidatComponent },
      { path: 'gestion-entretiens', component: GestionEntretienComponent },
      { path: 'gestion-besoins', component: GestionBesoinsComponent },
      
      { path: 'statistiques', component: StatistiquesComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
