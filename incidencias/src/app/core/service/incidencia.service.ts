import { Injectable } from '@angular/core';
import { Incidencia } from '../model/incidencia';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map, Observable, of, switchMap, take } from 'rxjs';
import { User, Auth } from '@angular/fire/auth';
import { AuthService } from './auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class IncidenciaService {
private rol:string =''
  private Coleccion = "incidencia";

  constructor(  private afb : AngularFirestore,
   private Auth : AuthService,
   private AngularFireAuth: AngularFireAuth
    ) { }
  getAll(coleccion: string) {
    return this.afb.collection(coleccion).snapshotChanges();
  }

  getOne(coleccion: string, documentId: string) {
    return this.afb.collection(coleccion).doc(documentId).snapshotChanges();
  }
  getUserByEmail(): Observable<string> {
    return this.AngularFireAuth.authState.pipe(
      take(1),
      switchMap((user) => {
        if (!user) {
          return of('');
        }
        const email = user.email || '';
        return this.afb.collection('usuarios', ref => ref.where('email2', '==', email)).valueChanges().pipe(
          map((users: any[]) => {
            if (!users || users.length === 0) {
              return '';
            }
            const userData = users[0];
            return userData.rol;
          })
        );
      })
    );
  }
  getFilterForRevision(coleccion:string){
if(this.afb.collection(this.Coleccion, ref=> ref . where('revision', '==','revisado')))
     return true
     else{
      return false
     }
    
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
