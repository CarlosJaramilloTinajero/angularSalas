import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reservas } from 'src/app/Models/reservas';
import { Sala } from 'src/app/Models/sala';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {

  @Input() reservas: Reservas[] = [];
  @Input() salas: Sala[] = [];
  @Output() addReserva: EventEmitter<Reservas> = new EventEmitter();
  reserva: Reservas = new Reservas();
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.validar()) {
      this.addReserva.emit(this.reserva);
      this.reserva = new Reservas();
    }
  }

  validar(): boolean {

    let fechaInicio = new Date(this.reserva.dia + " " + this.reserva.desde);
    let fechaFinal = new Date(this.reserva.dia + " " + this.reserva.hasta);
    // var modal = document.getElementById(alerta);

    //No supe obtener la zona horaria del usuario
    // let fechaActual = new Date();

    // if (+fechaInicio < +fechaActual) {
    //     modal.innerHTML = '<h6 class="alert alert-danger">La fecha de inicio no debe ser menor a la fecha actual</h6>';
    //     return false;
    // }

    let horaF = fechaFinal.getHours();
    let horaI = fechaInicio.getHours();

    let minF = fechaFinal.getMinutes();
    let minI = fechaInicio.getMinutes();


    let horaFEnMinutos = horaF * 60;
    let horaIEnMinutos = horaI * 60;

    if ((horaFEnMinutos + minF) - (horaIEnMinutos + minI) <= 120 &&
      (horaFEnMinutos + minF) - (horaIEnMinutos + minI) > 0) {
      return true;
    }

    if ((horaFEnMinutos + minF) - (horaIEnMinutos + minI) == 0) {
      // modal.innerHTML = '<h6 class="alert alert-danger">La hora  de inicio y final es la misma</h6>';

      console.log("La hora  de inicio y final es la misma");
      return false;
    }

    if ((horaFEnMinutos + minF) - (horaIEnMinutos + minI) < 0) {
      // modal.innerHTML = '<h6 class="alert alert-danger">La hora  de final debe ser mayor a la de inicio</h6>';
      console.log("La hora  de final debe ser mayor a la de inicio");
      return false;
    }

    // modal.innerHTML = '<h6 class="alert alert-danger">La reserva no debe ser mayor a dos horas</h6>';
    console.log("La reserva no debe ser mayor a dos horas");
    return false;
  }
}
