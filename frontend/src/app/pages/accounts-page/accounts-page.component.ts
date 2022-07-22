import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-page',
  templateUrl: './accounts-page.component.html',
  styleUrls: ['./accounts-page.component.css']
})
export class AccountsPageComponent implements OnInit {

  columnsToDisplay = ['Title'];

  dataSource = [
    {title: 'admin'},
    {title: 'hr'},
    {title: 'salesman'},
    {title: 'ceo'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
