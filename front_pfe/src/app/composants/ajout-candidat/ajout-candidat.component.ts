import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Candidat } from '../../model/candidat' ;
import { MatDialogRef } from '@angular/material/dialog';

import { candidatService } from 'src/app/service/candidat.service';
import { CVFile } from 'src/app/model/cv-file';

import { Byte } from '@angular/compiler/src/util';
@Component({
  selector: 'app-ajout-candidat',
  templateUrl: './ajout-candidat.component.html',
  styleUrls: ['./ajout-candidat.component.css']
})
export class AjoutCandidatComponent implements OnInit {

  CandidatDetail !: FormGroup;
  CandidatList : Candidat[] = [];
  CandidatObj : Candidat = {} as Candidat;

  fileToUpload: File = {} as File;
  file : CVFile = {} as CVFile;

  addCandidatURL : string;

  constructor(private formBuilder : FormBuilder,private candidatService : candidatService, 
    ) { 
    this.addCandidatURL = 'http://localhost:4200/addCandidat';

  }

  

  ngOnInit(): void {
    this.getAllCandidat();
    
    this.CandidatDetail = this.formBuilder.group({
      //identifiant : [''],
      nom : [''],
      age : [''],
      sf : [''],
      formation : [''],
      profil : [''],
      total : [''],
      adresse : [''],
      demande : [''],
      source : [''],
      nature : [''],
      cv : [''],
  
    });    

  }
  getAllCandidat() {
    this.candidatService.getAllCandidat().subscribe(res=>{
        this.CandidatList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  handleFileInput(event: Event) {
    const target= event.target as HTMLInputElement;
    this.fileToUpload = (target.files as FileList)[0];
}

  async addCandidat() {
    console.log(this.CandidatDetail);
    //this.CandidatObj.identifiant = this.CandidatDetail.value.identifiant;
    this.CandidatObj.nom = this.CandidatDetail.value.nom;
    this.CandidatObj.age = this.CandidatDetail.value.age;
    this.CandidatObj.sf = this.CandidatDetail.value.sf;
    this.CandidatObj.formation = this.CandidatDetail.value.formation;
    this.CandidatObj.profil = this.CandidatDetail.value.profil;
    this.CandidatObj.total = this.CandidatDetail.value.total;
    this.CandidatObj.adresse = this.CandidatDetail.value.adresse;
    this.CandidatObj.demande = this.CandidatDetail.value.demande;
    this.CandidatObj.source = this.CandidatDetail.value.source;
    this.CandidatObj.nature = this.CandidatDetail.value.nature;

    this.file.name = this.CandidatDetail.value.cv;
    this.file.type = 'application/pdf';
    this.CandidatObj.cv = this.file;

    console.log('this.file.data ' + this.fileToUpload);
    this.candidatService.addCandidat(this.CandidatObj, this.fileToUpload).subscribe(res=>{
        console.log(res);
        this.getAllCandidat();
    },err=>{
        console.log(err);
    });
    location.reload();

  }


  
}
