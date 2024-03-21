import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { FicheEntretien } from 'src/app/model/fiche-entretien';
import { FicheFile } from 'src/app/model/fiche-file';
import { Interviewer } from 'src/app/model/interviewer';

import { FicheService } from 'src/app/service/fiche.service';
@Component({
  selector: 'app-ajout-fiche',
  templateUrl: './ajout-fiche.component.html',
  styleUrls: ['./ajout-fiche.component.css']
})
export class AjoutFicheComponent implements OnInit {

  FicheDetail !: FormGroup;
  FicheList : FicheEntretien[] = [];
  FicheObj : FicheEntretien = {} as FicheEntretien;
  interviewers: Interviewer[] = [];
  
  fileToUpload: File = {} as File;
  file : FicheFile = {} as FicheFile;

  addFicheURL : string;

  constructor(private formBuilder : FormBuilder,private ficheService : FicheService) { 
    this.addFicheURL = 'http://localhost:4200/addFiche';

  }

  
  

  ngOnInit(): void {
    this.getAllFiche();
    
    this.ficheService.getInterviewers().subscribe(res => {
      this.interviewers = res;
    }, err => {
      console.log("error while fetching data.")
    });;

    this.FicheDetail = this.formBuilder.group({
      //idFiche : [''],
      nometprenom : [''],
      nbentretien : [''],
      dateentretien : [''],
      typeentretien : [''],
      intervenantRBG : [''],
      statutent : [''],
      cv : [''],
      
  
    });    

  }
  getAllFiche() {
    this.ficheService.getAllFiche().subscribe(res=>{
        this.FicheList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  handleFileInput(event: Event) {
    const target= event.target as HTMLInputElement;
    this.fileToUpload = (target.files as FileList)[0];
}


  async addFiche() {
    console.log(this.FicheDetail);
    //this.FicheObj.idFiche = this.FicheDetail.value.idFiche;
    this.FicheObj.nometprenom = this.FicheDetail.value.nometprenom;
    this.FicheObj.nbentretien = this.FicheDetail.value.nbentretien;
    this.FicheObj.dateentretien = this.FicheDetail.value.dateentretien;
    this.FicheObj.typeentretien = this.FicheDetail.value.typeentretien;
    this.FicheObj.intervenantRBG = this.FicheDetail.value.intervenantRBG.value;
    this.FicheObj.statutent = this.FicheDetail.value.statutent;
    this.FicheObj.cv = this.FicheDetail.value.cv;
    

    this.file.name = this.FicheDetail.value.cv;
    this.file.type = 'application/pdf';
    this.FicheObj.cv = this.file;

    console.log('this.file.data ' + this.fileToUpload);
    this.ficheService.addFiche(this.FicheObj, this.fileToUpload).subscribe(res=>{
        console.log(res);
        this.getAllFiche();
    },err=>{
        console.log(err);
    });
    this.getAllFiche();

  }


  
}
