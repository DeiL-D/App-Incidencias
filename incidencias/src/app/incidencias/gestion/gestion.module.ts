import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { GestionRoutingModule } from './gestion-routing.module';
import { GestionIncidenciasComponent } from './gestion-incidencias/gestion-incidencias.component';


@NgModule({
  declarations: [
    GestionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    GestionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class GestionModule { }
