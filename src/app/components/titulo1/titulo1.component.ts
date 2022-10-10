import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo1',
  templateUrl: './titulo1.component.html',
  styleUrls: ['./titulo1.component.css']
})
export class Titulo1Component implements OnInit {

  @Input() titulo: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
