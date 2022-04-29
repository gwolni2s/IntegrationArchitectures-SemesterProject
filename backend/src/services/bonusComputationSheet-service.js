const BonusComputationSheet = require('../models/bonusComputationSheet');

exports.getBonusComputationSheetByID = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const bonusComputationSheet = await
        db.collection('bonusComputationSheet')
            .findOne({"_employeeID": id});
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
    db.collection('bonusComputationSheet')
        .updateOne(
            {"_employeeID": id},
            {
                $set: {
                    _employeeID: data._employeeID,
                    _yearOfPerformance: data._yearOfPerformance,
                    _socialPerformanceEvaluation: data._socialPerformanceEvaluation,
                    _ordersEvaluation: data._ordersEvaluation,
                    _signatureCEO: data._signatureCEO,
                    _signatureHR: data._signatureHR,
                    _remark: data._remark
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
    for(let i in data) {
        await db.collection("bonusComputationSheet")
            .insertOne(
                new BonusComputationSheet(data[i])
            );
    }
}