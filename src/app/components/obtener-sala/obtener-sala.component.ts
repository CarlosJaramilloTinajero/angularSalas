import { Component, Input, OnInit } from '@angular/core';
import { Reservas } from 'src/app/Models/reservas';
import { Sala } from 'src/app/Models/sala';

@Component({
  selector: 'app-obtener-sala',
  templateUrl: './obtener-sala.component.html',
  styleUrls: ['./obtener-sala.component.css']
})
export class ObtenerSalaComponent implements OnInit {

  @Input() salas: Sala[] = [];
  @Input() reserva: Reservas = new Reservas();
  reservaSala: string = "";
  constructor() { }

  ngOnInit(): void {
    this.getSala();
  }

  getSala() {
    this.salas.forEach(sala => {
      console.log(sala.nombre);
      if (sala.id == this.reserva.sala_id) {
        this.reservaSala = sala.nombre;
        console.log(this.reservaSala);
      }
    });
  }

}
