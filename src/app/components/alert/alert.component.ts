import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {


  @Input() habilitarQuitarAlert: boolean = true;
  @Input() mostrar: number = 0;
  @Input() msg: string = "";
  @Input() class: string = "";
  @Output() quitarAlert: EventEmitter<any> = new EventEmitter();
  // @Output() quitarAlert2: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  QuitarAlert() {
    this.mostrar = 0;
    this.msg = "";
    this.class = "";
    // if (this.numAlerts == 1) {
    this.quitarAlert.emit();
    // } else {
    // this.quitarAlert2.emit();
    // }
  }
}
