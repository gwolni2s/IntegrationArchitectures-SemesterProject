import { Component, OnInit } from '@angular/core';
import { SalesService } from "../../services/sales.service";
import { Sales } from "../../models/Sales";

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.css']
})
export class SalesPageComponent implements OnInit {
  Sales: Sales[];
  Sale: Sales;
  displayedColumns: string[] = [
    'Customer',
    'Products',
    'Quantity',
    'Ranking',
    'Bonus'
  ]

  constructor(private salesService: SalesService) {
  }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData(): void {
    this.salesService.getAllData()
      .subscribe(sales => this.filterToSales(sales));
  }

  filterToSales(data): void {
    let temp = [];
    let count = 0;
    for(let i in data) {
      for(let j in data[i]['_orderEvaluation']) {
        temp[count++] = data[i]['_orderEvaluation'][j];
      }
    }
    this.Sales = temp;
  }
}



