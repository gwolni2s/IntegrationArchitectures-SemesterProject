import { Injectable } from '@angular/core';
import {  HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<any> {
    return this.http.get('http://localhost:8080/api/database/data');
  }
}
