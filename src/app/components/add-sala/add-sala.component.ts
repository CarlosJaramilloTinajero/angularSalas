import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Sala } from 'src/app/Models/sala';
import { SalaServiceService } from 'src/app/Services/sala-service.service';

@Component({
  selector: 'app-add-sala',
  templateUrl: './add-sala.component.html',
  styleUrls: ['./add-sala.component.css']
})
export class AddSalaComponent implements OnInit {

  sala: Sala = new Sala();
  nombre: string = "";
  ubicacion: string = "";
  descripcion: string = "";
  estado: string = "activa";

  inputInvalid: string[] = ["", "", ""];
  constructor(private salaService: SalaServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    if (this.nombre == "" || this.ubicacion == "" || this.descripcion == "") {
      if (this.nombre == "") {
        this.inputInvalid[0] = "invalido";
      }
      if (this.ubicacion == "") {
        this.inputInvalid[1] = "invalido";
      }
      if (this.descripcion == "") {
        this.inputInvalid[2] = "invalido";
      }
    } else {
      this.sala = new Sala();
      this.sala.nombre = this.nombre;
      this.sala.ubicacion = this.ubicacion;
      this.sala.descripcion = this.descripcion;
      this.sala.estado = this.estado;

      this.salaService.addSala(this.sala).subscribe(data => {

        for (let i = 0; i < this.inputInvalid.length; i++) {
          this.inputInvalid[i] = "";
        }

        this.nombre = "";
        this.ubicacion = "";
        this.descripcion = "";
        this.estado = "activa";

        form.reset();

        console.log(data);
        this.router.navigate(['/ListaSalas'], {
          queryParams: { success: '1' }
        });
      });
    }
  }

}
