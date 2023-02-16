import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'register', component: AltaUsuarioComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
