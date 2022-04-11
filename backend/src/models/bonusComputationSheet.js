class bonusComputationSheet {

    _employeeID;
    _yearOfPerformance;
    _socialPerformanceEvaluation;
    _ordersEvaluation;

    _signatureCEO;
    _signatureHR;

    _remark;
    _bonus;


    constructor(employeeID, yearOfPerformance, socialPerformanceEvaluation,
                ordersEvaluation, signatureCEO, signatureHR, remark) {
        this._employeeID = employeeID;
        this._yearOfPerformance = yearOfPerformance;
        this._socialPerformanceEvaluation = socialPerformanceEvaluation;
        this._ordersEvaluation = ordersEvaluation;
        this._signatureCEO = signatureCEO;
        this._signatureHR = signatureHR;
        this._remark = remark;
    }

    get signatureCEO() {
        return this._signatureCEO;
    }

    set signatureCEO(value) {
        this._signatureCEO = value;
    }

    get signatureHR() {
        return this._signatureHR;
    }

    set signatureHR(value) {
        this._signatureHR = value;
    }

    get remark() {
        return this._remark;
    }

    set remark(value) {
        this._remark = value;
    }

    get bonus() {
        return this._bonus;
    }

    /**
     * ToDo:
     * total bonus will be calculated based on ordersEvaluation
     * and socialPerformanceEvaluation
     * @param value
     */
    set bonus(value) {
        this._bonus = value;
    }

    get employeeID() {
        return this._employeeID;
    }

    set employeeID(value) {
        this._employeeID = value;
    }

    get yearOfPerformance() {
        return this._yearOfPerformance;
    }

    set yearOfPerformance(value) {
        this._yearOfPerformance = value;
    }

    get socialPerformanceEvaluation() {
        return this._socialPerformanceEvaluation;
    }

    set socialPerformanceEvaluation(value) {
        this._socialPerformanceEvaluation = value;
    }

    get ordersEvaluation() {
        return this._ordersEvaluation;
    }

    set ordersEvaluation(value) {
        this._ordersEvaluation = value;
    }
}

module.exports = bonusComputationSheet;
