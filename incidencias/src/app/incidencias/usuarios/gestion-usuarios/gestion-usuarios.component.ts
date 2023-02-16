import { Component, OnInit } from '@angular/core';
import { IncidenciaService } from '../../../core/service/incidencia.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {
  rolForm: { [key: string]: FormGroup } = {};
  
  coleccion = 'usuarios';
  usuarios: any[] = [];
  documentId: string = '';
  eliminated: boolean=false;
  nombreBuscado: string = '';
  constructor(private service:IncidenciaService,
    private Location : Location,
    private fb:FormBuilder,
    ) { }

  ngOnInit(): void {
    this.service.getAll(this.coleccion).subscribe(
      (resp: any) => {
        this.usuarios = [];
        resp.forEach((peliculaSnapshot: any) => {
          const documentId = peliculaSnapshot.payload.doc.id;
          this.rolForm[documentId] = this.fb.group({
            rol: [peliculaSnapshot.payload.doc.data().rol, Validators.required]
          });
          this.usuarios.push(
            {
              documentId,
              data: peliculaSnapshot.payload.doc.data()
            }
          );
        });
      }
    );
   
    
  }
  onSubmit(documentId: string) {
    this.rolForm[documentId].patchValue({
      rol: this.rolForm[documentId].value.rol
      });
      this.service.update(this.coleccion, documentId, this.rolForm[documentId].value);
      let usuarios = this.usuarios.find(i => i.documentId === documentId);
      usuarios.data.rol = this.rolForm[documentId].value.rol;
    
  }
  filterUsuarios() {
    this.usuarios = this.usuarios.filter(usuario => usuario.data.email2.toLowerCase().includes(this.nombreBuscado.toLowerCase()));
  }
  onClickDelete(documentId: string){
    this.service.delete(this.coleccion,documentId)
  }
  eliminaUsuario(documentId: string) {
    this.eliminated=true;
    this.service.delete(this.coleccion,documentId)
  }
  goBack(){
    this.eliminated=false;
    this.Location.back();
  }
}
