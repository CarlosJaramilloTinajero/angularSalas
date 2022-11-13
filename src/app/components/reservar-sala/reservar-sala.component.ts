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

  mostrar: boolean = true;
  
  class: string = "";
  success: number = 0;
  msg: string = "";
  salas: Sala[] = [];
  reservasFilter: Reservas[] = [];
  salasActivas: Sala[] = [];
  reservas: Reservas[] = [];
  constructor(private reservasService: ReservasService, private salasService: SalaServiceService) { }

  ngOnInit(): void {
    this.getSalas();
    this.getReservas();

  }

  getReservas() {
    this.reservasService.getReservas().subscribe(data => {
      this.reservas = data;
      this.reservasFilter = data
    });
  }

  getSalas() {
    this.salasService.getSalas().subscribe(data => {
      this.salas = data;
      this.salasActivas = data.filter(sala => sala.estado == "activa");
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

  addReserva(reserva: Reservas) {
    this.reservasService.addReserva(reserva).subscribe(data => {
      console.log(data);
      this.getReservas();
      window.scroll(0, 0);
      this.success = 1;
      this.msg = "Reserva agregada correctamente";
      this.class = "alert alert-success";
    });
  }

  // buscar() {
  //   console.log(this.buscardor)

  //   this.reservasFilter = this.reservas.map(reserva => {
  //     var a_nombre_c = reserva.a_nombre_de.split("");
  //     // var a_nombre = reserva.a_nombre_de.  
  //     var pasa = false;
  //     var acomulador = "";
  //     for (let i = 0; i < this.buscardor.split("").length; i++) {
  //       acomulador = a_nombre_c[i];
  //     }

  //     if (acomulador.toUpperCase() == this.buscardor.toUpperCase()) {
  //       return reserva;
  //     }
  //     return null;
  //   });

  // }
}
