import { Component, OnInit } from '@angular/core';
import { DatabaseService } from "../../services/database.service";

@Component({
  selector: 'app-fetch-data-page',
  templateUrl: './fetch-data-page.component.html',
  styleUrls: ['./fetch-data-page.component.css']
})
export class FetchDataPageComponent implements OnInit {

  constructor(private databaseService: DatabaseService) { }

  ngOnInit(): void {
  }

  fetchData(): void {
    alert("The Salesman Data from OrangeHRM and the sales data from openCRX was successfully fetched.");
    this.databaseService.getAllData()
      .subscribe();
  }
}
