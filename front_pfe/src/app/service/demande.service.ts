import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Demande } from '../model/demande';

@Injectable({
  providedIn: 'root'
})
export class DemandeService {

  addDemandeURL : string;
  getDemandeURL : string;
  updateDemandeURL : string;
  deleteDemandeURL : string;
  getByIdURL : string;


  constructor(private http : HttpClient) {

    this.addDemandeURL = 'http://localhost:8080/addDemande';
    this.getDemandeURL = 'http://localhost:8080/demandes';
    this.updateDemandeURL = 'http://localhost:8080/updateDemande';
    this.deleteDemandeURL = 'http://localhost:8080/deleteDemande';
    this.getByIdURL = 'http://localhost:8080/getDemande';

   }

   addDemande(demande : Demande, file: File) : Observable<any>{

  
    const formData: FormData = new FormData();
    const demandeData = JSON.stringify(demande);
  formData.append('demandeData', demandeData);
formData.append('file', file, file.name);
return this.http.post(this.addDemandeURL, formData  );
}

  getAllDemande(): Observable<Demande[]>{
    return this.http.get<Demande[]>(this.getDemandeURL);
  }

  updateDemande(demande :Demande, id: number) : Observable<Demande>{
    return this.http.put<Demande>(this.updateDemandeURL+'/'+ id, demande);
  }

  deleteDemande(id : number)  {
    return this.http.delete(this.deleteDemandeURL+'/'+id);
  }

  getById (id: number){
    return this.http.get<Demande>(this.getByIdURL+ id);
  }
}



