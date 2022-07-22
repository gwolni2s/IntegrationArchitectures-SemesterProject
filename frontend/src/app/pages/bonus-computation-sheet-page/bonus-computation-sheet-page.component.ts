import { Component, OnInit } from '@angular/core';
import { BonusComputationSheetService } from "../../services/bonus-computation-sheet.service";
import { BonusComputationSheet } from "../../models/BonusComputationSheet";
import {ActivatedRoute, Router} from "@angular/router";


@Component({
  selector: 'app-bonus-computation-sheet-page',
  templateUrl: './bonus-computation-sheet-page.component.html',
  styleUrls: ['./bonus-computation-sheet-page.component.css']
})
export class BonusComputationSheetPageComponent implements OnInit {
  BonusSheets: BonusComputationSheet[] = [];
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
              private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllBonusComputationSheets();
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
}
