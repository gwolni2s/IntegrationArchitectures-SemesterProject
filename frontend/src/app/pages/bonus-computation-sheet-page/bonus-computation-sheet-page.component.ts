import { Component, OnInit } from '@angular/core';
import { BonusComputationSheetService } from "../../services/bonus-computation-sheet.service";
import { BonusComputationSheet } from "../../models/BonusComputationSheet";

@Component({
  selector: 'app-bonus-computation-sheet-page',
  templateUrl: './bonus-computation-sheet-page.component.html',
  styleUrls: ['./bonus-computation-sheet-page.component.css']
})
export class BonusComputationSheetPageComponent implements OnInit {
  BonusSheets: BonusComputationSheet[] = [];
  BonusSheet: BonusComputationSheet;
  displayedColumns: string[] = [
    'Code',
    'Year Of Performance',
    'Remark',
    'Bonus',
    'Edit Bonus Sheet',
    'Delete Bonus Sheet'
  ]

  constructor(private bonusComputationSheetService: BonusComputationSheetService) { }

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

  updateBonusComputationSheet(bonusSheet: BonusComputationSheet): void {
    this.bonusComputationSheetService.updateBonusComputationSheet(bonusSheet)
      .subscribe(bonusSheet => this.BonusSheets
        .filter(bonusSheet => this.BonusSheets[bonusSheet._employeeID] = bonusSheet));
  }

  deleteBonusComputationSheet(id: string): void {
    this.BonusSheets.filter(bonusSheet => bonusSheet._employeeID !== id);
    this.bonusComputationSheetService.deleteBonusComputationSheet(id)
      .subscribe();
  }
}
