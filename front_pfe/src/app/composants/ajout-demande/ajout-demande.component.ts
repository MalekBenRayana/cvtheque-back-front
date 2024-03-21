import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators,  } from '@angular/forms';
import { DemandeService } from 'src/app/service/demande.service';
import { DemandeFile } from 'src/app/model/demande-file';
import { Demande } from 'src/app/model/demande';



@Component({
  selector: 'app-ajout-demande',
  templateUrl: './ajout-demande.component.html',
  styleUrls: ['./ajout-demande.component.css']
})
export class AjoutDemandeComponent implements OnInit {
  DemandeDetail !: FormGroup;
  DemandeList : Demande[] = [];
  DemandeObj : Demande = {} as Demande;

  fileToUpload: File = {} as File;
  file : DemandeFile = {} as DemandeFile;

  addDemandeURL : string;

  constructor(private formBuilder : FormBuilder,private demandeService : DemandeService) { 
    this.addDemandeURL = 'http://localhost:4200/addDemande';

  }

  

  ngOnInit(): void {
    this.getAllDemande();
    
    this.DemandeDetail = this.formBuilder.group({
      //id : [''],
      filiale : [''],
      date : [''],
      poste : [''],
      description : [''],
      service : [''],
      motif : [''],
      dateEmb : [''],
      statut : [''],
      demande : [''],
      
  
    });    

  }
  getAllDemande() {
    this.demandeService.getAllDemande().subscribe(res=>{
        this.DemandeList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  handleFileInput(event: Event) {
    const target= event.target as HTMLInputElement;
    this.fileToUpload = (target.files as FileList)[0];
}

  async addDemande() {
    console.log(this.DemandeDetail);
    //this.DemandeObj.id = this.DemandeDetail.value.id;
    this.DemandeObj.filiale = this.DemandeDetail.value.filiale;
    this.DemandeObj.date = this.DemandeDetail.value.date;
    this.DemandeObj.poste = this.DemandeDetail.value.poste;
    this.DemandeObj.description = this.DemandeDetail.value.description;
    this.DemandeObj.service = this.DemandeDetail.value.service;
    this.DemandeObj.motif = this.DemandeDetail.value.motif;
    this.DemandeObj.dateEmb = this.DemandeDetail.value.dateEmb;
    this.DemandeObj.statut = this.DemandeDetail.value.statut;
    this.DemandeObj.demande = this.DemandeDetail.value.demande;

    this.file.name = this.DemandeDetail.value.demande;
    this.file.type = 'application/pdf';
    this.DemandeObj.demande = this.file;

    console.log('this.file.data ' + this.fileToUpload);
    this.demandeService.addDemande(this.DemandeObj, this.fileToUpload).subscribe(res=>{
        console.log(res);
        this.getAllDemande();
    },err=>{
        console.log(err);
    });
    location.reload();

  }

  

  
}
