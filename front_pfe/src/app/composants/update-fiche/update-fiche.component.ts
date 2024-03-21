import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FicheEntretien } from 'src/app/model/fiche-entretien';
import { FicheService } from 'src/app/service/fiche.service';

@Component({
  selector: 'app-update-fiche',
  templateUrl: './update-fiche.component.html',
  styleUrls: ['./update-fiche.component.css']
})
export class UpdateFicheComponent implements OnInit {

  FicheToUpdate !: FicheEntretien
 fiche !:  FicheEntretien;
 FicheUpdate : FormGroup= new FormGroup({
  

  nometprenom : new FormControl(''),
  nbentretien : new FormControl(''),
  dateentretien : new FormControl(''),
  typeentretien : new FormControl(''),
  intervenantRBG : new FormControl(''),
  statutent : new FormControl(''),
  cv : new FormControl(''),
    
  })
  FicheObjUpdate !:  FicheEntretien;

  constructor(private formBuilder : FormBuilder, public dialogRef: MatDialogRef<UpdateFicheComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private servicefiche : FicheService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.servicefiche.getById(this.data).subscribe(res=> {console.log(res) 
      this.FicheToUpdate=res
    this.FicheUpdate= new FormGroup({ idfiche : new FormControl(''),
    nometprenom : new FormControl(this.FicheToUpdate.nometprenom),
    nbentretien : new FormControl(this.FicheToUpdate.nbentretien),
    dateentretien : new FormControl(this.FicheToUpdate.dateentretien),
    typeentretien : new FormControl(this.FicheToUpdate.typeentretien),
    intervenantRBG : new FormControl(this.FicheToUpdate.intervenantRBG),
    statutent : new FormControl(this.FicheToUpdate.statutent),
    cv : new FormControl(this.FicheToUpdate.cv),
    })
    
    }
    )
  
    this.FicheUpdate = this.formBuilder.group({
      
      nometprenom : [''],
      nbentretien : [''],
      dateentretien : [''],
      typeentretien : [''],
      intervenantRBG : [''],
      statutent : [''],
      cv : [''],
      

    });    

  }

  
  editFiche() {
    
    this.fiche.nometprenom = this.FicheUpdate.value.nometprenom;
    this.fiche.nbentretien = this.FicheUpdate.value.nbentretien;
    this.fiche.dateentretien = this.FicheUpdate.value.dateentretien;
    this.fiche.typeentretien = this.FicheUpdate.value.typeentretien;
    this.fiche.intervenantRBG = this.FicheUpdate.value.intervenantRBG;
    this.fiche.statutent = this.FicheUpdate.value.statutent;
    this.fiche.cv = this.FicheUpdate.value.cv;
    
    this.servicefiche.updateFiche(this.fiche , this.data).subscribe(res=>{
      console.log(res)
    })

    location.reload();
  }

  
}



