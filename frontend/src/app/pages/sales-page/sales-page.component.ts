import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../services/sales.service";
import { Sales } from "../../models/Sales";

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.css']
})
export class SalesPageComponent implements OnInit {
  Sales: Sales[] = [];
  Sale: Sales;
  displayedColumns: string[] = [
    'Employee ID',
    'Year of Order',
    'Customer',
    'Product',
    'Quantity'
  ]

  constructor(private salesService: SalesService) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.salesService.getAllData()
      .subscribe(sale => this.Sales = sale);
  }
}



