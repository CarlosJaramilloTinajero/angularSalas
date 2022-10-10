import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reservas } from '../Models/reservas';

@Injectable({
  providedIn: 'root'
})
export class ReservasService {

  reservas: Reservas[] = [];
  urlGet: string = "http://127.0.0.1:8000/getReservas";

  constructor(private http: HttpClient) { }

  getReservas(): Observable<Reservas[]> {
    return this.http.get<Reservas[]>(this.urlGet);
  }
}
