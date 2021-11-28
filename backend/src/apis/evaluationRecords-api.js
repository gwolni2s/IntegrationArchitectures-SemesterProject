const EvaluationRecords = require('../models/EvaluationRecords');
const {ObjectId} = require("mongodb");

exports.getEvaluationRecordsById = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const evaluationRecordCollection = db.collection('evaluationRecords');
    const evaluationRecord = await evaluationRecordCollection.findOne({"sid": id});
    res.send(evaluationRecord);
    console.log(evaluationRecord);
}

exports.getEvaluationRecords = async (req, res) => {
    const db = req.app.get("db");
    const evaluationRecords = [];
    const evaluationRecord = await db.collection("evaluationRecord").find();
    await evaluationRecord.forEach((record, index) => {
        evaluationRecords[index] = record;
        console.log(evaluationRecords[index]);
    });
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

    res.send(db.collection("evaluationRecords").insertOne(evaluationRecords));
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

    res.send(db.collection('evaluationRecords').updateOne({"sid": id}, evaluationRecord));
}

exports.deleteEvaluationRecords = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];

    res.send(db.collection('evaluationRecords').deleteOne({"sid": id}));
}


