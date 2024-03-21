import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Besoin } from '../model/besoin';
@Injectable({
  providedIn: 'root'
})
export class besoinService {

  addBesoinURL : string;
  getBesoinURL : string;
  updateBesoinURL : string;
  deleteBesoinURL : string;
  getByIdURL : string;


  constructor(private http : HttpClient) {

    this.addBesoinURL = 'http://localhost:8080/addBesoin';
    this.getBesoinURL = 'http://localhost:8080/besoins';
    this.updateBesoinURL = 'http://localhost:8080/updateBesoin';
    this.deleteBesoinURL = 'http://localhost:8080/deleteBesoinById';
    this.getByIdURL = 'http://localhost:8080/getbesoin';


   }

   addBesoin(besoin : Besoin, file: File) : Observable<any>{

  
    const formData: FormData = new FormData();
    const besoinData = JSON.stringify(besoin);
    formData.append('besoinData', besoinData);
    formData.append('file', file, file.name);
return this.http.post(this.addBesoinURL, formData  );
}

   getAllBesoin(): Observable<Besoin[]>{
     return this.http.get<Besoin[]>(this.getBesoinURL);
   }

   updateBesoin(besoin :Besoin, idBesoin: number) : Observable<Besoin>{
    return this.http.put<Besoin>(this.updateBesoinURL+'/'+ idBesoin, besoin);
  }

  deleteBesoin(idBesoin : number)  {
    return this.http.delete(this.deleteBesoinURL+'/'+idBesoin);
  }

  getById (idBesoin: number){
    return this.http.get<Besoin>(this.getByIdURL+ idBesoin);
  }
}