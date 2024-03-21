import { FicheFile } from "./fiche-file";
import { Interviewer } from "./interviewer";

export class FicheEntretien {
    idfiche : number;
    nometprenom : string;
    nbentretien  : number;
    dateentretien : Date;
    typeentretien : string;
    intervenantRBG : Interviewer[];
    statutent : string;
    cv : FicheFile;


    constructor(idfiche: number,nometprenom : string,nbentretien : number,dateentretien : Date,
        typeentretien : string,intervenantRBG : Interviewer[],statutent : string,cv : FicheFile,) {

            this.idfiche = idfiche;
            this.nometprenom = nometprenom;
            this.nbentretien = nbentretien;
            this.dateentretien = dateentretien;
            this.typeentretien = typeentretien;
            this.intervenantRBG = intervenantRBG;
            this.statutent = statutent;
            this.cv = cv;
            
            
    }

}
