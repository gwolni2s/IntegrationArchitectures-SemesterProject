const EvaluationRecords = require('../models/EvaluationRecords');
const {ObjectId} = require("mongodb");

exports.getEvaluationRecordsById = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const evaluationRecord = await db.collection('evaluationRecords').findOne({"sid": id});
    res.send(evaluationRecord);
}

exports.getEvaluationRecords = async (req, res) => {
    const db = req.app.get("db");
    const evaluationRecords = await db.collection("evaluationRecords").find().toArray();
    res.send(evaluationRecords);
}

exports.createEvaluationRecords = async (req, res) => {
    const db = req.app.get("db");
    const data = req.body;
    const evaluationRecords = new EvaluationRecords(data["sid"], data["year"], data["nameProduct"],
                                                    data["client"], data["clientRanking"], data["soldItems"],
                                                    data["targetValue"], data["leadershipCompetence"],
                                                    data["opennessToEmployee"], data["socialBehaviour"],
                                                    data["attitudeTowardsClient"], data["communicationSkills"],
                                                    data["integrityToCompany"], data["bonusA"], data["bonusB"], data["remark"]);

    db.collection("evaluationRecords").insertOne(evaluationRecords);
    res.send(evaluationRecords);
    console.log("EvaluationRecord with sid: " + evaluationRecords.sid + " inserted.");
}

exports.updateEvaluationRecords = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const data = req.body;
    const evaluationRecord = { $set: {sid: data.sid, year: data.year, nameProduct: data.nameProduct,
            client: data.client, clientRanking: data.clientRanking, soldItems: data.soldItems,
            targetValue: data.targetValue, leadershipCompetence: data.leadershipCompetence,
            opennessToEmployee: data.opennessToEmployee, socialBehaviour: data.socialBehaviour,
            attitudeTowardsClient: data.attitudeTowardsClient, communicationSkills: data.communicationSkills,
            integrityToCompany: data.integrityToCompany, bonusA: data.bonusA, bonusB: data.bonusB, remark: data.remark}};

    db.collection('evaluationRecords').updateOne({"sid": id}, evaluationRecord);
    res.send(evaluationRecord);
    console.log("EvaluationRecord with sid: " + id + " updated.");
}

exports.deleteEvaluationRecords = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const evaluationRecord = await db.collection('evaluationRecords').findOne({"sid": id});

    db.collection('evaluationRecords').deleteOne({"sid": id});
    res.send(evaluationRecord);
    console.log("EvaluationRecord with sid: " + id + " deleted.");
}




