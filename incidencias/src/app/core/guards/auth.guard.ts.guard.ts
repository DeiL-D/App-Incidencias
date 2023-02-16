import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { IncidenciaService } from '../service/incidencia.service';
import { AuthService } from '../service/auth.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { catchError, map, Observable, of, switchMap, take, tap } from 'rxjs';
import * as firebase from 'firebase/compat';
import { Route } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class HasRoleGuard implements CanActivate {
  // inyectamos el AuthService en el constructor
  constructor(
    private authService: AuthService,
    private router: Router,
    private firestore: AngularFirestore,
    private afAuth: AngularFireAuth,
    private inciservice:IncidenciaService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const allowedRoles = route.data?.['allowedRoles'];

    return this.afAuth.authState.pipe(
      take(1),
      switchMap((user) => {
        if (!user) {
          return of(false);
        }
        const email = user.email || '';
        // Obtenemos el rol del usuario desde la base de datos
        return this.getUserByEmail(email).pipe(
          map((users: any[]) => {
            if (!users || users.length === 0) {
              return false;
            }
            const userData = users[0];
            return allowedRoles.includes(userData.rol);
          })
        );
      }),
      tap((hasRole) => {
        if (!hasRole) {
          console.log('Acceso denegado');
          this.router.navigate(['login']);
        }
      })
    );
  }

  // Método para obtener el usuario por email
  getUserByEmail(email: string) {
    return this.firestore.collection('usuarios', (ref) =>
      ref.where('email2', '==', email)
    ).valueChanges();
  }
}

