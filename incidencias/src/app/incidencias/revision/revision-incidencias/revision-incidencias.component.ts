import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../core/service/incidencia.service';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/service/auth.service';
import { take } from 'rxjs';
@Component({
  selector: 'app-revision-incidencias',
  templateUrl: './revision-incidencias.component.html',
  styleUrls: ['./revision-incidencias.component.css']
})
export class RevisionIncidenciasComponent implements OnInit {
  
 
  revisionForm: { [key: string]: FormGroup } = {};
  revisadoSeleccionado = 'todos';
  documentId: string = '';
  coleccion = 'incidencias';
  incidencias: any[] = [];
  rol?: string;
  email:string='';
  constructor(
    private service: IncidenciaService,
    private ruta: ActivatedRoute,
    private location: Location,
    private fb:FormBuilder,
    private serviceAuth: AuthService
  ) {
    
  }

  ngOnInit(): void {
    // Cargamos la lista de películas
    this.service.getAll(this.coleccion).subscribe(
      (resp: any) => {
        this.incidencias = [];
        resp.forEach((peliculaSnapshot: any) => {
          const documentId = peliculaSnapshot.payload.doc.id;
          this.revisionForm[documentId] = this.fb.group({
            revisado: [peliculaSnapshot.payload.doc.data().revisado, Validators.required]
          });
          this.incidencias.push(
            {
              documentId,
              data: peliculaSnapshot.payload.doc.data()
            }
          );
        });
      }
    );
   
    this.service.getUserByEmail().subscribe(rol => {
      
      this.rol = rol;
      console.log(this.rol)
    });
    
  }
      
  onSubmit(documentId: string) {
    // Obtenemos el rol del usuario actual
 
  
    
    

    this.revisionForm[documentId].patchValue({
    revisado: this.revisionForm[documentId].value.revisado
    });
    this.service.update("incidencias", documentId, this.revisionForm[documentId].value);
    let incidencia = this.incidencias.find(i => i.documentId === documentId);
    incidencia.data.revisado = this.revisionForm[documentId].value.revisado;
    }
    filtrarPorRevisado(revisado: string) {
      this.revisadoSeleccionado = revisado;
      this.service.getAll(this.coleccion).subscribe((resp: any) => {
      this.incidencias = [];
      resp.forEach((incidenciaSnapshot: any) => {
      if (incidenciaSnapshot.payload.doc.data().revisado === revisado || revisado === 'todos') {
      const documentId = incidenciaSnapshot.payload.doc.id;
      this.revisionForm[documentId] = this.fb.group({
      revisado: [incidenciaSnapshot.payload.doc.data().revisado, Validators.required]
      });
      this.incidencias.push({
      documentId,
      data: incidenciaSnapshot.payload.doc.data()
      });
      }
      });
      });
      }
      
  goBack(): void {
    this.location.back();
  }
}
