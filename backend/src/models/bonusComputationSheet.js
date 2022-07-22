const SocialPerformanceEvaluation = require('../models/socialPerformanceEvaluation');
const OrderEvaluation = require('../models/ordersEvaluation');

class bonusComputationSheet {


    _code;
    _yearOfPerformance;
    _socialPerformanceEvaluation;
    _orderEvaluation = [];

    _signatureCEO;
    _signatureHR;
    _confirmed;

    _remark;
    _bonus;
    _orderBonus;

    constructor(sale) {
        if(sale != null) {
            this._code = sale[0]['_salesRep']['_id'];
            this._yearOfPerformance = sale[0]['_salesOrder']['_createdAtSalesOrder'];
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
            let products;
            // Save Quantities and Description in an array
            let quantities;
            let descriptions;
            for (let k in sale) {
                products = [];
                quantities = [];
                descriptions = [];
                for (let i in sale[k]['_product']) {
                    products[i] = sale[k]['_product'][i]['_productName'];
                }

                for (let i in sale[k]['_position']) {
                    quantities[i] = sale[k]['_position'][i]['_quantity'];
                    descriptions[i] = sale[k]['_position'][i]['_productDescription'];
                }
                // Create Order Evaluation
                this._orderEvaluation.push(
                    new OrderEvaluation(
                        products,
                        sale[k]['_customer']['_fullname'],
                        sale[k]['_customer']['_accountRating'],
                        quantities,
                        sale[k]['_salesOrder']['_nameSalesOrder'],
                        descriptions)
                )
            }

            this._signatureCEO = false;
            this._signatureHR = false;
            this._confirmed = false;
            this._remark = "";
            this.calculateBonusBonusComputationSheet();
        }
    }
    setCode(code) {
        this._code = code;
    }

    setConfirmed(value) {
        this._confirmed = value;
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

    setBonus() {
        this.calculateBonusBonusComputationSheet();
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
        let sum = 0.0;
        for(let i in this._orderEvaluation) {
            sum += this._orderEvaluation[i]['_bonus'];
        }
        this._orderBonus = sum;
        if(this.getSocialPerformanceEvaluation() !== null) {
            sum += this.getSocialPerformanceEvaluation().getBonus();
        }
        this._bonus = sum;
    }
}

module.exports = bonusComputationSheet;


