import {Component,  OnInit} from '@angular/core';
import { BonusComputationSheet } from "../../models/BonusComputationSheet";
import { ActivatedRoute } from '@angular/router';
import { BonusComputationSheetService } from "../../services/bonus-computation-sheet.service";
import { Salesman } from "../../models/Salesman";
import { SalesmanService } from "../../services/salesman.service";
import {SocialPerformance} from "../../models/SocialPerformance";
import {User} from "../../models/User";
import {UserService} from "../../services/user.service";
import { OrangeHRMService } from "../../services/orange-hrm.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-bonus-sheet-detail-page',
  templateUrl: './bonus-sheet-detail-page.component.html',
  styleUrls: ['./bonus-sheet-detail-page.component.css']
})
export class BonusSheetDetailPageComponent implements OnInit {

  user: User;

  remarkIsEdit: boolean[] = [false];
  remarkValue: string[] = [];

  id: string;
  editTargetValue: number[] = [];
  editActualValue: number[] = [];
  isEdit: boolean[] = [
    false, false, false, false, false, false
  ];
  strBonus: string[] = ['Total Bonus'];


  overallBonusColumns: string[] = [
    "Total Bonus"
  ];

  remarkColumns: string[] = [
    "Remark",
    "Button"
  ];

  remarkColumn: string[] = [
    "Remark"
  ];

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
    "Actual Value",
    "Bonus"
  ];

  displayedColumnsBonus: string[] = [
    "ID",
    "Code",
    "YearOfPerformance",
    "SignatureCEO",
    "SignatureHR",
    "Confirmed",
    "Save",
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
    private salesmanService: SalesmanService,
    private userService: UserService,
    private orangeService: OrangeHRMService
  ) { }

  ngOnInit(): void {
    this.getBonusSheet();
    this.fetchUser();
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
  editRemark(index): void {
    this.remarkIsEdit[index] = true;
  }
  saveRemark(index): void {
    this.remarkIsEdit[index] = false;
    console.log(this.remarkValue);
    let remark = {_remark: this.remarkValue[index]};
    this.bonusSheetService.updateBonusComputationSheet(this.id,remark)
      .subscribe();
    console.log(remark);
    window.location.reload();
  }
  updateRemark(value, index): void {
    this.remarkValue[index] = value;
  }
  setSignatureCEO(value): void {
    if(this.user.role == 'ceo') {
      let sig = {_signatureCEO: value};
      console.log(sig);
      this.bonusSheetService.updateBonusComputationSheet(this.id, sig)
        .subscribe();
      window.location.reload();
    }
  }
  setSignatureHR(value): void {
    if(this.user.role == 'hr') {
      let sig = {_signatureHR: value};
      console.log(sig);
      this.bonusSheetService.updateBonusComputationSheet(this.id, sig)
        .subscribe();
      window.location.reload();
    }
  }

  setConfirm(value): void {
    if(
      this.user.role == 'salesman' &&
      this.bonusSheet[0]['_signatureHR'] == true &&
      this.bonusSheet[0]['_signatureCEO'] == true) {
      let sig = {_confirmed: value};
      this.bonusSheetService.updateBonusComputationSheet(this.id, sig)
        .subscribe();
      window.location.reload();
    }
  }

  postBonus(): void {
    if(this.user.role == 'hr' &&
      this.bonusSheet[0]['_signatureHR'] == true &&
      this.bonusSheet[0]['_signatureCEO'] == true &&
      this.bonusSheet[0]['_confirmed'] == true) {
      alert("The Total Bonus of: " + Math.round(this.bonusSheet[0]['_bonus']) +
        "$ for the Salesman: " + this.salesman[0]['_firstname'] + " " + this.salesman[0]['_lastname'] + " is saved in OrangeHRM");
      this.orangeService.postBonusSalary(this.salesman[0]['_employeeID'], this.bonusSheet[0]['_yearOfPerformance'], Math.round(this.bonusSheet[0]['_bonus']).toString())
        .subscribe();
      window.location.reload();
    }
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


