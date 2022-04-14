const SocialPerformanceEvaluation = require('../models/socialPerformanceEvaluation');
const OrderEvaluation = require('../models/ordersEvaluation');

class bonusComputationSheet {


    _employeeID;
    _yearOfPerformance;
    _socialPerformanceEvaluation;
    _ordersEvaluations = [];

    _signatureCEO;
    _signatureHR;

    _remark;
    _bonus;


    constructor(employeeID, yearOfPerformance, socialPerformanceEvaluation,
                ordersEvaluation, signatureCEO, signatureHR, remark) {
        this._employeeID = employeeID;
        this._yearOfPerformance = yearOfPerformance;


        this._socialPerformanceEvaluation =
            new SocialPerformanceEvaluation(
                socialPerformanceEvaluation._leadershipCompetence,
                socialPerformanceEvaluation._opennessToEmployee,
                socialPerformanceEvaluation._socialBehaviourToEmployee,
                socialPerformanceEvaluation._attitudeTowardsClient,
                socialPerformanceEvaluation._communicationSkills,
                socialPerformanceEvaluation._integrityToCompany
            );


        for(let i = 0; i < ordersEvaluation.length; i++) {
            this._ordersEvaluations[i] = new OrderEvaluation(
                ordersEvaluation[i]._nameOfProduct,
                ordersEvaluation[i]._client,
                ordersEvaluation[i]._clientRanking,
                ordersEvaluation[i]._items
            );
        }


        this._signatureCEO = signatureCEO;
        this._signatureHR = signatureHR;
        this._remark = remark;
        this._bonus = this.calculateBonusBonusComputationSheet();
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

    getOrdersEvaluations() {
        return this._ordersEvaluations;
    }

    setOrdersEvaluations(value) {
        this._ordersEvaluations = value;
    }
    calculateBonusBonusComputationSheet() {
        let sum = 0.0;
        for(let i = 0; i < this.getOrdersEvaluations().length; i++) {
            sum += this.getOrdersEvaluations()[i].getBonus();
        }
        return sum + this.getSocialPerformanceEvaluation().getBonus();
    }
}

module.exports = bonusComputationSheet;


