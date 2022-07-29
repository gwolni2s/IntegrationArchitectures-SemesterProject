import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class OrangeHRMService {

  constructor(private http: HttpClient) { }

  postBonusSalary(id: string, year: string, value: string): Observable<any> {
    return this.http.post<any>(`http://localhost:8080/api/orangeHrm/bonusSalary/${id}`,
      {
        "year": year,
        "value": value
    });
  }


}
