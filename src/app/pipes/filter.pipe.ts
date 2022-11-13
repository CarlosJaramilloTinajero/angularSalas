import { Pipe, PipeTransform } from "@angular/core";
import { Reservas } from "../Models/reservas";
import { Sala } from "../Models/sala";

// Cambiando la porpiedad de este pipe 'name' a 'filterReservas'
@Pipe({
    name: 'filterReservas',
})

//Creacion de la clase 'FilterPipe' la cual implementa o ereda de la intterfaz 'PipeTransform'
export class FilterPipe implements PipeTransform {

    // Este metodo 'transform' es obligatorio ya que como estamos implementado una interfaz, la interfaz tiene este metodo
    // Este metodo es el que hace la logiica del pipe
    // En este metodo lo que hacemos es hacer una busqueda de el parametro 'values', con la ayuda de el parametro 'arg'
    // esta busqueda se enfoca en las porpiedades 'a_nombre_de' y sala_id' de los objetos 'Reservas'
    transform(values: Reservas[], arg: string, salas: Sala[]): Reservas[] {

        if (!arg || arg?.length < 3) return values;

        let result: Reservas[] = [];

        for (const value of values) {
            if (value.a_nombre_de.toUpperCase().indexOf(arg.toUpperCase()) > -1) {
                result = [...result, value];
            }

            salas.forEach(sala => {
                if (sala.nombre.toUpperCase().indexOf(arg.toUpperCase()) > -1 && value.sala_id == sala.id) {
                    result = [...result, value];
                }
            });

        }

        return result;
    }
}