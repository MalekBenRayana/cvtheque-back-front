import { BesoinFile } from "./besoin-file";
export class Besoin {
    idBesoin: number;
    filBesoin : string;
    date : Date;
    posteBesoin : string;
    descPoste : string;
    service : string;
    motifBesoin : string;
    dateEmb : Date;
    statBesoin : string;
    besoin : BesoinFile;

    constructor(idbesoin: number,filBesoin : string,date : Date,posteBesoin : string,descPoste : string,
        service : string,motifBesoin : string,dateEmb : Date,statBesoin : string,besoin : BesoinFile ) {

            this.idBesoin = idbesoin;
            this.filBesoin = filBesoin;
            this.date = date;
            this.posteBesoin = posteBesoin;
            this.descPoste = descPoste;
            this.service = service;
            this.motifBesoin = motifBesoin;
            this.dateEmb = dateEmb;
            this.statBesoin = statBesoin;
            this.besoin = besoin;
            
    }
}



                