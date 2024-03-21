import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AjoutDemandeComponent } from 'src/app/composants/ajout-demande/ajout-demande.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Demande } from 'src/app/model/demande';
import { DemandeService } from 'src/app/service/demande.service';
import { UpdateDemandeComponent } from 'src/app/composants/update-demande/update-demande.component';
import { DemandeFile } from 'src/app/model/demande-file';

@Component({
  selector: 'app-gestion-demandes',
  templateUrl: './gestion-demandes.component.html',
  styleUrls: ['./gestion-demandes.component.css']
})
export class GestionDemandesComponent implements OnInit {
  term: any;
  DemandeDetail !: FormGroup;
  DemandeObj : Demande = {} as Demande;
  DemandeList : Demande[] = [];

  displayedColumns: string[] = ['id', 'filiale', 'Date', 'Poste', 'Description' , 'Service', 
  'Motif', 'DateEmb', 'Statut', ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(private formBuilder : FormBuilder, private dialog : MatDialog, private demandeService : DemandeService  ) { }

  ngOnInit(): void {this.getAllDemande();

    this.DemandeDetail = this.formBuilder.group({
      id : [''],
      filiale : [''],
      date : [''],
      poste : [''],
      description :[''], 
      service : [''],
      Motif : [''],
      dateEmb :[''], 
      statut : [''],
      

    });  
  }

  
  download(data: DemandeFile){
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

  getFileName(filePath: any) {
    if(filePath != null) {
      console.log("filePath. " + filePath)
      let filePathAsList = filePath.split('\\');
      let listLength: number = filePathAsList.length;
      return filePathAsList[listLength-1];
    }
    
  }

  getAllDemande() {
    this.demandeService.getAllDemande().subscribe(res=>{
        this.DemandeList = res;
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

  

  

  openDialog() {
    this.dialog.open(AjoutDemandeComponent, {
      width:'30%'
    }).afterClosed().subscribe((val: string)=>{
      if (val =='sauvegarder'){
        this.getAllDemande();
      }
    })
  }

  editDemande(demande : Demande) {
    this.DemandeDetail.controls['id'].setValue(demande.id);
    this.DemandeDetail.controls['filiale'].setValue(demande.filiale);
    this.DemandeDetail.controls['date'].setValue(demande.date);
    this.DemandeDetail.controls['poste'].setValue(demande.poste);
    this.DemandeDetail.controls['description'].setValue(demande.description);
    this.DemandeDetail.controls['service'].setValue(demande.service);
    this.DemandeDetail.controls['motif'].setValue(demande.motif);
    this.DemandeDetail.controls['dateEmb'].setValue(demande.dateEmb);
    this.DemandeDetail.controls['statut'].setValue(demande.statut);


  }
  updateDemande(id: number) {

    console.log(this.DemandeDetail);
     
    this.DemandeObj.id = this.DemandeDetail.value.id;
    this.DemandeObj.filiale = this.DemandeDetail.value.filiale    ;
    this.DemandeObj.date = this.DemandeDetail.value.date;
    this.DemandeObj.poste = this.DemandeDetail.value.poste;
    this.DemandeObj.description = this.DemandeDetail.value.description;
    this.DemandeObj.service = this.DemandeDetail.value.service;
    this.DemandeObj.motif = this.DemandeDetail.value.motif;
    this.DemandeObj.dateEmb = this.DemandeDetail.value.dateEmb;
    this.DemandeObj.statut = this.DemandeDetail.value.statut;
    

    this.demandeService.updateDemande(this.DemandeObj,id ).subscribe(res=>{
      console.log(res);
      this.getAllDemande();
    },err=>{
      console.log(err);
    })

  }

  deleteDemande(id : number) {

    this.demandeService.deleteDemande(id).subscribe(res=>{

      console.log(res);

      alert('La demande a été supprimée avec succés');
      this.demandeService.getAllDemande().subscribe(res=>{
        this.DemandeList=res
        
      })
    }
    ,err => {
      console.log(err);

    });
    location.reload();


  }


  openDialogUpdateDem(id: number){
    this.dialog.open(UpdateDemandeComponent, {
      width:'30%',
      data: id,
    }).afterClosed().subscribe((val: string)=>{
      if (val =='sauvegarder'){
        this.getAllDemande();
      }
    })

  }
}
