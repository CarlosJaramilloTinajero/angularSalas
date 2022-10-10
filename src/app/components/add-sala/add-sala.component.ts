import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sala } from 'src/app/Models/sala';
import { SalaServiceService } from 'src/app/Services/sala-service.service';

@Component({
  selector: 'app-add-sala',
  templateUrl: './add-sala.component.html',
  styleUrls: ['./add-sala.component.css']
})
export class AddSalaComponent implements OnInit {

  sala: Sala = new Sala();
  nombre: string = "";
  ubicacion: string = "";
  descripcion: string = "";
  estado: string = "";
  constructor(private salaService: SalaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.sala = new Sala();
    this.sala.nombre = this.nombre;
    this.sala.ubicacion = this.ubicacion;
    this.sala.descripcion = this.descripcion;
    this.sala.estado = this.estado;

    this.salaService.addSala(this.sala).subscribe(data => {
      console.log(data);
      this.router.navigate(['/ListaSalas'],{
        queryParams:{success:'1'}
      });
    });
  }

}
