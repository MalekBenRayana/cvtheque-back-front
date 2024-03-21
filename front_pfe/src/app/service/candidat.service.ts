import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CVFile } from '../model/cv-file';
import { Candidat } from '../model/candidat';

@Injectable({
  providedIn: 'root'
})
export class candidatService {

  addCandidatURL : string;
  getCandidatURL : string;
  updateCandidatURL : string;
  deleteCandidatURL : string;
  getByIdURL : string;

  constructor(private http : HttpClient) {

    this.addCandidatURL = 'http://localhost:8080/addCandidat';
    this.getCandidatURL = 'http://localhost:8080/candidats';
    this.updateCandidatURL = 'http://localhost:8080/updateCandidat';
    this.deleteCandidatURL = 'http://localhost:8080/deleteCandidat';
    this.getByIdURL = 'http://localhost:8080/getcandidat/';

   }

   addCandidat(candidat : Candidat, file: File) : Observable<any>{

  
        const formData: FormData = new FormData();
        const candidatData = JSON.stringify(candidat);
      formData.append('candidatData', candidatData);
    formData.append('file', file, file.name);
    return this.http.post(this.addCandidatURL, formData  );
  }

   getAllCandidat(): Observable<Candidat[]>{
     return this.http.get<Candidat[]>(this.getCandidatURL);
   }

   updateCandidat(candidat :Candidat, identifiant: number) : Observable<Candidat>{
     return this.http.put<Candidat>(this.updateCandidatURL+'/'+ identifiant, candidat);
   }

   deleteCandidat(identifiant : number)  {
     return this.http.delete(this.deleteCandidatURL+'/'+identifiant);
   }

   getById (identifiant: number){
     return this.http.get<Candidat>(this.getByIdURL+ identifiant);
   }
  


}
