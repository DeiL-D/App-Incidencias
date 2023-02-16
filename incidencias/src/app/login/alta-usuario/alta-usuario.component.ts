import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { LoginData } from 'src/app/core/model/login-data';
import { AuthService } from '../../core/service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { IncidenciaService } from '../../core/service/incidencia.service';
import { DocumentReference } from '@firebase/firestore-types';
@Component({
  selector: 'app-alta-usuario',
  templateUrl: './alta-usuario.component.html',
  styleUrls: ['./alta-usuario.component.css']
})
export class AltaUsuarioComponent implements OnInit {
 
 

  
  coleccion='usuarios';
 
  usuarios = {
    rol:'unknow',
    email2:'',
    password2:''
    
  }
  
 
  
  
 
  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private service: IncidenciaService,
    private router:Router,
    private authservice:AuthService
  ) {}

 
  ngOnInit(): void {
    
  }
 
  register(data: LoginData) {
    this.usuarios!.email2= data.email;
    this.usuarios!.password2= data.password;
  
    console.log(this.usuarios);
  
    this.authservice
      .register(data)
      .then(() => {
        this.router.navigate(['/Login']);
        this.service.create(this.coleccion, this.usuarios)
          .then(doc => {
            // Guardar el rol en el local storage
            localStorage.setItem('role',  doc.id);
          })
      })
      .catch((e) => console.log(e.message));
  }
  
}
