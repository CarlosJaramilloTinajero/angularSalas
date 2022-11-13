import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservas } from '../Models/reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  reservas: Reservas[] = [];
  // API
  urlGet: string = "https://salas.peliculas.beauty/getReservas";
  urlDelete: string = "https://salas.peliculas.beauty/deleteReserva/";
  urlPut: string = "https://salas.peliculas.beauty/updateReserva/";
  urlPost: string = "https://salas.peliculas.beauty/addReserva";

  constructor(private http: HttpClient) { }

  getReservas(): Observable<Reservas[]> {
    return this.http.get<Reservas[]>(this.urlGet);
  }

  deleteReserva(reserva: Reservas): Observable<Reservas> {
    return this.http.delete<Reservas>(this.urlDelete + reserva.id);
  }

  updateReserva(reserva: Reservas): Observable<Reservas> {
    return this.http.put<Reservas>(this.urlPut + reserva.id, reserva);
  }

  addReserva(reserva: Reservas): Observable<Reservas> {
    return this.http.post<Reservas>(this.urlPost, reserva);
  }

}
