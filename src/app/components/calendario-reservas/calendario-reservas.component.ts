import { Component, OnInit } from '@angular/core';
import { Reservas } from 'src/app/Models/reservas';
import { Sala } from 'src/app/Models/sala';
import { ReservasService } from 'src/app/Services/reservas.service';
import { SalaServiceService } from 'src/app/Services/sala-service.service';

@Component({
  selector: 'app-calendario-reservas',
  templateUrl: './calendario-reservas.component.html',
  styleUrls: ['./calendario-reservas.component.css']
})
export class CalendarioReservasComponent implements OnInit {

  constructor(private resevasService: ReservasService, private salasSerives: SalaServiceService) { }

  salas: Sala[] = [];
  reservas: Reservas[] = [];

  ngOnInit(): void {
    this.getSalas();
    this.getReservas();
  }

  getReservas() {
    this.resevasService.getReservas().subscribe(data => {
      this.reservas = data
    });
  }

  getSalas() {
    this.salasSerives.getSalas().subscribe(data => {
      this.salas = data
    });
  }

}
