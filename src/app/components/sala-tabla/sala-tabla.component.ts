import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Sala } from 'src/app/Models/sala';
import { SalaServiceService } from 'src/app/Services/sala-service.service';



@Component({
  selector: 'app-sala-tabla',
  templateUrl: './sala-tabla.component.html',
  styleUrls: ['./sala-tabla.component.css']
})
export class SalaTablaComponent implements OnInit {

  salas: Sala[] = [];
  salaModal: Sala = new Sala();
  Mnombre: string = "";
  @Output() successEvent: EventEmitter<string> = new EventEmitter();
  constructor(private salaService: SalaServiceService) { }


  ngOnInit(): void {
    this.getSalas();
  }

  getSalas() {

    this.salaService.getSalas().subscribe(data => {
      this.salas = data;
    });
  }

  Modal(sala: Sala) {
    this.salaModal = new Sala();
    this.salaModal = sala;
    this.Mnombre = sala.nombre;
  }

  EliminarSala() {
    this.salaService.deleteSala(this.salaModal).subscribe(data => {
      console.log(data);
      this.getSalas();
      this.successEvent.emit("Sala '" + this.salaModal.nombre + "' eliminada correctamente");
    });
  }

  ModificarSala() {
    this.salaService.updateSala(this.salaModal).subscribe(data => {
      console.log(data);
      this.getSalas();
      this.successEvent.emit("Sala '" + this.salaModal.nombre + "' modificada correctamente");
    });
  }

}
