import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIf } from '@angular/common';
import { RevisionRoutingModule } from './revision-routing.module';
import { RevisionIncidenciasComponent } from './revision-incidencias/revision-incidencias.component';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RevisionIncidenciasComponent,
    
  ],
  imports: [
    CommonModule,
    RevisionRoutingModule,
    NgIf,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class RevisionModule { }
