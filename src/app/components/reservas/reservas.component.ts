import { Component, OnInit } from '@angular/core';
import { Reservas } from 'src/app/Models/reservas';
import { Sala } from 'src/app/Models/sala';
import { ReservasService } from 'src/app/Services/reservas.service';
import { SalaServiceService } from 'src/app/Services/sala-service.service';
import { interval, timer } from 'rxjs';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  class: string = "";
  success: number = 0;
  msg: string = "";
  salas: Sala[] = [];
  reservas: Reservas[] = [];
  constructor(private salasService: SalaServiceService, private reservasService: ReservasService) { }

  ngOnInit(): void {
    this.getSalas();
    this.getReservas();
  }

  QuitarAlert() {
    this.success = 0;
    this.msg = "";
  }

  getReservas() {
    this.reservasService.getReservas().subscribe(data => this.reservas = data);
  }

  getSalas() {
    this.salasService.getSalas().subscribe(data => {
      this.salas = data;
      // this.salas.forEach(sala => console.log(sala.nombre))
    });
  }

  deleteReserva(reserva: Reservas) {
    this.reservasService.deleteReserva(reserva).subscribe(data => {
      this.getReservas();
      console.log(data);
      this.success = 1;
      this.msg = "Reserva eliminada correctamente";
      this.class = "alert alert-success";
    });
  }

  updateReserva(reserva: Reservas) {
    this.reservasService.updateReserva(reserva).subscribe(data => {
      this.getReservas();
      this.success = 1;
      this.msg = "Reserva modificada correctamente";
      this.class = "alert alert-success";
    });
  }

}
