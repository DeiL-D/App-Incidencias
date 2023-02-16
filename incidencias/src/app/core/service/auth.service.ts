import { Injectable } from '@angular/core';
import { LoginData } from '../model/login-data';
import { Auth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, User } from '@angular/fire/auth';
import { filter, map, switchMap } from 'rxjs/operators';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { Observable, of } from 'rxjs';
import { Firestore } from '@angular/fire/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 public isLoged:boolean=false;
  constructor(private auth: Auth,
    private servicecompa:AngularFireAuth,
    private firestore:Firestore
    ) {}

  login({ email, password }: LoginData) {
    return signInWithEmailAndPassword(this.auth, email, password);
    
  }
  register({ email, password }: LoginData) {
    return createUserWithEmailAndPassword(this.auth, email, password)
    ;
  }
 
  isAuthenticated() {
    return this.servicecompa.authState.pipe(map((user) => !!user));
  }
  getCurrentUserEmail() {
  return  this.auth.currentUser?.email
    
  }
  getUser$(){
    return this.servicecompa.user;
  }
  logout() {
    return signOut(this.auth);
  }
  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider());
  }
}


