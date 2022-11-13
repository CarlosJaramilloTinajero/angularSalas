import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../Models/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaServiceService {

  salas: Sala[] = [];
  // API
  url: string = "https://salas.peliculas.beauty/getSalas";
  urlPost: string = "https://salas.peliculas.beauty/addSala";
  urlDelete: string = "https://salas.peliculas.beauty/deleteSala/";
  urlUpdate: string = "https://salas.peliculas.beauty/updateSala/";

  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  constructor(private http: HttpClient) { }

  getSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.url);
  }

  addSala(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.urlPost, sala);
  }

  deleteSala(sala: Sala): Observable<Sala> {
    return this.http.delete<Sala>(this.urlDelete + sala.id)
  }

  updateSala(sala: Sala): Observable<Sala> {
    return this.http.put<Sala>(this.urlUpdate + sala.id, sala);
  }

}
