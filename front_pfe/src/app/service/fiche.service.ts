import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FicheEntretien } from '../model/fiche-entretien';
import { Interviewer } from '../model/interviewer';

@Injectable({
  providedIn: 'root'
})
export class FicheService {

  addFicheURL : string;
  getFicheURL : string;
  updateFicheURL : string;
  deleteFicheURL : string;
  getByIdURL: string;

  getListOfInterviewersUrl: string;


  constructor(private http : HttpClient) {
    this.addFicheURL = 'http://localhost:8080/addEntretien';
    this.getFicheURL = 'http://localhost:8080/fiches';
    this.updateFicheURL = 'http://localhost:8080/updateFiche';
    this.deleteFicheURL = 'http://localhost:8080/deleteFiche';
    this.getByIdURL = 'http://localhost:8080/getFiche';
    this.getListOfInterviewersUrl = 'http://localhost:8080/interviewers';


   }

   addFiche(fiche : FicheEntretien, file: File) : Observable<any>{

  
    const formData: FormData = new FormData();
    const entretienData = JSON.stringify(fiche);
    formData.append('entretienData', entretienData);
  formData.append('file', file, file.name);
  return this.http.post(this.addFicheURL, formData  );
  }

   getAllFiche(): Observable<FicheEntretien[]>{
     return this.http.get<FicheEntretien[]>(this.getFicheURL);
   }

   getInterviewers(): Observable<Interviewer[]>{
    return this.http.get<Interviewer[]>(this.getListOfInterviewersUrl);
  }
   

   updateFiche(fiche :FicheEntretien, idfiche: number) : Observable<FicheEntretien>{
    return this.http.put<FicheEntretien>(this.updateFicheURL+'/'+ idfiche, fiche);
  }

  deleteFiche(idfiche : number)  {
    return this.http.delete(this.deleteFicheURL+'/'+idfiche);
  }

  getById (idfiche: number){
    return this.http.get<FicheEntretien>(this.getByIdURL+ idfiche);
  }
  
   }