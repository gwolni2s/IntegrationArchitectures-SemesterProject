import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Salesman } from "../models/Salesman";

@Injectable({
  providedIn: 'root'
})
export class SalesmanService {

  constructor(private http: HttpClient) { }

  getAllSalesmen(): Observable<Salesman[]> {
    return this.http.get<Salesman[]>('http://localhost:8080/api/salesman');
  }

  getSalesman(id: string): Observable<Salesman> {
    return this.http.get<Salesman>(`http://localhost:8080/api/salesman/${id}`);
  }

  createSalesman(salesman: Salesman): Observable<Salesman> {
    return this.http.post<Salesman>('http://localhost:8080/api/salesman',
      salesman);
  }

  updateSalesman(salesman: Salesman): Observable<Salesman> {
    return this.http.put<Salesman>(`http://localhost:8080/api/salesman/${salesman._employeeID}`,
      salesman);
  }

  deleteSalesman(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/salesman/${id}`);
  }
}


