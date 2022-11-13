import { Component, Input, OnInit } from '@angular/core';
import { timeout } from 'rxjs';
import { Reservas } from 'src/app/Models/reservas';
import { Sala } from 'src/app/Models/sala';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  // Datos de entrada
  @Input() reservas: Reservas[] = [];
  @Input() salas: Sala[] = [];
  // @Input() recargarLasReservas: EventL

  // Helpers
  diaSemana: string[] = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  meses: string[] = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Juio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];

  // Mes y año de el calendario
  ano: number = 0;
  mes: string = "";
  mesInt: number = 0;

  // Fecha por default de el calendario
  date: Date = new Date("2022-11-1");

  // Dias del mes
  dias: number[] = [];

  // Cantidad de reservas por dia
  reservasPorDia: number[] = [];


  // Registros de reservas que se van a mostrar con el modal
  reservasModal: Reservas[] = [];
  diaModal: number = 0;


  constructor() { }

  ngOnInit(): void {
    if (this.reservas.length == 0) {
      setInterval(() => {
        this.getDia();
      }, 1500);
    }
    this.getDia();
  }


  // Obtener los dias de la semana de cada mes con  sus posiciones en cada dia de la semana y poner cuantas reservs tiene cada dia
  getDia() {
    this.mes = this.meses[this.date.getMonth()];
    this.mesInt = this.date.getMonth();
    this.ano = this.date.getFullYear();

    var mesVar: number = this.date.getMonth();
    var indice: number = 0;

    if (new Date(this.ano, mesVar, 1).getDay() == 0) {
      indice = 6;
    } else {
      indice = (new Date(this.ano, mesVar, 1).getDay()) - 1;
    }

    for (let i = 0; i < this.getCantidadDias(mesVar, this.ano) + indice; i++) {
      if (i >= indice) {
        this.dias[i] = i - (indice - 1);
        this.reservasPorDia[i] = this.getCantidadDeReservasPorDia(new Date(this.ano, this.mesInt, this.dias[i]));
      }
    }

  }


  // Obtener las reservas que tiene cada dia
  getReservasModal(dia: number) {
    this.reservasModal = [];
    if (dia < 10) {
      var fecha: string = this.ano.toString() + "-" + (this.mesInt + 1).toString() + "-0" + dia.toString();
    } else {
      var fecha: string = this.ano.toString() + "-" + (this.mesInt + 1).toString() + "-" + dia.toString();
    }
    this.reservasModal = this.reservas.filter(reserva => reserva.dia == fecha);
    this.diaModal = dia;
  }


  // Siguiente mes
  siguiente() {
    if (this.mesInt == 11) {
      this.date = new Date(this.ano + 1, 0, 1);
    } else if (this.mesInt < 11) {
      this.date = new Date(this.ano, this.mesInt + 1, 1);
    }
    this.inicializarVar();
    this.getDia();
  }

  // Mes anterior
  anterior() {
    if (this.mesInt == 0) {
      this.date = new Date(this.ano - 1, 11, 1);
    } else if (this.mesInt > 0) {
      this.date = new Date(this.ano, this.mesInt - 1, 1);
    }
    this.inicializarVar();
    this.getDia();
  }


  // Helpers
  inicializarVar() {
    this.mes = "";
    this.mesInt = 0;
    this.ano = 0;
    this.dias = [];
  }

  // Obtener la cantidad de dias que tiene cada mes
  getCantidadDias(mes: number, ano: number): number {
    return new Date(ano, mes + 1, 0).getDate();
  }

  // Obtener la cantidad de reservas de cada dia
  getCantidadDeReservasPorDia(date: Date): number {
    var cant: number = 0;
    this.reservas.forEach(reserva => {
      var dateReserva: Date = new Date(reserva.dia);
      dateReserva.setDate(dateReserva.getDate() + 1);
      if (dateReserva.getDate() == date.getDate() && dateReserva.getMonth() == date.getMonth()
        && dateReserva.getFullYear() == date.getFullYear()) {
        cant++;
      }
    });
    return cant;
  }
}
