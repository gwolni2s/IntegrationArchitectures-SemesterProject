const BonusComputationSheet = require('../models/bonusComputationSheet');
const {ObjectId} = require("mongodb");
const SocialPerformance = require('../models/socialPerformanceEvaluation');

exports.getBonusComputationSheetByID = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const bonusComputationSheet = await
        db.collection('bonusComputationSheet')
            .findOne({"_id": ObjectId(id)});
    res.send(bonusComputationSheet);
}

exports.getBonusComputationSheet = async (req, res) => {
    const db = req.app.get("db");
    const bonusComputationSheet = await
        db.collection("bonusComputationSheet")
            .find().toArray();
    res.send(bonusComputationSheet);
}

exports.createBonusComputationSheet = async (req, res) => {
    const db = req.app.get("db");
    const data = req.body;
    db.collection("bonusComputationSheet")
        .insertOne(
            new BonusComputationSheet(
            data['_employeeID'],
            data['_yearOfPerformance'],
            data['_socialPerformanceEvaluation'],
            data['_ordersEvaluation'],
            data['_signatureCEO'],
            data['_signatureHR'],
            data['_remark']
            )
        );
    res.send("Bonus Computation Sheet with ID: " + data['_employeeID'] +
        " successfully saved.");
}
exports.updateBonusComputationSheet = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const data = req.body;
    console.log(data);
    const socialPerformance = new SocialPerformance(
        data._leadershipCompetence,
        data._opennessToEmployee,
        data._socialBehaviourToEmployee,
        data._attitudeTowardsClient,
        data._communicationSkills,
        data._integrityToCompany
    );
    let obj = await
        db.collection('bonusComputationSheet')
            .findOne({"_id": ObjectId(id)});
    let bonusSheet = new BonusComputationSheet(null);
    bonusSheet.setSocialPerformanceEvaluation(socialPerformance);
    bonusSheet.setYearOfPerformance(obj['_yearOfPerformance']);
    bonusSheet.setSignatureCEO(obj['_signatureCEO']);
    bonusSheet.setSignatureHR(obj['_signatureHR']);
    bonusSheet.setOrderEvaluation(obj['_orderEvaluation']);
    bonusSheet.setRemark(obj['_remark']);
    bonusSheet.setConfirmed(obj['_confirmed']);
    bonusSheet.setCode(obj['_code']);
    bonusSheet.setBonus();

    db.collection('bonusComputationSheet')
        .updateOne(
            {"_id": ObjectId(id)},
            {
                $set: {
                    _socialPerformanceEvaluation: bonusSheet.getSocialPerformanceEvaluation(),
                    _bonus: bonusSheet.getBonus()
                }
            }
        );
    res.send("Bonus Computation Sheet with ID: " + id +
        " successfully updated.");
}
exports.deleteBonusComputationSheet = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    db.collection('bonusComputationSheet')
        .deleteOne({"_employeeID": id});
    res.send("Bonus Computation Sheet with ID: " + id +
        " successfully deleted.");
}
exports.saveAllSales = async (req, res, data) => {
    const db = req.app.get("db");
    await db.collection('bonusComputationSheet').drop();

    function element(year, code, number) {
        this._year = year;
        this._code = code;
        this.number = number;
    }

    let sales = data;
    let elements = [];

    for (let i in sales) {
        const elem = new element(
            sales[i]['_salesOrder']['_createdAtSalesOrder'],
            sales[i]['_salesRep']['_id'],
            i
        );
        elements[i] = elem;
    }

    let years = [];
    let codes = [];
    for (let i in elements) {
        years[i] = elements[i]['_year'];
        codes[i] = elements[i]['_code'];
    }

    function removeCuplicates(arr) {
        return arr.filter((item, index) => arr.indexOf(item) === index);
    }

    let filteredCodes = removeCuplicates(codes);
    let temp = [];
    // Filter undefined
    for (let i in filteredCodes) {
        if (filteredCodes[i] !== undefined) {
            temp.push(filteredCodes[i]);
        }
    }
    filteredCodes = temp;

    let codeWithYearsAndNumbers = [];
    for (let k in filteredCodes) {
        let temp1 = [];
        temp1.push(filteredCodes[k]);
        for (let z in elements) {
            if (filteredCodes[k] === elements[z]['_code']) {
                temp1.push(elements[z]['_year']);
                temp1.push(elements[z]['number']);
            }
        }
        codeWithYearsAndNumbers.push(temp1);
    }

    function salesRecord(array) {
        this._code = array[0];
        this._years = [];
        this._numbers = [];
        for (let i = 1; i < array.length - 1; i++, i++) {
            this._years.push(array[i]);
            this._numbers.push(array[i + 1]);
        }
        return this;
    }

    function realRecord(array) {
        this._code = array['_code'];
        this._years = array['_years'];
        this._numbers = array['_numbers'];
    }

    let records = [];
    for (let i in codeWithYearsAndNumbers) {
        let temp = salesRecord(codeWithYearsAndNumbers[i]);
        records.push(new realRecord(temp));
    }

    let filteredYears = [];
    for(let h in records) {
        filteredYears.push(removeCuplicates(records[h]['_years']));
    }

    function saleRecord(code, year, sales) {
        this._code = code;
        this._year = year;
        this._sales = sales;
    }

    function editRecord(record) {
        let marked = [];
        let sumOfYears;
        let salesOfRecords = [];
        let finished = false;
        let count = 0;
        for(let i in record['_years']) {
            if(i === record['_years'].length) {
                finished = true;
            }
            sumOfYears = [];
            if(marked.indexOf(record['_years'][i] === -1)) {
                marked.push(record['_years'][i]);
                for(let j in record['_years']) {
                    if(marked[count] === record['_years'][j]) {
                        let temp = record['_numbers'][j];
                        sumOfYears.push(sales[temp]);
                    }
                }
                let rec = new saleRecord(record['_code'], marked[count++], sumOfYears);
                salesOfRecords.push(rec);
             }
        }
        return salesOfRecords;
    }

    let arrayOfRecords = [];
    for(let i in records) {
        arrayOfRecords.push(editRecord(records[i]));
    }

    // Delete duplicates from Array of Records
    let orderRecords = [];
    let tempRecords;
    for(let i in filteredYears) {
        tempRecords = [];
        for(let j in filteredYears[i]) {
            for(let k in arrayOfRecords[i]) {
                if(filteredYears[i][j] === arrayOfRecords[i][k]['_year']) {
                    tempRecords.push(arrayOfRecords[i][k]['_sales']);
                    break;
                }
            }
        }
        orderRecords.push(tempRecords);
    }

    for(let i in orderRecords) {
        for(let k in orderRecords[i]) {
            console.log("Order Record: ");
            console.log(orderRecords[i][k]);
            await db.collection('bonusComputationSheet')
                .insertOne(
                    new BonusComputationSheet(orderRecords[i][k])
                );
        }
    }
}


