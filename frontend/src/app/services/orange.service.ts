import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Salesman } from "../models/Salesman";

@Injectable({
  providedIn: 'root'
})
export class OrangeService {

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Salesman[]> {
    return this.http.get<Salesman[]>('http://localhost:8080/api/orangeHrm/employees');
  }

  getEmployee(id: string): Observable<Salesman> {
    return this.http.get<Salesman>(`http://localhost:8080/api/orangeHrm/employees/${id}`);
  }

  getBonusSalary(id: string): Observable<any> {
    return this.http.get<any[]>(`http://localhost:8080/api/orangeHrm/bonusSalary/${id}`);
  }

  postBonusSalary(id: string, year: number, value: number): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/orangeHrm/bonusSalary/${id}`,
      {
        year: year,
        value: value
      });
  }
}
