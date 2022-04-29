import { Component, OnInit } from '@angular/core';
import { SalesmanService } from "../../services/salesman.service";
import { Salesman } from "../../models/Salesman";

@Component({
  selector: 'app-salesmen-page',
  templateUrl: './salesmen-page.component.html',
  styleUrls: ['./salesmen-page.component.css']
})
export class SalesmenPageComponent implements OnInit {
  Salesmen: Salesman[] = [];
  Salesman: Salesman;
  displayedColumns: string[] = [
    'Employee ID',
    'Code',
    'Firstname',
    'Lastname',
    'Department',
    'Edit Salesman',
    'Delete Salesman'];

  constructor(private salesmanService: SalesmanService) { }

  ngOnInit(): void {
    this.getAllSalesman();
  }

  getAllSalesman(): void {
    this.salesmanService.getAllSalesmen()
      .subscribe(salesman => this.Salesmen = salesman);
  }

  getSalesman(id: string): void {
    this.salesmanService.getSalesman(id)
      .subscribe(salesman => this.Salesman = salesman);
  }

  createSalesman(salesman: Salesman): void {
    this.salesmanService.createSalesman(salesman)
      .subscribe(salesman => this.Salesmen.push(salesman));
  }

  updateSalesman(salesman: Salesman): void {
    this.salesmanService.updateSalesman(salesman)
      .subscribe(salesman => this.Salesmen
        .filter(salesman => this.Salesmen[salesman._employeeID] = salesman));
  }

  deleteSalesman(id: string): void {
    this.Salesmen.filter(salesman => salesman._employeeID !== id);
    this.salesmanService.deleteSalesman(id)
      .subscribe();
  }
}

