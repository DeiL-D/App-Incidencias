import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IncidenciaService } from '../../../core/service/incidencia.service';
import { Location } from '@angular/common';
import * as firebase from 'firebase/compat';

@Component({
  selector: 'app-gestion-incidencias',
  templateUrl: './gestion-incidencias.component.html',
  styleUrls: ['./gestion-incidencias.component.css']
})
export class GestionIncidenciasComponent implements OnInit {
  eliminated: boolean=false;
  incidencias: any[] = [];
  datosCli: any;
  coleccion='incidencias';
  formIncidencias = this.fb.group({
    estado: [''],
    asignado: [''],
    
    
    
  });
  documentId: string = '';
  clientes: any;
  
 
  constructor(
    private fb: FormBuilder,
    private ruta: ActivatedRoute,
    private service:IncidenciaService,
    private location: Location,
  ) {}

  

 
  ngOnInit(): void {
    this.documentId = this.ruta.snapshot.paramMap.get('documentId')!;
    this.service.getOne(this.coleccion,this.documentId).subscribe((resp: any) => { 
      this.formIncidencias.setValue({
        estado: resp.payload.data().estado,
       
        asignado: resp.payload.data().asignado,
        
      });
    });
  }
  onSubmit() {
   
    this.service.update(this.coleccion, this.documentId,this.formIncidencias.getRawValue());
  }
  eliminaIncidencia() {
    this.eliminated=true;
    this.service.delete(this.coleccion,this.documentId)
  }
  goBack(): void {
    this.location.back();
  }


}
