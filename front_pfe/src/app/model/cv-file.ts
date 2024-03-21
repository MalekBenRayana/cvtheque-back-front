import { Byte } from "@angular/compiler/src/util";

export class CVFile {
    id: number;
    data : string;
    name : string;
    type : string;

    constructor( id: number, data : string,name : string,type : string) {
        this.id = id;
        this.data = data;
        this.name = name;
        this.type = type;
    }

}
