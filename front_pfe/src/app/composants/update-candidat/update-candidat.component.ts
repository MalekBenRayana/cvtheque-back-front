import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { candidatService } from 'src/app/service/candidat.service';
import { Candidat } from 'src/app/model/candidat';


@Component({
  selector: 'app-update-candidat',
  templateUrl: './update-candidat.component.html',
  styleUrls: ['./update-candidat.component.css']
})
export class UpdateCandidatComponent implements OnInit {
  CandidatToUpdate !: Candidat
  candidat !:  Candidat;
  CandidatUpdate : FormGroup= new FormGroup({
      nom : new FormControl(''),
      age : new FormControl(''),
      sf : new FormControl(''),
      formation : new FormControl(''),
      profil : new FormControl(''),
      total : new FormControl(''),
      adresse : new FormControl(''),
      demande : new FormControl(''),
      source : new FormControl(''),
      nature : new FormControl(''),
      cv : new FormControl(''),

  })
  CandidatObjUpdate !:  Candidat;

  constructor(private formBuilder : FormBuilder, public dialogRef: MatDialogRef<UpdateCandidatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private servicecandidat : candidatService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.servicecandidat.getById(this.data).subscribe(res=> {console.log(res) 
      this.CandidatToUpdate=res
    this.CandidatUpdate= new FormGroup({ identifiant : new FormControl(''),
    nom : new FormControl(this.CandidatToUpdate.nom),
    age : new FormControl(this.CandidatToUpdate.age),
    sf : new FormControl(this.CandidatToUpdate.sf),
    formation : new FormControl(this.CandidatToUpdate.formation),
    profil : new FormControl(this.CandidatToUpdate.profil),
    total : new FormControl(this.CandidatToUpdate.total),
    adresse : new FormControl(this.CandidatToUpdate.adresse),
    demande : new FormControl(this.CandidatToUpdate.demande),
    source : new FormControl(this.CandidatToUpdate.source),
    nature : new FormControl(this.CandidatToUpdate.nature),
    cv : new FormControl(this.CandidatToUpdate.cv),})
    }
    )
    this.CandidatUpdate = this.formBuilder.group({
      
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

  editCandidat() {
    
    this.candidat.nom = this.CandidatUpdate.value.nom;
    this.candidat.age = this.CandidatUpdate.value.age;
    this.candidat.sf = this.CandidatUpdate.value.sf;
    this.candidat.formation = this.CandidatUpdate.value.formation;
    this.candidat.profil = this.CandidatUpdate.value.profil;
    this.candidat.total = this.CandidatUpdate.value.total;
    this.candidat.adresse = this.CandidatUpdate.value.adresse;
    this.candidat.demande = this.CandidatUpdate.value.demande;
    this.candidat.source = this.CandidatUpdate.value.source;
    this.candidat.nature = this.CandidatUpdate.value.nature;
    this.candidat.cv = this.CandidatUpdate.value.cv;
   
    this.servicecandidat.updateCandidat(this.candidat, this.data).subscribe(res=>{
      console.log(res)
    })

    location.reload();
  }

  
  
}
