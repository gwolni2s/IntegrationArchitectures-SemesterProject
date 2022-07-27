import { Component, OnInit } from '@angular/core';
import { SalesmanService } from "../../services/salesman.service";
import { Salesman } from "../../models/Salesman";
import {User} from "../../models/User";
import { UserService } from "../../services/user.service";

@Component({
  selector: 'app-salesmen-page',
  templateUrl: './salesmen-page.component.html',
  styleUrls: ['./salesmen-page.component.css']
})
export class SalesmenPageComponent implements OnInit {
  user:User;
  Salesmen: Salesman[] = [];
  Salesman: Salesman[] = [];
  displayedColumns: string[] = [
    'Employee ID',
    'Code',
    'Firstname',
    'Lastname',
    'Department'
  ];

  constructor(private salesmanService: SalesmanService, private userService:UserService) { }

  ngOnInit(): void {
    this.getAllSalesman();
    this.fetchUser();
  }

  ngAfterViewInit(): void {
    this.getSalesman(this.user.code);
  }

  getAllSalesman(): void {
    this.salesmanService.getAllSalesmen()
      .subscribe(salesman => this.Salesmen = salesman);
  }

  getSalesman(id: string): void {
    this.salesmanService.getSalesman(id)
      .subscribe(salesman => this.Salesman.push(salesman));
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

  /**
   * fetches information about logged-in user
   */
  fetchUser(){
    this.userService.getOwnUser().subscribe(user => {
      this.user = user
    });
  }
}

