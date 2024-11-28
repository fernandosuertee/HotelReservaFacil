import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Hospede } from '../models/hospede.model';

@Injectable({
  providedIn: 'root',
})
export class HospedeService {
  private readonly API = 'http://localhost:8080/hospedes';

  constructor(private http: HttpClient) {}

  // Método para cadastrar um novo hóspede
  createHospede(hospede: Hospede): Observable<Hospede> {
    return this.http.post<Hospede>(this.API, hospede);
  }

  // Método para obter um hóspede pelo ID
  getHospedeById(id: number): Observable<Hospede> {
    return this.http.get<Hospede>(`${this.API}/${id}`);
  }

  // Método para obter todos os hóspedes
  getAllHospedes(): Observable<Hospede[]> {
    return this.http.get<Hospede[]>(this.API);
  }

  // Método para atualizar um hóspede
  updateHospede(id: number, hospede: Hospede): Observable<Hospede> {
    return this.http.put<Hospede>(`${this.API}/${id}`, hospede);
  }

  // Método para deletar um hóspede
  deleteHospede(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}
