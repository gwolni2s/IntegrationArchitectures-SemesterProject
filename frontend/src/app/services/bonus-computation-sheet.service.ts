import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BonusComputationSheet } from "../models/BonusComputationSheet";

@Injectable({
  providedIn: 'root'
})
export class BonusComputationSheetService {

  constructor(private http: HttpClient) { }

  getAllBonusComputationSheets(): Observable<BonusComputationSheet[]> {
    return this.http.get<BonusComputationSheet[]>('http://localhost:8080/api/bonusComputationSheet/');
  }

  getBonusComputationSheet(id: string): Observable<BonusComputationSheet> {
    return this.http.get<BonusComputationSheet>(`http://localhost:8080/api/bonusComputationSheet/${id}`);
  }

  createBonusComputationSheet(bonusSheet: BonusComputationSheet): Observable<BonusComputationSheet> {
    return this.http.post<BonusComputationSheet>('http://localhost:8080/api/bonusComputationSheet', bonusSheet);
  }

  updateBonusComputationSheet(bonusSheet: BonusComputationSheet): Observable<BonusComputationSheet> {
    return this.http.put<BonusComputationSheet>(`http://localhost:8080/api/bonusComputationSheet/${bonusSheet._employeeID}`,
      bonusSheet);
  }

  deleteBonusComputationSheet(id: string): Observable<any> {
    return this.http.delete(`http://localhost:8080/api/bonusComputationSheet/${id}`);
  }
}


