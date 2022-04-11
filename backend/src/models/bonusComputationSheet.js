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

    getSignatureCEO() {
        return this._signatureCEO;
    }

    setSignatureCEO(value) {
        this._signatureCEO = value;
    }

    getSignatureHR() {
        return this._signatureHR;
    }

    setSignatureHR(value) {
        this._signatureHR = value;
    }

    getRemark() {
        return this._remark;
    }

    setRemark(value) {
        this._remark = value;
    }

    getBonus() {
        return this._bonus;
    }

    /**
     * ToDo:
     * total bonus will be calculated based on ordersEvaluation
     * and socialPerformanceEvaluation
     * @param value
     */
    setBonus(value) {
        this._bonus = value;
    }

    getEmployeeID() {
        return this._employeeID;
    }

    setEmployeeID(value) {
        this._employeeID = value;
    }

    getYearOfPerformance() {
        return this._yearOfPerformance;
    }

    setYearOfPerformance(value) {
        this._yearOfPerformance = value;
    }

    getSocialPerformanceEvaluation() {
        return this._socialPerformanceEvaluation;
    }

    setSocialPerformanceEvaluation(value) {
        this._socialPerformanceEvaluation = value;
    }

    getOrdersEvaluation() {
        return this._ordersEvaluation;
    }

    setOrdersEvaluation(value) {
        this._ordersEvaluation = value;
    }
}

module.exports = bonusComputationSheet;
