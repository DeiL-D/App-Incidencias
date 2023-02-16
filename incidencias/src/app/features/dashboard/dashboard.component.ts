import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/service/auth.service';
import { IncidenciaService } from '../../core/service/incidencia.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
rol?: string='';
  constructor(private service:AuthService, private router: Router,
    private service2: IncidenciaService    ) { }

  ngOnInit(): void {
    this.service2.getUserByEmail().subscribe(rol => {
      
      this.rol = rol;
      console.log(this.rol)
    });
  }
  logout() {
    this.service
      .logout()
      .then(() => {this.router.navigate(['/']);
      this.service.isLoged=true;
    })
      .catch((e) => console.log(e.message));
  }
 

}
