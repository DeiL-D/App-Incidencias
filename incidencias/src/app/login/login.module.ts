import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginformComponent } from './loginform/loginform.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { AltaUsuarioComponent } from './alta-usuario/alta-usuario.component';
import { Location } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    LoginformComponent,
    LoginPageComponent,
    AltaUsuarioComponent
    
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
    
  ],
  providers: [
    
  ],
  
})

export class LoginModule { }
