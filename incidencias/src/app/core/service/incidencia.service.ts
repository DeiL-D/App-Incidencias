import { Injectable } from '@angular/core';
import { Incidencia } from 'src/app/interface/incidencia';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {

  private Coleccion = "incidencia";

  constructor(  private afb : AngularFirestore) { }
  getAll(coleccion: string) {
    return this.afb.collection(coleccion).snapshotChanges();
  }

  getOne(coleccion: string, documentId: string) {
    return this.afb.collection(coleccion).doc(documentId).snapshotChanges();
  }

  update(coleccion: string, documentId: string, data: any) {
    return this.afb.collection(coleccion).doc(documentId).update(data);
  }

  create(coleccion: string, data: any) {
    return this.afb.collection(coleccion).add(data);
    
  }
  newincidencia(incidencia: Incidencia){
    return this.afb.collection(this.Coleccion).add(incidencia);
  }

  delete(coleccion: string, documentId: string) {
    return this.afb.collection(coleccion).doc(documentId).delete();
  }
}
