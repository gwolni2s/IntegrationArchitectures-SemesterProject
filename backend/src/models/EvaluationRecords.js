class EvaluationRecords {
    constructor(sid, year, nameProduct, client, clientRanking,
                soldItems, targetValue, leadershipCompetence,
                opennessToEmployee, socialBehaviour,
                attitudeTowardsClient, communicationSkills,
                integrityToCompany, bonusA, bonusB, remark) {
        this.sid = sid;
        this.year = year;
        this.nameProduct = nameProduct;
        this.client = client;
        this.clientRanking = clientRanking;
        this.soldItems = soldItems;
        this.targetValue = targetValue;
        this.leadershipCompetence = leadershipCompetence;
        this.opennessToEmployee = opennessToEmployee;
        this.socialBehaviour = socialBehaviour;
        this.attitudeTowardsClient = attitudeTowardsClient;
        this.communicationSkills = communicationSkills;
        this.integrityToCompany = integrityToCompany;
        this.bonusA = bonusA;
        this.bonusB = bonusB;
        this.remark = remark;
    }
}

module.exports = EvaluationRecords;