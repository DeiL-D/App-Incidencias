import { Timestamp } from "@angular/fire/firestore";

export interface Incidencia {
    documentId: string,
    data: {
        fecha?: string,
        asignado?: string,
        incidencia?: string,
        estado?: string,
        lugar?:string,
        revisado?:String
     
    }
}
