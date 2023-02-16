import { NgModule} from '@angular/core';
import { NgIf } from '@angular/common';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { IntroduccionRoutingModule } from './introduccion-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroduccionIncidenciasComponent } from './introduccion-incidencias/introduccion-incidencias.component';
import { MatToolbar, MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [
    IntroduccionIncidenciasComponent
  ],
  imports: [
    CommonModule,
    IntroduccionRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    MatToolbarModule
  ]
})
export class IntroduccionModule { }
