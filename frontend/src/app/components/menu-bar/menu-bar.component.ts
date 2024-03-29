import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  user:User;

  /*
    This array holds the definition of the menu's buttons.
   */
  buttons = [
    {title: 'Salesmen', routerLink: 'salesmen'},
    {title: 'BonusComputationSheets', routerLink: 'bonusComputationSheets'}
  ];

  button1 = {title: 'Sales', routerLink: 'sales'};
  button2 = {title: 'EventLogs', routerLink: 'eventLogs'};
  button3 = {title: 'Fetch Data', routerLink: 'fetchData'};

  /**
   * The following parameters specify objects, which will be provided by dependency injection
   * @param authService
   * @param router
   * @param userService
   */
  constructor(private authService: AuthService, private router: Router, private userService:UserService) { }

  ngOnInit(): void {
    this.fetchUser();
  }

  /**
   * function which handles clicking the logout button
   */
  handleLogout(){
    this.authService.logout().subscribe();
    this.router.navigate(['login']); //after logout go back to the login-page
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
