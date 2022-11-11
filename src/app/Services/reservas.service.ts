import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservas } from '../Models/reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  reservas: Reservas[] = [];
  // LocalHost
  urlGet: string = "http://127.0.0.1:8000/getReservas";
  urlDelete: string = "http://127.0.0.1:8000/deleteReserva/";
  urlPut: string = "http://127.0.0.1:8000/updateReserva/";
  urlPost: string = "http://127.0.0.1:8000/addReserva";

  // HostLocal
  // urlGet: string = "http://192.168.100.74/salas/public/getReservas";
  // urlDelete: string = "http://192.168.100.74/salas/public/deleteReserva/";
  // urlPut: string = "http://192.168.100.74/salas/public/updateReserva/";
  // urlPost: string = "http://192.168.100.74/salas/public/addReserva";

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