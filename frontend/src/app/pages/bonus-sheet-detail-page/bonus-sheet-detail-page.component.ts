import {Component,  OnInit} from '@angular/core';
import { BonusComputationSheet } from "../../models/BonusComputationSheet";
import { ActivatedRoute } from '@angular/router';
import { BonusComputationSheetService } from "../../services/bonus-computation-sheet.service";
import { Salesman } from "../../models/Salesman";
import { SalesmanService } from "../../services/salesman.service";
import {SocialPerformance} from "../../models/SocialPerformance";

@Component({
  selector: 'app-bonus-sheet-detail-page',
  templateUrl: './bonus-sheet-detail-page.component.html',
  styleUrls: ['./bonus-sheet-detail-page.component.css']
})
export class BonusSheetDetailPageComponent implements OnInit {

  id: string;
  editTargetValue: number[] = [];
  editActualValue: number[] = [];
  isEdit: boolean[] = [
    false, false, false, false, false, false
  ];
  strBonus: string[] = ['Total Bonus'];


  overallBonusColumns: string[] = [
    "Total Bonus"
  ]

  criteria: any[] = [
    "Leadership Competence",
    "Openness To Employee",
    "Social Behaviour to Employee",
    "Attitude towards Client",
    "Communication Skills",
    "Integrity to Company"
  ];

  displayedColumnsPerformances: string[] = [
    "Criteria",
    "Target Value",
    "Actual Value",
    "Bonus",
    "Edit-Btn"
  ];

  displayedColumnsPerformance: string[] = [
    "Criteria",
    "Target Value",
    "Actual Value"
  ];

  displayedColumnsBonus: string[] = [
    "ID",
    "Code",
    "YearOfPerformance",
    "SignatureCEO",
    "SignatureHR",
    "Confirmed",
    "Remark",
    "Bonus"
  ];

  displayedColumnsSalesman: string[] = [
    'Employee ID',
    'Code',
    'Firstname',
    'Lastname',
    'Department'
  ];
  displayedColumnsSales: string[] = [
    'Customer',
    'Products',
    'Quantity',
    'Ranking',
    'Bonus'
  ]

  bonusSheet: BonusComputationSheet[] = [];
  salesman: Salesman[] = [];
  socialPerformances: any[] = [];
  social: SocialPerformance;

  constructor(
    private route: ActivatedRoute,
    private bonusSheetService: BonusComputationSheetService,
    private salesmanService: SalesmanService
  ) { }

  ngOnInit(): void {
    this.getBonusSheet();
  }

  getBonusSheet(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.bonusSheetService.getBonusComputationSheet(this.id)
      .subscribe(bonusSheet => {
          this.bonusSheet.push(bonusSheet);
          this.salesmanService.getSalesman(bonusSheet['_code'])
            .subscribe(salesman => this.salesman.push(salesman));

          let columnCriteria = [];
          let columnBonuses = [];
          let targetValues = [];
          let actualValues = [];
          for(let i in this.criteria) {
            columnCriteria[i] = this.criteria[i];
          }
          columnBonuses[0] = bonusSheet['_socialPerformanceEvaluation']['_leadershipCompetenceBonus'];
          columnBonuses[1] = bonusSheet['_socialPerformanceEvaluation']['_opennessToEmployeeBonus'];
          columnBonuses[2] = bonusSheet['_socialPerformanceEvaluation']['_socialBehaviourToEmployeeBonus'];
          columnBonuses[3] = bonusSheet['_socialPerformanceEvaluation']['_attitudeTowardsClientBonus'];
          columnBonuses[4] = bonusSheet['_socialPerformanceEvaluation']['_communicationSkillsBonus'];
          columnBonuses[5] = bonusSheet['_socialPerformanceEvaluation']['_integrityToCompanyBonus'];

          targetValues[0] = bonusSheet['_socialPerformanceEvaluation']['_leadershipCompetence'][0];
          targetValues[1] = bonusSheet['_socialPerformanceEvaluation']['_opennessToEmployee'][0];
          targetValues[2] = bonusSheet['_socialPerformanceEvaluation']['_socialBehaviourToEmployee'][0];
          targetValues[3] = bonusSheet['_socialPerformanceEvaluation']['_attitudeTowardsClient'][0];
          targetValues[4] = bonusSheet['_socialPerformanceEvaluation']['_communicationSkills'][0];
          targetValues[5] = bonusSheet['_socialPerformanceEvaluation']['_integrityToCompany'][0];

          actualValues[0] = bonusSheet['_socialPerformanceEvaluation']['_leadershipCompetence'][1];
          actualValues[1] = bonusSheet['_socialPerformanceEvaluation']['_opennessToEmployee'][1];
          actualValues[2] = bonusSheet['_socialPerformanceEvaluation']['_socialBehaviourToEmployee'][1];
          actualValues[3] = bonusSheet['_socialPerformanceEvaluation']['_attitudeTowardsClient'][1];
          actualValues[4] = bonusSheet['_socialPerformanceEvaluation']['_communicationSkills'][1];
          actualValues[5] = bonusSheet['_socialPerformanceEvaluation']['_integrityToCompany'][1];

          for(let i in this.criteria) {
            let temp = {
              "Criterion": this.criteria[i],
              "TargetValue": targetValues[i],
              "ActualValue": actualValues[i],
              "Bonus": columnBonuses[i]
            };
            this.socialPerformances.push(temp);
          }
          this.editActualValue = actualValues;
          this.editTargetValue = targetValues;
        }
      );
  }

  saveTargetValue(value, index): void {
    this.editTargetValue[index] = parseInt(value);
  }

  saveActualValue(value, index): void {
    this.editActualValue[index] = parseInt(value);
  }

  createSocialPerformance(): void {
    let social = new SocialPerformance(
      [this.editTargetValue[0], this.editActualValue[0]],
      [this.editTargetValue[1], this.editActualValue[1]],
      [this.editTargetValue[2], this.editActualValue[2]],
      [this.editTargetValue[3], this.editActualValue[3]],
      [this.editTargetValue[4], this.editActualValue[4]],
      [this.editTargetValue[5], this.editActualValue[5]],

    );
    this.bonusSheetService.updateBonusComputationSheet(this.id, social)
      .subscribe();
    window.location.reload();
  }

  editRow(index): void {
    this.isEdit[index] = true;
  }
  saveRow(index): void {
    this.isEdit[index] = false;
    this.createSocialPerformance();
  }


}
