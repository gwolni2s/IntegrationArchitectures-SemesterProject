const mongoose = require('mongoose');

const evaluationRecordSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    nameProduct: {
        type: String,
        required: true
    },
    client: {
        type: String,
        required: true
    },
    clientRanking: {
        type: String,
        required: true
    },
    soldItems: {
        type: String,
        required: true
    },
    targetValue: {
        type: String,
        required: true
    },
    leadershipCompetence: {
        type: String,
        required: true
    },
    opennessToEmployee: {
        type: String,
        required: true
    },
    socialBehaviour: {
        type: String,
        required: true
    },
    attitudeTowardsClient: {
        type: String,
        required: true
    },
    communicationSkills: {
        type: String,
        required: true
    },
    integrityToCompany: {
        type: String,
        required: true
    },
    bonusA: {
        type: String,
        required: true
    },
    bonusB: {
        type: String,
        required: true
    },
    remark: {
        type: String,
        required: true
    }
});

const evaluationRecord = mongoose.model('evaluationRecords', evaluationRecordSchema);
module.exports = evaluationRecord;



