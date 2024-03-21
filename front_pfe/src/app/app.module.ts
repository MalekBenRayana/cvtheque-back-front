import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './composants/sidebar/sidebar.component';
import { HeaderComponent } from './composants/header/header.component';
import { InscriptionComponent } from './pages/inscription/inscription.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GestionCandidatComponent } from './pages/gestion-candidat/gestion-candidat.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AjoutCandidatComponent } from './composants/ajout-candidat/ajout-candidat.component';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { GestionDemandesComponent } from './pages/gestion-demandes/gestion-demandes.component';
import { HttpClientModule } from '@angular/common/http';
import { AjoutDemandeComponent } from './composants/ajout-demande/ajout-demande.component';
import { GestionEntretienComponent } from './pages/gestion-entretien/gestion-entretien.component';
import { GestionBesoinsComponent } from './pages/gestion-besoins/gestion-besoins.component';
import { AjoutBesoinComponent } from './composants/ajout-besoin/ajout-besoin.component';
import { UpdateCandidatComponent } from './composants/update-candidat/update-candidat.component';
import{MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { StatistiquesComponent } from './pages/statistiques/statistiques.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { UpdateDemandeComponent } from './composants/update-demande/update-demande.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { AjoutFicheComponent } from './composants/ajout-fiche/ajout-fiche.component';
import { UpdateFicheComponent } from './composants/update-fiche/update-fiche.component';
import { UpdateBesoinComponent } from './composants/update-besoin/update-besoin.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    InscriptionComponent,
    DashboardComponent,
    GestionCandidatComponent,
    AccueilComponent,
    AjoutCandidatComponent,
    GestionDemandesComponent,
    AjoutDemandeComponent,
    GestionEntretienComponent,
    GestionBesoinsComponent,
    AjoutBesoinComponent,
    UpdateCandidatComponent,
    StatistiquesComponent,
    UpdateDemandeComponent,
    AjoutFicheComponent,
    UpdateFicheComponent,
    UpdateBesoinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatInputModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    HttpClientModule,
    MatDatepickerModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    PdfViewerModule
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
