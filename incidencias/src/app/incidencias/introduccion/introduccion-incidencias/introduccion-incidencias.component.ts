import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncidenciaService } from 'src/app/core/service/incidencia.service';
import { Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../core/service/auth.service';
@Component({
  selector: 'app-introduccion-incidencias',
  templateUrl: './introduccion-incidencias.component.html',
  styleUrls: ['./introduccion-incidencias.component.css']
})
export class IntroduccionIncidenciasComponent implements OnInit {
  isLoged:boolean=false;
 
  submitted: boolean = false;
  datosUsu: any;
  coleccion='incidencias';
  rol:string='';
  formIncidencias = this.fb.group({
    asignado: ['Desconocido'],
    estado: ['Sin Leer'],
    fecha: ['',Validators.required],
    incidencia: ['',Validators.required],
    lugar:['',Validators.required],
    revisado:['No Revisado']
    
    
    
    
  });
  documentId: string = '';
  incidencias: any;
  
 
  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private service:IncidenciaService,
    private location: Location,
    private router:Router,
    private service2:AuthService
  ) {}

 
  ngOnInit(): void {
    this.service2.isAuthenticated().subscribe((isAuth) => {
      this.isLoged = isAuth;
    });
    this.service.getUserByEmail().subscribe(rol => {
      
      this.rol = rol;
      console.log(this.rol)
    });
    
  }
  onSubmit() {
   
  
      
  }

  goBack(): void {
    this.location.back();
    
  }
  falsoSubm(): void {
    this.submitted=false;
  }
  logout() {
    this.service2
      .logout()
      .then(() => this.router.navigate(['/']))
      .catch((e) => console.log(e.message));
  }
  AddIncidencias(){
    
  
  if(this.formIncidencias.valid){
    this.incidencias= this.formIncidencias.value;
    this.service.create(this.coleccion,this.incidencias);
    this.submitted = true;
  }else {
    alert("Todos los campos son obligatorios");
  }
  
  }

}
