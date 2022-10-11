import { Component, OnInit } from '@angular/core';
import { Reservas } from 'src/app/Models/reservas';
import { Sala } from 'src/app/Models/sala';
import { ReservasService } from 'src/app/Services/reservas.service';
import { SalaServiceService } from 'src/app/Services/sala-service.service';

@Component({
  selector: 'app-reservar-sala',
  templateUrl: './reservar-sala.component.html',
  styleUrls: ['./reservar-sala.component.css']
})
export class ReservarSalaComponent implements OnInit {

  success: number = 0;
  msg: string = "";
  salas: Sala[] = [];
  reservas: Reservas[] = [];
  constructor(private reservasService: ReservasService, private salasService: SalaServiceService) { }

  ngOnInit(): void {
    this.getSalas();
    this.getReservas();

  }

  QuitarAlert() {
    this.success = 0;
    this.msg = "";
  }

  getReservas() {
    this.reservasService.getReservas().subscribe(data => {
      this.reservas = data;
    });
  }

  getSalas() {
    this.salasService.getSalas().subscribe(data => {
      this.salas = data;
    });
  }

  deleteReserva(reserva: Reservas) {
    this.reservasService.deleteReserva(reserva).subscribe(data => {
      this.getReservas();
      console.log(data);
      this.success = 1;
      this.msg = "Reserva eliminada correctamente";
    });
  }

  updateReserva(reserva: Reservas) {
    this.reservasService.updateReserva(reserva).subscribe(data => {
      this.getReservas();
      this.success = 1;
      this.msg = "Reserva modificada correctamente";
    });
  }

  addReserva(reserva: Reservas) {
    this.reservasService.addReserva(reserva).subscribe(data => {
      console.log(data);
      this.getReservas();
      this.success = 1;
      this.msg = "Reserva agregada correctamente";
    });
  }
}
