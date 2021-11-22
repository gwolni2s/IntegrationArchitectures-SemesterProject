const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const EvaluationRecord = require('../models/EvaluationRecords');

router.get('/', (req, res) => {
    try {
        const evaluationRecord = EvaluationRecord.find();
        res.send(evaluationRecord);
    } catch(err) {
        console.log(err);
    }
});

router.get('/:id', (req, res) => {
    const evaluationRecord = EvaluationRecord.findOne({sid: req.params.id});
    res.send(evaluationRecord);
});

router.post('/', (req, res) => {
    const evaluationRecord = new EvaluationRecord({
        sid: req.body.sid,
        year: req.body.year,
        nameProduct: req.body.nameProduct,
        client: req.body.client,
        clientRanking: req.body.clientRanking,
        soldItems: req.body.soldItems,
        targetValue: req.body.targetValue,
        opennessToEmployee: req.body.opennessToEmployee,
        socialBehaviour: req.body.socialBehaviour,
        attitudeTowardsClient: req.body.attitudeTowardsClient,
        communicationSkills: req.body.communicationSkills,
        integrityToCompany: req.body.integrityToCompany,
        bonusA: req.body.bonusA,
        bonusB: req.body.bonusB,
        remark:req.body.remark
    });

    evaluationRecord.save()
                    .catch(err => {
                        console.log({message: err});
                    });
});

router.put(':id', (req, res) => {
    EvaluationRecord.findOneAndUpdate({sid: req.params.id}, {
        sid: req.body.sid,
        year: req.body.year,
        nameProduct: req.body.nameProduct,
        client: req.body.client,
        clientRanking: req.body.clientRanking,
        soldItems: req.body.soldItems,
        targetValue: req.body.targetValue,
        opennessToEmployee: req.body.opennessToEmployee,
        socialBehaviour: req.body.socialBehaviour,
        attitudeTowardsClient: req.body.attitudeTowardsClient,
        communicationSkills: req.body.communicationSkills,
        integrityToCompany: req.body.integrityToCompany,
        bonusA: req.body.bonusA,
        bonusB: req.body.bonusB,
        remark:req.body.remark
    });
});

router.delete(':id', (req, res) => {
    EvaluationRecord.deleteOne({sid: req.params.id});
});

module.exports = router;

