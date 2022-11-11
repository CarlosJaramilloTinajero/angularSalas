import { Pipe, PipeTransform } from "@angular/core";
import { Reservas } from "../Models/reservas";
import { Sala } from "../Models/sala";

// Cambiando la porpiedad de este pipe 'name' a 'filter'
@Pipe({
    name: 'filterReservas',
})

//Creacion de la clase 'FilterPipe' la cual implementa o ereda de la intterfaz 'PipeTransform'
export class FilterPipe implements PipeTransform {

    // Este metodo 'transform' es obligatorio ya que como estamos implementado una interfaz, la interfaz tiene este metodo
    transform(values: Reservas[], arg: string, salas: Sala[]): Reservas[] {

        if (!arg || arg?.length < 3) return values;

        let result: Reservas[] = [];
        // let salas: Sala[] = [];

        for (const value of values) {
            if (value.a_nombre_de.toUpperCase().indexOf(arg.toUpperCase()) > -1) {
                // result.unshift(value);
                result = [...result, value];
            }
        }

        return result;
    }
}