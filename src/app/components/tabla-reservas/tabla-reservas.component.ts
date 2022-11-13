import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Reservas } from 'src/app/Models/reservas';
import { Sala } from 'src/app/Models/sala';
import { SalaServiceService } from 'src/app/Services/sala-service.service';

@Component({
  selector: 'app-tabla-reservas',
  templateUrl: './tabla-reservas.component.html',
  styleUrls: ['./tabla-reservas.component.css']
})
export class TablaReservasComponent implements OnInit {

  buscardor: string = "";
  minDia: string = "";
  @Input() mostrarAcciones: boolean = true;
  @Input() reservas: Reservas[] = [];
  salas: Sala[] = [];
  @Output() eliminarReservaEvento: EventEmitter<Reservas> = new EventEmitter();
  @Output() editarReserva: EventEmitter<Reservas> = new EventEmitter();
  reservaModal: Reservas = new Reservas();
  nombre: string = "";


  // Maximo filas tabla
  @Input() maxReservas: number = 0;
  maxFilas: number = 15;
  maxFilasInput = this.maxFilas;
  pagina: number = 1;
  paginaA: number = 0;

  constructor(private salasService: SalaServiceService) { }

  ngOnInit(): void {
    this.minDia = this.getDiaActual();
    this.getSalas();
  }

  getSalas() {
    this.salasService.getSalas().subscribe(data => this.salas = data);
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

  // Tabla maximo filas
  siguiente() {
    if (this.pagina * this.maxFilas < this.reservas.length) {
      this.pagina++;
      this.paginaA++;
      // console.log(this.items.length);
    }
  }

  anterior() {
    if (this.pagina > 1) {
      this.pagina--;
      this.paginaA--;
    }
  }

  maxFilasEvent() {
    this.maxFilas = this.maxFilasInput;
    this.pagina = 1;
    this.paginaA = 0;
  }

}
