import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html',
  styleUrls: ['./lista-salas.component.css']
})
export class ListaSalasComponent implements OnInit {

  msg: string = "";
  salaAgregada: number = 0;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params['success'] == "1") {
        this.salaAgregada = 1;
        this.msg = "Sala agregada corerctamente";
      }

    });
  }

  SuccessEvent(msg: string) {
    this.salaAgregada = 1;
    this.msg = msg;
  }

  QuitarAlert() {
    this.salaAgregada = 0;
    this.msg = "";
  }
}
