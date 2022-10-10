import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sala } from '../Models/sala';

@Injectable({
  providedIn: 'root'
})
export class SalaServiceService {

  salas: Sala[] = [];
  url: string = "http://127.0.0.1:8000/getSalas";
  urlPost: string = "http://127.0.0.1:8000/addSala";
  urlDelete: string = "http://127.0.0.1:8000/deleteSala/";
  urlUpdate: string = "http://127.0.0.1:8000/updateSala/";

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
