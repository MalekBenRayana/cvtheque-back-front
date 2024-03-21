import { Component, OnInit, ViewChild } from '@angular/core';
import { Besoin } from 'src/app/model/besoin';
import { besoinService } from 'src/app/service/besoin.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { FormGroup, FormBuilder } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AjoutBesoinComponent } from 'src/app/composants/ajout-besoin/ajout-besoin.component';
import { BesoinFile } from 'src/app/model/besoin-file';
import { UpdateBesoinComponent } from 'src/app/composants/update-besoin/update-besoin.component';
@Component({
  selector: 'app-gestion-besoins',
  templateUrl: './gestion-besoins.component.html',
  styleUrls: ['./gestion-besoins.component.css']
})
export class GestionBesoinsComponent implements OnInit {
  term: any;
  BesoinDetail !: FormGroup;
  BesoinList : Besoin[] = [];
  BesoinObj : Besoin = {} as Besoin;

  
  
    displayedColumns: string[] = ['idBesoin', 'FilBesoin', 'Date', 'PosteBesoin', 'Service', 
    'MotifBesoin', 'DateEmb', 'StatBesoin' ,'Besoin'];
    dataSource!: MatTableDataSource<any>;
  
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;
  
    constructor(private dialog : MatDialog, private formBuilder : FormBuilder, private besoinService : besoinService) { }
  
    ngOnInit(): void {
      this.getAllBesoin();
  
      this.BesoinDetail = this.formBuilder.group({
        
        idBesoin : [''],
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

    

    updateBesoin(idbesoin: number){
      console.log(this.BesoinDetail);
      this.BesoinObj.idBesoin = this.BesoinDetail.value.idBesoin;
      this.BesoinObj.filBesoin = this.BesoinDetail.value.filBesoin;
      this.BesoinObj.date = this.BesoinDetail.value.date;
      this.BesoinObj.posteBesoin = this.BesoinDetail.value.posteBesoin;
      this.BesoinObj.descPoste = this.BesoinDetail.value.descPoste;
      this.BesoinObj.service = this.BesoinDetail.value.service;
      this.BesoinObj.motifBesoin = this.BesoinDetail.value.motifBesoin;
      this.BesoinObj.dateEmb = this.BesoinDetail.value.dateEmb;
      this.BesoinObj.statBesoin = this.BesoinDetail.value.statBesoin;
      this.BesoinObj.besoin = this.BesoinDetail.value.besoin;


      this.besoinService.updateBesoin(this.BesoinObj, idbesoin).subscribe(res=>{
        console.log(res);
        this.getAllBesoin();
    },err=>{
        console.log(err);
    });
    }

    deleteBesoin(idBesoin : number) {

      this.besoinService.deleteBesoin(idBesoin).subscribe(res=>{
  
        console.log(res);
  
        alert('Le besoin a été supprimé avec succés');
        this.besoinService.getAllBesoin().subscribe(res=>{
          this.BesoinList=res
          
        })
      }
      ,err => {
        console.log(err);
  
      });
      location.reload();
  
  
    }

    getFileName(filePath: any) {
      if(filePath != null) {
        console.log("filePath. " + filePath)
        let filePathAsList = filePath.split('\\');
        let listLength: number = filePathAsList.length;
        return filePathAsList[listLength-1];
      }
      
    }

    download(data: BesoinFile){
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
  
  
    getAllBesoin() {
      this.besoinService.getAllBesoin().subscribe(res=>{
          this.BesoinList = res;
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
  
  
    editFiche(besoin : Besoin) {
      this.BesoinDetail.controls['idbesoin'].setValue(besoin.idBesoin);
      this.BesoinDetail.controls['filBesoin'].setValue(besoin.filBesoin);
      this.BesoinDetail.controls['date'].setValue(besoin.date);
      this.BesoinDetail.controls['posteBesoin'].setValue(besoin.posteBesoin);
      this.BesoinDetail.controls['descPoste'].setValue(besoin.descPoste);
      this.BesoinDetail.controls['service'].setValue(besoin.service);
      this.BesoinDetail.controls['motifBesoin'].setValue(besoin.motifBesoin);
      this.BesoinDetail.controls['dateEmb'].setValue(besoin.dateEmb);
      this.BesoinDetail.controls['statBesoin'].setValue(besoin.statBesoin);
      this.BesoinDetail.controls['besoin'].setValue(besoin.besoin);
  
    }
  
    openDialog() {
      this.dialog.open(AjoutBesoinComponent, {
        width:'30%'
      }).afterClosed().subscribe((val: string)=>{
        this.ngOnInit();
      })
    }
    openDialogUpdateBes(identifiant: number){
      this.dialog.open(UpdateBesoinComponent, {
        width:'30%',
        data: identifiant,
      }).afterClosed().subscribe((val: string)=>{
        this.ngOnInit();
      })
  
    }
  
  
}
