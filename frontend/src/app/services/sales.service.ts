import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { Sales } from "../models/Sales";

@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<Sales[]> {
    return this.http.get<Sales[]>('http://localhost:8080/api/bonusComputationSheet/');
  }
}

