import { NgModule } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { ReactiveFormsModule, FormsModule, Form } from '@angular/forms';
import { GestionUsuariosComponent } from './gestion-usuarios/gestion-usuarios.component';


@NgModule({
  declarations: [
    GestionUsuariosComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class UsuariosModule { }
