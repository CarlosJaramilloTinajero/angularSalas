import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cont: number = 0;
  @Input() titulo: string = "";
  @Input() tipo: string = "";
  link: string = "";
  constructor() { }

  ngOnInit(): void {
    switch (this.tipo) {
      case "salas":
        this.link = "ListaSalas";
        break;
      case "reservas":
        this.link = "";
        break;
    }
  }

}
