
export class Interviewer {
    idInterviewer: number;
    firstName : string;
    lastName : string;
    poste : string;

    constructor( idInterviewer: number, firstName : string,lastName : string,poste : string) {
        this.idInterviewer = idInterviewer;
        this.firstName = firstName;
        this.lastName = lastName;
        this.poste = poste;
    }

}