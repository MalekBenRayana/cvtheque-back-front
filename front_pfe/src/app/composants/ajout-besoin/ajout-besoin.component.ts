import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { besoinService } from 'src/app/service/besoin.service';
import { Besoin } from 'src/app/model/besoin';
import { BesoinFile } from 'src/app/model/besoin-file';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-ajout-besoin',
  templateUrl: './ajout-besoin.component.html',
  styleUrls: ['./ajout-besoin.component.css']
})
export class AjoutBesoinComponent implements OnInit {

 
  BesoinDetail !: FormGroup;
  BesoinList : Besoin[] = [];
  BesoinObj : Besoin = {} as Besoin;

  fileToUpload: File = {} as File;
  file : BesoinFile = {} as BesoinFile;

  addBesoinURL : string;

  constructor(private formBuilder : FormBuilder,private besoinService : besoinService,
    public dialogRef: MatDialogRef<AjoutBesoinComponent>) { 
    this.addBesoinURL = 'http://localhost:4200/addBesoin';

  }

  

  ngOnInit(): void {
    this.getAllBesoin();
    
    this.BesoinDetail = this.formBuilder.group({
      //idbesoin : [''],
      filBesoin : [''],
      date : [''],
      posteBesoin : [''],
      descPoste : [''],
      service : [''],
      motifBesoin : [''],
      dateEmb : [''],
      statBesoin : [''],
      besoin : [''],
      
  
    });    

  }
  getAllBesoin() {
    this.besoinService.getAllBesoin().subscribe(res=>{
        this.BesoinList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  handleFileInput(event: Event) {
    const target= event.target as HTMLInputElement;
    this.fileToUpload = (target.files as FileList)[0];
}

  async addBesoin() {
    console.log(this.BesoinDetail);
    //this.BesoinObj.idbesoin = this.BesoinDetail.value.idbesoin;
    this.BesoinObj.filBesoin = this.BesoinDetail.value.filBesoin;
    this.BesoinObj.date = this.BesoinDetail.value.date;
    this.BesoinObj.posteBesoin = this.BesoinDetail.value.posteBesoin;
    this.BesoinObj.descPoste = this.BesoinDetail.value.descPoste;
    this.BesoinObj.service = this.BesoinDetail.value.service;
    this.BesoinObj.motifBesoin = this.BesoinDetail.value.motifBesoin;
    this.BesoinObj.dateEmb = this.BesoinDetail.value.dateEmb;
    this.BesoinObj.statBesoin = this.BesoinDetail.value.statBesoin;
    this.BesoinObj.besoin = this.BesoinDetail.value.besoin;
    

    this.file.name = this.BesoinDetail.value.besoin;
    this.file.type = 'application/pdf';
    this.BesoinObj.besoin = this.file;

    console.log('this.file.data ' + this.fileToUpload);
    this.besoinService.addBesoin(this.BesoinObj, this.fileToUpload).subscribe(res=>{
        console.log(res);
        this.ngOnInit();
    },err=>{
        console.log(err);
    });
    location.reload();

  }


  
}
