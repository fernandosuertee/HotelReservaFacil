import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Reserva } from '../models/reserva.model';

@Injectable({
  providedIn: 'root',
})

export class ReservaService {
  private readonly API = 'http://localhost:8080/reservas';

  constructor(private http: HttpClient) {}

  criarReserva(reserva: Reserva): Observable<Reserva> {
    const payload = {
      hospede: { id: reserva.hospede.id },
      hotel: { id: reserva.hotel.id },
      quarto: { id: reserva.quarto.id },
      dataCheckIn: reserva.dataCheckIn,
      dataCheckOut: reserva.dataCheckOut,
      numHospedes: reserva.numHospedes,
      statusReserva: reserva.statusReserva,
    };
    return this.http.post<Reserva>(this.API, payload);
  }
  
  listarReservas(): Observable<Reserva[]> {
    return this.http.get<Reserva[]>(this.API);
  }

  obterReservaPorId(id: number): Observable<Reserva> {
    return this.http.get<Reserva>(`${this.API}/${id}`);
  }

  atualizarReserva(id: number, reserva: Reserva): Observable<Reserva> {
    const payload = {
      hospede: { id: reserva.hospede.id },
      hotel: { id: reserva.hotel.id },
      quarto: { id: reserva.quarto.id },
      dataCheckIn: reserva.dataCheckIn,
      dataCheckOut: reserva.dataCheckOut,
      numHospedes: reserva.numHospedes,
      statusReserva: reserva.statusReserva,
    };
    return this.http.put<Reserva>(`${this.API}/${id}`, payload);
  }
  
  deletarReserva(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }

}
