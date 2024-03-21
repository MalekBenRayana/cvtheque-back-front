import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { FormGroup, FormBuilder } from '@angular/forms';
import { FicheEntretien } from 'src/app/model/fiche-entretien';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FicheService } from 'src/app/service/fiche.service';
import { AjoutFicheComponent } from 'src/app/composants/ajout-fiche/ajout-fiche.component';
import { FicheFile } from 'src/app/model/fiche-file';
import { UpdateDemandeComponent } from 'src/app/composants/update-demande/update-demande.component';
import { Interviewer } from 'src/app/model/interviewer';

@Component({
  selector: 'app-gestion-entretien',
  templateUrl: './gestion-entretien.component.html',
  styleUrls: ['./gestion-entretien.component.css']
})
export class GestionEntretienComponent implements OnInit {
  term: any;
  FicheDetail !: FormGroup;
  FicheObj: FicheEntretien = {} as FicheEntretien;
  FicheList: FicheEntretien[] = [];



  displayedColumns: string[] = ['idfiche', 'nometprenom', 'nbentretien', 'dateentretien', 'typeentretien', 'intervenantRBG',
    'statutent', 'cv'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private formBuilder: FormBuilder, private ficheService: FicheService) { }

  ngOnInit(): void {
    this.getAllFiche();

    this.FicheDetail = this.formBuilder.group({

      idfiche: [''],
      nometprenom: [''],
      nbentretien: [''],
      dateentretien: [''],
      typeentretien: [''],
      intervenantRBG: [''],
      statutent: [''],
      cv: [''],
    });
  }
  download(data: FicheFile) {
    var byteCharacters = atob(data.data);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: data.type });
    const url = window.URL.createObjectURL(blob);
    console.log("url. " + url)
    window.open(url, '_blank');

  }


  getAllFiche() {
    this.ficheService.getAllFiche().subscribe(res => {
      console.log('res: ' + res);
      this.FicheList = res;

      this.FicheList.forEach((e) => {
        console.log('ff: ' + e.intervenantRBG);
      });
     
    }, err => {
      console.log("error while fetching data.")
    });
  }

  convertToByteArray(input: any) {
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
    this.dialog.open(AjoutFicheComponent, {
      width: '30%'
    }).afterClosed().subscribe((val: string) => {
      if (val == 'sauvegarder') {
        this.getAllFiche();
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



  updateFiche(idfiche: number) {
    console.log(this.FicheDetail);
    this.FicheObj.idfiche = this.FicheDetail.value.idfiche;
    this.FicheObj.nometprenom = this.FicheDetail.value.nometprenom;
    this.FicheObj.nbentretien = this.FicheDetail.value.nbentretien;
    this.FicheObj.dateentretien = this.FicheDetail.value.dateentretien;
    this.FicheObj.typeentretien = this.FicheDetail.value.typeentretien;
    this.FicheObj.intervenantRBG = this.FicheDetail.value.intervenantRBG;
    this.FicheObj.statutent = this.FicheDetail.value.statutent;
    this.FicheObj.cv = this.FicheDetail.value.cv;


    this.ficheService.updateFiche(this.FicheObj, idfiche).subscribe(res => {
      console.log(res);
      this.getAllFiche();
    }, err => {
      console.log(err);
    });

  }

  deleteFiche(idfiche: number) {

    this.ficheService.deleteFiche(idfiche).subscribe(res => {

      console.log(res);

      alert('La demande a été supprimée avec succés');
      this.ficheService.getAllFiche().subscribe(res => {
        this.FicheList = res

      })
    }
      , err => {
        console.log(err);

      });
    location.reload();


  }

  editFiche(fiche: FicheEntretien) {
    this.FicheDetail.controls['idfiche'].setValue(fiche.idfiche);
    this.FicheDetail.controls['nometprenom'].setValue(fiche.nometprenom);
    this.FicheDetail.controls['nbentretien'].setValue(fiche.nbentretien);
    this.FicheDetail.controls['dateentretien'].setValue(fiche.dateentretien);
    this.FicheDetail.controls['typeentretien'].setValue(fiche.typeentretien);
    this.FicheDetail.controls['intervenantRBG'].setValue(fiche.intervenantRBG);
    this.FicheDetail.controls['statutent'].setValue(fiche.statutent);
    this.FicheDetail.controls['cv'].setValue(fiche.cv);


  }
  openDialogUpdatefiche(id: number) {
    this.dialog.open(UpdateDemandeComponent, {
      width: '30%',
      data: id,
    }).afterClosed().subscribe((val: string) => {
      if (val == 'sauvegarder') {
        this.getAllFiche();
      }
    })

  }


}


