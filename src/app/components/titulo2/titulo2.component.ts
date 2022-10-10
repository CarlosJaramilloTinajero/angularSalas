import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-titulo2',
  templateUrl: './titulo2.component.html',
  styleUrls: ['./titulo2.component.css']
})
export class Titulo2Component implements OnInit {

  @Input() titulo: string = "";
  constructor() { }

  ngOnInit(): void {
  }

}
