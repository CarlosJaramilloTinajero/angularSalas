import { Component, ElementRef, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Reservas } from 'src/app/Models/reservas';
import { Sala } from 'src/app/Models/sala';

@Component({
  selector: 'app-nueva-reserva',
  templateUrl: './nueva-reserva.component.html',
  styleUrls: ['./nueva-reserva.component.css']
})
export class NuevaReservaComponent implements OnInit {

  inputInvalid: string[] = ["", "", ""];


  msgA: string = "";
  classA: string = "";
  mostrarA: number = 0;

  minDia: string = "";
  @Input() reservas: Reservas[] = [];
  @Input() salas: Sala[] = [];
  @Output() addReserva: EventEmitter<Reservas> = new EventEmitter();
  reserva: Reservas = new Reservas();
  constructor() { }

  ngOnInit(): void {
    this.minDia = this.getDiaActual();
  }

  onSubmit(form: NgForm) {

    if (this.reserva.a_nombre_de == "" || this.reserva.dia == "" || this.reserva.desde == "" || this.reserva.hasta == "" || this.reserva.observaciones == "") {
      if (this.reserva.a_nombre_de == "") {
        this.inputInvalid[0] = "invalido";
      }
      if (this.reserva.dia == "") {
        this.inputInvalid[1] = "invalido";
      }
      if (this.reserva.desde == "") {
        this.inputInvalid[2] = "invalido";
      }
      if (this.reserva.hasta == "") {
        this.inputInvalid[3] = "invalido";
      }
      if (this.reserva.observaciones == "") {
        this.inputInvalid[4] = "invalido";
      }
    } else {
      if (this.validar()) {
        this.addReserva.emit(this.reserva);
        form.reset();
        this.reserva = new Reservas();
        for (let i = 0; i < this.inputInvalid.length; i++) {
          this.inputInvalid[i] = "";
        }
      }
    }
  }

  validar(): boolean {

    let fechaInicio = new Date(this.reserva.dia + " " + this.reserva.desde);
    let fechaFinal = new Date(this.reserva.dia + " " + this.reserva.hasta);

    let horaF = fechaFinal.getHours();
    let horaI = fechaInicio.getHours();

    let minF = fechaFinal.getMinutes();
    let minI = fechaInicio.getMinutes();


    let horaFEnMinutos = horaF * 60;
    let horaIEnMinutos = horaI * 60;


    // if (new Date().getTime() > fechaInicio.getTime()) {
    //   this.ponerAlert("La fecha de reserva esta expirada", "alert alert-danger letrasChicas");
    //   return false;
    // }

    if ((horaFEnMinutos + minF) - (horaIEnMinutos + minI) == 0) {
      this.ponerAlert("La hora  de inicio y final es la misma", "alert alert-danger letrasChicas");
      return false;
    }

    if ((horaFEnMinutos + minF) - (horaIEnMinutos + minI) < 0) {
      this.ponerAlert("La hora  de final debe ser mayor a la de inicio", "alert alert-danger letrasChicas");
      return false;
    }

    if ((horaFEnMinutos + minF) - (horaIEnMinutos + minI) > 120) {
      this.ponerAlert("La reserva no debe ser mayor a dos horas", "alert alert-danger letrasChicas");
      return false;
    }

    if ((horaFEnMinutos + minF) - (horaIEnMinutos + minI) <= 120 &&
      (horaFEnMinutos + minF) - (horaIEnMinutos + minI) > 0) {
      this.quitarAlertaa();
      // window.scroll(0, 0);
      return true;
    }

    return true;
  }

  geHoraActual(): string {
    var diaActual: Date = new Date();
    var hora: string = diaActual.getHours().toString();
    var min: string = diaActual.getMinutes().toString();
    return hora + ":" + min;
  }

  getDiaActual(): string {
    var diaActual: Date = new Date();
    var dia: string = diaActual.getDate().toString();
    var mes: string = (diaActual.getMonth() + 1).toString();
    var ano: string = diaActual.getFullYear().toString();

    return ano + "-" + mes + "-" + dia;
  }

  quitarAlertaa() {
    this.msgA = "";
    this.classA = "";
    this.mostrarA = 0;
  }

  ponerAlert(msg: string, clas: string) {
    this.msgA = msg;
    this.classA = clas;
    this.mostrarA = 1;
  }
}
