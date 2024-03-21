import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Besoin } from 'src/app/model/besoin';
import { besoinService } from 'src/app/service/besoin.service';

@Component({
  selector: 'app-update-besoin',
  templateUrl: './update-besoin.component.html',
  styleUrls: ['./update-besoin.component.css']
})
export class UpdateBesoinComponent implements OnInit {

  BesoinToUpdate !: Besoin
  besoin !:  Besoin;
  BesoinUpdate : FormGroup= new FormGroup({
    filBesoin : new FormControl(''),
    date : new FormControl(''),
    posteBesoin : new FormControl(''),
    descPoste : new FormControl(''),
    service : new FormControl(''),
    motifBesoin : new FormControl(''),
    dateEmb : new FormControl(''),
    statBesoin : new FormControl(''),
    besoin : new FormControl(''),
      

  })
  BesoinObjUpdate !:  Besoin;

  constructor(private formBuilder : FormBuilder, public dialogRef: MatDialogRef<UpdateBesoinComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private servicebesoin : besoinService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.servicebesoin.getById(this.data).subscribe(res=> {console.log(res) 
      this.BesoinToUpdate=res
    this.BesoinUpdate= new FormGroup({ idbesoin : new FormControl(''),
    filBesoin : new FormControl(this.BesoinToUpdate.filBesoin),
    date : new FormControl(this.BesoinToUpdate.date),
    posteBesoin : new FormControl(this.BesoinToUpdate.posteBesoin),
    descPoste : new FormControl(this.BesoinToUpdate.descPoste),
    service : new FormControl(this.BesoinToUpdate.service),
    motifBesoin : new FormControl(this.BesoinToUpdate.motifBesoin),
    dateEmb : new FormControl(this.BesoinToUpdate.dateEmb),
    statBesoin : new FormControl(this.BesoinToUpdate.statBesoin),
    besoin : new FormControl(this.BesoinToUpdate.besoin),})
  }
  )
    this.BesoinUpdate = this.formBuilder.group({
      
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

  editBesoin() {
    
    this.besoin.filBesoin = this.BesoinUpdate.value.filBesoin;
    this.besoin.date = this.BesoinUpdate.value.date;
    this.besoin.posteBesoin = this.BesoinUpdate.value.posteBesoin;
    this.besoin.descPoste = this.BesoinUpdate.value.descPoste;
    this.besoin.service = this.BesoinUpdate.value.service;
    this.besoin.motifBesoin = this.BesoinUpdate.value.motifBesoin;
    this.besoin.dateEmb = this.BesoinUpdate.value.dateEmb;
    this.besoin.statBesoin = this.BesoinUpdate.value.statBesoin;
    this.besoin.besoin = this.BesoinUpdate.value.besoin;
    
   
    this.servicebesoin.updateBesoin(this.besoin, this.data ).subscribe(res=>{
      console.log(res)
    })

    location.reload();
  }

  
  
}