import { DemandeFile } from "./demande-file";

export class Demande {
    id: number;
    filiale: string;
    date: Date;
    poste: string;
    description: string;
    service: string;
    motif: string;
    dateEmb: Date;
    statut: string;
    demande : DemandeFile;
 
 

    constructor(id: number,filiale : string,date : Date,poste : string,description : string,
        service : string,motif : string,dateEmb : Date,statut : string,demande : DemandeFile,) {

            this.id = id;
            this.filiale = filiale;
            this.date = date;
            this.poste = poste;
            this.description = description;
            this.service = service;
            this.motif = motif;
            this.dateEmb = dateEmb;
            this.demande = demande;
            this.statut = statut;
            this.demande = demande;
            
    }


}
