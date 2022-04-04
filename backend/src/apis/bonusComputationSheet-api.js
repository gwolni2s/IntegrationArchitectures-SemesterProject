const BonusComputationSheet = require('../models/bonusComputationSheet');
const {ObjectId} = require("mongodb");

exports.getBonusComputationSheetById = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const bonusComputationSheet = await db.collection('bonusComputationSheet').findOne({"_employeeID": id});
    res.send(bonusComputationSheet);
    console.log(bonusComputationSheet);
}

exports.getBonusComputationSheet = async (req, res) => {
    const db = req.app.get("db");
    const bonusComputationSheet = await db.collection("bonusComputationSheet").find().toArray();
    res.send(bonusComputationSheet);
    console.log(bonusComputationSheet);
}

exports.createBonusComputationSheet = async (req, res) => {
    const db = req.app.get("db");
    const data = req.body;
    const bonusComputationSheet = new BonusComputationSheet(data['_employeeID'], data['_yearOfPerformance'],
                                                            data['_socialPerformanceEvaluation'],
                                                            data['_ordersEvaluation']);

    db.collection("bonusComputationSheet").insertOne(bonusComputationSheet);
    res.send(bonusComputationSheet);
    console.log("bonusComputationSheet with employeeID: " + bonusComputationSheet.employeeID + " inserted.");
    console.log(bonusComputationSheet);
}

exports.updateBonusComputationSheet = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const data = req.body;

    const bonusComputationSheet = {$set: {
            _employeeID: data._employeeID, _yearOfPerformance: data._yearOfPerformance,
            _socialPerformanceEvaluation: data._socialPerformanceEvaluation,
            _ordersEvaluation: data._ordersEvaluation
        }};

    db.collection('bonusComputationSheet').updateOne({"_employeeID": id}, bonusComputationSheet);
    res.send(bonusComputationSheet);
    console.log("bonusComputationSheet with employeeID: " + id + " updated.");
    console.log(bonusComputationSheet);
}

exports.deleteBonusComputationSheet = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const bonusComputationSheet = await db.collection('bonusComputationSheet').findOne({"_employeeID": id});

    db.collection('bonusComputationSheet').deleteOne({"_employeeID": id});
    res.send(bonusComputationSheet);
    console.log("bonusComputationSheet with employeeID: " + id + " deleted.");
    console.log(bonusComputationSheet);
}




