import { Component, OnInit } from '@angular/core';
import { Sala } from 'src/app/Models/sala';
import { SalaServiceService } from 'src/app/Services/sala-service.service';
import { ReservasService } from 'src/app/Services/reservas.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  // salas: Sala[] = [];
  cantidadSalas: number = 0;
  cantidadReservas: number = 0;
  constructor(private salasService: SalaServiceService, private reservaService: ReservasService) { }


  ngOnInit(): void {
    this.getSalas();
    this.getReservas();
  }

  getSalas() {
    this.salasService.getSalas().subscribe(data => {
      // this.salas = data;
      this.cantidadSalas = data.length;
    });
  }

  getReservas() {
    this.reservaService.getReservas().subscribe(data => {
      this.cantidadReservas = data.length;
    });
  }

}
