import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html',
  styleUrls: ['./lista-salas.component.css']
})
export class ListaSalasComponent implements OnInit {

  msg: string = "";
  success: number = 0;
  class: string = "";
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      if (params['success'] == "1") {
        this.success = 1;
        this.msg = "Sala agregada corerctamente";
        this.class = "alert alert-sucess";
      }

    });
  }

  SuccessEvent(msg: string) {
    this.success = 1;
    this.msg = msg;
    this.class = "alert alert-success";
  }
}
