import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reservas } from 'src/app/Models/reservas';
import { Sala } from 'src/app/Models/sala';

@Component({
  selector: 'app-tabla-reservas',
  templateUrl: './tabla-reservas.component.html',
  styleUrls: ['./tabla-reservas.component.css']
})
export class TablaReservasComponent implements OnInit {

  minDia: string = "";
  @Input() reservas: Reservas[] = [];
  @Input() salas: Sala[] = [];
  @Output() eliminarReservaEvento: EventEmitter<Reservas> = new EventEmitter();
  @Output() editarReserva: EventEmitter<Reservas> = new EventEmitter();
  reservaModal: Reservas = new Reservas();
  nombre: string = "";
  constructor() { }

  ngOnInit(): void {
    this.minDia = this.getDiaActual();
  }

  Modal(reserva: Reservas) {
    this.reservaModal.id = reserva.id;
    this.reservaModal.sala_id = reserva.sala_id;
    this.reservaModal.a_nombre_de = reserva.a_nombre_de;
    this.reservaModal.dia = reserva.dia;
    this.reservaModal.desde = reserva.desde;
    this.reservaModal.hasta = reserva.hasta;
    this.reservaModal.observaciones = reserva.observaciones;
    this.nombre = reserva.a_nombre_de;
  }

  EliminarReserva() {
    this.eliminarReservaEvento.emit(this.reservaModal);
  }

  EditarReserva() {
    this.editarReserva.emit(this.reservaModal);
  }

  getDiaActual(): string {
    var diaActual: Date = new Date();
    var dia: string = diaActual.getDate().toString();
    var mes: string = (diaActual.getMonth() + 1).toString();
    var ano: string = diaActual.getFullYear().toString();

    return ano + "-" + mes + "-" + dia;
  }

}
