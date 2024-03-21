import { Component, OnInit, Inject } from '@angular/core';
import { Demande } from 'src/app/model/demande';
import { DemandeService } from 'src/app/service/demande.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-update-demande',
  templateUrl: './update-demande.component.html',
  styleUrls: ['./update-demande.component.css']
})
export class UpdateDemandeComponent implements OnInit {


 DemandeToUpdate !: Demande
 demande !:  Demande;
 DemandeUpdate : FormGroup= new FormGroup({
      filiale : new FormControl(''),
      date : new FormControl(''),
      poste : new FormControl(''),
      description : new FormControl(''),
      service : new FormControl(''),
      motif : new FormControl(''),
      dateEmb : new FormControl(''),
      statut : new FormControl(''),
      demande : new FormControl(''),
  })
  DemandeObjUpdate !:  Demande;

  constructor(private formBuilder : FormBuilder, public dialogRef: MatDialogRef<UpdateDemandeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private servicedemande : DemandeService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.servicedemande.getById(this.data).subscribe(res=> {console.log(res) 
      this.DemandeToUpdate=res
    this.DemandeUpdate= new FormGroup({ id : new FormControl(''),
    filiale : new FormControl(this.DemandeToUpdate.filiale),
    date : new FormControl(this.DemandeToUpdate.date),
    poste : new FormControl(this.DemandeToUpdate.poste),
    description : new FormControl(this.DemandeToUpdate.description),
    service : new FormControl(this.DemandeToUpdate.service),
    motif : new FormControl(this.DemandeToUpdate.motif),
    dateEmb : new FormControl(this.DemandeToUpdate.dateEmb),
    statut : new FormControl(this.DemandeToUpdate.statut),
    demande : new FormControl(this.DemandeToUpdate.demande),})
    
    }
    )
  
    this.DemandeUpdate = this.formBuilder.group({
      
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

  editDemande() {
    
    this.demande.filiale = this.DemandeUpdate.value.filiale;
    this.demande.date = this.DemandeUpdate.value.date;
    this.demande.poste = this.DemandeUpdate.value.poste;
    this.demande.description = this.DemandeUpdate.value.description;
    this.demande.service = this.DemandeUpdate.value.service;
    this.demande.motif = this.DemandeUpdate.value.motif;
    this.demande.dateEmb = this.DemandeUpdate.value.dateEmb;
    this.demande.statut = this.DemandeUpdate.value.statut;
    this.demande.demande = this.DemandeUpdate.value.demande;
 
   
    this.servicedemande.updateDemande(this.demande , this.data).subscribe(res=>{
      console.log(res)
    })

    location.reload();
  }

  
  
}


