import { Component, OnInit } from '@angular/core';
import { BonusComputationSheetService } from "../../services/bonus-computation-sheet.service";
import { BonusComputationSheet } from "../../models/BonusComputationSheet";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";


@Component({
  selector: 'app-bonus-computation-sheet-page',
  templateUrl: './bonus-computation-sheet-page.component.html',
  styleUrls: ['./bonus-computation-sheet-page.component.css']
})
export class BonusComputationSheetPageComponent implements OnInit {
  user: User;
  BonusSheets: BonusComputationSheet[] = [];
  myBonusSheets: BonusComputationSheet[] = [];
  BonusSheet: BonusComputationSheet;
  selectedBonusSheet!: BonusComputationSheet;
  sheet: any;
  displayedColumns: string[] = [
    'ID',
    'Code',
    'Year Of Performance',
    'Bonus',
    'Confirmed'
  ]

  constructor(private bonusComputationSheetService: BonusComputationSheetService,
              private route: ActivatedRoute,
              private router: Router,
              private userService: UserService
  ) { }

  ngOnInit(): void {
    this.getAllBonusComputationSheets();
    this.fetchUser();
  }

  ngAfterViewInit() {
    this.getFilteredSheets();
  }


  getAllBonusComputationSheets(): void {
    this.bonusComputationSheetService.getAllBonusComputationSheets()
      .subscribe(bonusSheet => this.BonusSheets = bonusSheet);
  }

  getBonusComputationSheet(id: string): void {
    this.bonusComputationSheetService.getBonusComputationSheet(id)
      .subscribe(bonusSheet => this.BonusSheet = bonusSheet);
  }

  createBonusComputationSheet(bonusSheet: BonusComputationSheet): void {
    this.bonusComputationSheetService.createBonusComputationSheet(bonusSheet)
      .subscribe(bonusSheet => this.BonusSheets.push(bonusSheet));
  }

  deleteBonusComputationSheet(id: string): void {
    this.BonusSheets.filter(bonusSheet => bonusSheet._employeeID !== id);
    this.bonusComputationSheetService.deleteBonusComputationSheet(id)
      .subscribe();
  }

  async goToBonusSheet(row) {
      this.sheet = row;
      const id = this.sheet._id;
      await this.router.navigate([`bonusComputationSheetDetail/${id}`]);
  }

  /**
   * fetches information about logged-in user
   */
  fetchUser(){
    this.userService.getOwnUser().subscribe(user => {
      this.user = user
    });
  }

  getFilteredSheets() {
    let arr = [];
    for(let i in this.BonusSheets) {
      if(this.BonusSheets[i]['_code'] == this.user.code && this.BonusSheets[i]['_signatureCEO'] == true && this.BonusSheets[i]['_signatureHR'] == true) {
        arr.push(this.BonusSheets[i]);
      }
    }
    this.myBonusSheets = arr;
  }
}
