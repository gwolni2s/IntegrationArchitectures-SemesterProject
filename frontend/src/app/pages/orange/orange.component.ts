import { Component, OnInit } from '@angular/core';
import { OrangeService } from "../../services/orange.service";
import { Salesman } from "../../models/Salesman";

@Component({
  selector: 'app-orange',
  templateUrl: './orange.component.html',
  styleUrls: ['./orange.component.css']
})
export class OrangeComponent implements OnInit {
  Employees: Salesman[] = [];
  Employee: Salesman;
  bonusSalary: any[];
  displayedColumns: string[] = [
    'Employee ID',
    'Code',
    'Firstname',
    'Lastname',
    'Department',
    'Edit Salesman',
    'Delete Salesman'];

  constructor(private orangeService: OrangeService) { }

  ngOnInit(): void {
    this.getAllEmployees();
  }

  getAllEmployees(): void {
    this.orangeService.getAllEmployees()
      .subscribe(employee => this.Employees = employee);
  }

  getEmployee(id: string): void {
    this.orangeService.getEmployee(id)
      .subscribe(employee => this.Employee = employee);
  }

  getBonusSalary(id: string): void {
    this.orangeService.getBonusSalary(id)
      .subscribe(salary => this.bonusSalary = salary);
  }

  postBonusSalary(id: string, year: number, value: number): void {
    this.orangeService.postBonusSalary(id, year, value)
      .subscribe();
  }
}
