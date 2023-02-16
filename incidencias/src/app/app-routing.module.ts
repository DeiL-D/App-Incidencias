import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  AuthGuard,
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo,
} from '@angular/fire/auth-guard';
import { HasRoleGuard } from './core/guards/auth.guard.ts.guard';
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);
const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
      canActivate: [HasRoleGuard],
      data: {
        allowedRoles: ['admin', 'gestor','directivo']
      },
  },
  {
    path: 'Login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule)
  },
  {
    path: 'gestion', loadChildren: () => import('./incidencias/gestion/gestion.module').
                                          then(m => m.GestionModule),canActivate: [HasRoleGuard],
                                          data: {
                                            allowedRoles: ['admin', 'gestor']
                                          },
                                        
  },
 {
    path: 'introduccion', loadChildren: () => import('./incidencias/introduccion/introduccion.module').
                                            then(m => m.IntroduccionModule)
 },
 {
  path: 'usuarios', loadChildren: () => import('./incidencias/usuarios/usuarios.module').
                                          then(m => m.UsuariosModule),canActivate: [HasRoleGuard],
                                          data: {
                                            allowedRoles: ['admin']
                                          },
},
 {
  path: 'revision', loadChildren: () => import('./incidencias/revision/revision.module').
                                          then(m => m.RevisionModule),canActivate: [HasRoleGuard],
                                          data: {
                                            allowedRoles: ['admin', 'gestor','directivo']
                                          },
},

  {
    path: '**',
    redirectTo: '/introduccion',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
