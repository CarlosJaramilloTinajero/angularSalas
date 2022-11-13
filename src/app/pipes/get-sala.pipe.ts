import { Pipe, PipeTransform } from '@angular/core';
import { Reservas } from '../Models/reservas';
import { Sala } from '../Models/sala';

@Pipe({
  name: 'getSala'
})
export class GetSalaPipe implements PipeTransform {

  transform(value: Reservas, arg: Sala[]): String {

    let result: string = "";

    arg.forEach(sala => {
      if (sala.id == value.sala_id) {
        result = sala.nombre;
      }
    });

    return result;
  }

}
