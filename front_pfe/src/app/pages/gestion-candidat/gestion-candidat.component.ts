import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AjoutCandidatComponent } from 'src/app/composants/ajout-candidat/ajout-candidat.component';
import { candidatService } from 'src/app/service/candidat.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { CVFile } from 'src/app/model/cv-file';
import { UpdateCandidatComponent } from 'src/app/composants/update-candidat/update-candidat.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { toBase64String } from '@angular/compiler/src/output/source_map';
import { Candidat } from 'src/app/model/candidat';


@Component({
  selector: 'app-gestion-candidat',
  templateUrl: './gestion-candidat.component.html',
  styleUrls: ['./gestion-candidat.component.css']
})
export class GestionCandidatComponent implements OnInit {
  term: any;
  CandidatDetail !: FormGroup;
  CandidatObj : Candidat = {} as Candidat;
  CandidatList : Candidat[] = [];

  displayedColumns: string[] = ['identifiant', 'nom', 'age', 'sf', 'formation' , 'profil', 'total',
  'adresse', 'demande', 'source', 'nature', 'cv', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  
    
  
  

  constructor(private formBuilder : FormBuilder, private candidatService : candidatService, private dialog : MatDialog) { }

  
  ngOnInit(): void {
    this.getAllCandidat();

    this.CandidatDetail = this.formBuilder.group({
      identifiant : [''],
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

  download(data: CVFile){
    var byteCharacters = atob(data.data);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
       byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
  var blob = new Blob([byteArray], { type: data.type  });
    const url= window.URL.createObjectURL(blob);
    console.log("url. " + url)
    window.open(url, '_blank'); 

  }


  getAllCandidat() {
    this.candidatService.getAllCandidat().subscribe(res=>{
        this.CandidatList = res;
    },err=>{
      console.log("error while fetching data.")
    });
  }

  convertToByteArray(input:any) {
    var sliceSize = 512;
    var bytes = [];
  
    for (var offset = 0; offset < input.length; offset += sliceSize) {
      var slice = input.slice(offset, offset + sliceSize);
  
      var byteNumbers = new Array(slice.length);
  
      for (var i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
  
      const byteArray = new Uint8Array(byteNumbers);
  
      bytes.push(byteArray);
    }
  
    return bytes;
  }

  

  editCandidat(candidat : Candidat) {
    
    this.CandidatDetail.controls['nom'].setValue(candidat.nom);
    this.CandidatDetail.controls['age'].setValue(candidat.age);
    this.CandidatDetail.controls['sf'].setValue(candidat.sf);
    this.CandidatDetail.controls['formation'].setValue(candidat.formation);
    this.CandidatDetail.controls['profil'].setValue(candidat.profil);
    this.CandidatDetail.controls['total'].setValue(candidat.total);
    this.CandidatDetail.controls['adresse'].setValue(candidat.adresse);
    this.CandidatDetail.controls['demande'].setValue(candidat.demande);
    this.CandidatDetail.controls['source'].setValue(candidat.source);
    this.CandidatDetail.controls['nature'].setValue(candidat.nature);
    this.CandidatDetail.controls['cv'].setValue(candidat.cv); 


  }

  updateCandidat(identifiant: number) {

    console.log(this.CandidatDetail);
     
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
    this.CandidatObj.cv = this.CandidatDetail.value.cv;

    this.candidatService.updateCandidat(this.CandidatObj,identifiant ).subscribe(res=>{
      console.log(res);
      this.getAllCandidat();
    },err=>{
      console.log(err);
    })

  }

  

  deleteCandidat(identifiant : number) {

    this.candidatService.deleteCandidat(identifiant).subscribe(res=>{

      console.log(res);

      alert('Le candidat a été supprimé avec succés');
      this.candidatService.getAllCandidat().subscribe(res=>{
        this.CandidatList=res
        
      })
    }
    ,err => {
      console.log(err);

    });
    location.reload();


  }

  openDialog() {
    this.dialog.open(AjoutCandidatComponent, {
      width:'30%'
    }).afterClosed().subscribe((val: string)=>{
      if (val =='sauvegarder'){
        this.getAllCandidat();
      }
    })
  }
  

  openDialogUpdate(identifiant: number){
    this.dialog.open(UpdateCandidatComponent, {
      width:'30%',
      data: identifiant,
    }).afterClosed().subscribe((val: string)=>{
      if (val =='sauvegarder'){
        this.getAllCandidat();
      }
    })

  }

  getFileName(filePath: any) {
    if(filePath != null) {
      console.log("filePath. " + filePath)
      let filePathAsList = filePath.split('\\');
      let listLength: number = filePathAsList.length;
      return filePathAsList[listLength-1];
    }
    
  }

}
