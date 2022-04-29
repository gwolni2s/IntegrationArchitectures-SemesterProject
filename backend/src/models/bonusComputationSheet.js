const SocialPerformanceEvaluation = require('../models/socialPerformanceEvaluation');
const OrderEvaluation = require('../models/ordersEvaluation');

class bonusComputationSheet {


    _code;
    _yearOfPerformance;
    _socialPerformanceEvaluation;
    _orderEvaluation;

    _signatureCEO;
    _signatureHR;
    _confirmed;

    _remark;
    _bonus;


    constructor(sale) {
        this._code = sale['_salesRep']['_id'];
        this._yearOfPerformance = sale['_salesOrder']['_createdAtSalesOrder'];
        this._socialPerformanceEvaluation = null;

        /**
         * Save
         * Name of SalesOrder
         * FullName of Customer
         * Account Rating
         * quantity of position
         * product description of position
         * productName
         */
        // Save product names in an array
        let products = [];
        for(let i in sale['_product']) {
            products[i] = sale['_product'][i]['_productName'];
        }
        // Save Quantities and Description in an array
        let quantities = []
        let descriptions = []
        for(let i in sale['_position']) {
            quantities[i] = sale['_position'][i]['_quantity'];
            descriptions[i] = sale['_position'][i]['_productDescription'];
        }
        // Create Order Evaluation
        this._orderEvaluation = new OrderEvaluation(
            products,
            sale['_customer']['_fullname'],
            sale['_customer']['_accountRating'],
            quantities,
            sale['_salesOrder']['_nameSalesOrder'],
            descriptions
        )
        this._signatureCEO = false;
        this._signatureHR = false;
        this._confirmed = false;
        this._remark = "";
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
        return this._code;
    }

    setEmployeeID(value) {
        this._code = value;
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

    getOrderEvaluation() {
        return this._orderEvaluation;
    }

    setOrderEvaluation(value) {
        this._orderEvaluation = value;
    }
    calculateBonusBonusComputationSheet() {
        if(this.getSocialPerformanceEvaluation() === null) return this.getOrderEvaluation().getBonus();
        return this.getOrderEvaluation().getBonus() + this.getSocialPerformanceEvaluation().getBonus();
    }
}

module.exports = bonusComputationSheet;


