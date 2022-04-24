/**
 * this model specifies the format to exchange a bonus computation sheet with the backend
 */
export class BonusComputationSheet{
  constructor(
    public _employeeID: string,
    public _yearOfPerformance: string,
    public _socialPerformanceEvaluation: Object,
    public _ordersEvaluation: [],
    public _signatureCEO: boolean,
    public _signatureHR: boolean,
    public _remark: string,
    public _bonus: number
  ) {  }
}
