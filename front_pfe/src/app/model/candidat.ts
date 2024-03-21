import { CVFile } from "./cv-file";

export class Candidat {
    identifiant: number;
    nom : string;
    age : number;
    sf : string;
    formation : string;
    profil : string;
    total : number;
    adresse : string;
    demande : string;
    source : string;
    nature :string;
    cv : CVFile; 

    constructor(identifiant: number,nom : string,age : number,sf : string,formation : string,
        profil : string,total : number,adresse : string,demande : string,source : string,
        nature :string,cv : CVFile ) {

            this.identifiant = identifiant;
            this.nom = nom;
            this.age = age;
            this.sf = sf;
            this.formation = formation;
            this.profil = profil;
            this.total = total;
            this.adresse = adresse;
            this.demande = demande;
            this.source = source;
            this.nature = nature;
            this.cv = cv;
    }

}
