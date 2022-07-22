class socialPerformanceEvaluation {

    _leadershipCompetence;
    _opennessToEmployee;
    _socialBehaviourToEmployee;
    _attitudeTowardsClient;
    _communicationSkills;
    _integrityToCompany;

    _leadershipCompetenceBonus;
    _opennessToEmployeeBonus;
    _socialBehaviourToEmployeeBonus;
    _attitudeTowardsClientBonus;
    _communicationSkillsBonus;
    _integrityToCompanyBonus;

    _maxBonus = 100; //100 $, default
    _bonus;

    constructor(leadershipCompetence, opennessToEmployee,
                socialBehaviourToEmployee, attitudeTowardsClient,
                communicationSkills, integrityToCompany) {
        this._leadershipCompetence = leadershipCompetence;
        this._opennessToEmployee = opennessToEmployee;
        this._socialBehaviourToEmployee = socialBehaviourToEmployee;
        this._attitudeTowardsClient = attitudeTowardsClient;
        this._communicationSkills = communicationSkills;
        this._integrityToCompany = integrityToCompany;
        this._bonus = this.calculateBonusSocialPerformanceEvaluation();

    }


    getLeadershipCompetenceBonus() {
        return this._leadershipCompetenceBonus;
    }

    setLeadershipCompetenceBonus(value) {
        this._leadershipCompetenceBonus = value;
    }

    getSocialBehaviourToEmployeeBonus() {
        return this._socialBehaviourToEmployeeBonus;
    }

    setSocialBehaviourToEmployeeBonus(value) {
        this._socialBehaviourToEmployeeBonus = value;
    }

    getOpennessToEmployeeBonus() {
        return this._opennessToEmployeeBonus;
    }

    setOpennessToEmployeeBonus(value) {
        this._opennessToEmployeeBonus = value;
    }

    getIntegrityToCompanyBonus() {
        return this._integrityToCompanyBonus;
    }

    setIntegrityToCompanyBonus(value) {
        this._integrityToCompanyBonus = value;
    }

    getCommunicationSkillsBonus() {
        return this._communicationSkillsBonus;
    }

    setCommunicationSkillsBonus(value) {
        this._communicationSkillsBonus = value;
    }

    getAttitudeTowardsClientBonus() {
        return this._attitudeTowardsClientBonus;
    }

    setAttitudeTowardsClientBonus(value) {
        this._attitudeTowardsClientBonus = value;
    }

    getMaxBonus() {
        return this._maxBonus;
    }

    setMaxBonus(value) {
        this._maxBonus = value;
    }

    getBonus() {
        return this._bonus;
    }

    setBonus(value) {
        this._bonus = value;
    }

    getLeadershipCompetence(str) {
        if(str === "target") {
            return this._leadershipCompetence[0];
        } else {
            return this._leadershipCompetence[1];
        }
    }

    setLeadershipCompetence(value) {
        this._leadershipCompetence = value;
    }

    getOpennessToEmployee(str) {
       if(str === "target") {
           return this._opennessToEmployee[0];
       } else {
           return this._opennessToEmployee[1];
       }
    }

    setOpennessToEmployee(value) {
        this._opennessToEmployee = value;
    }

    getSocialBehaviourToEmployee(str) {
        if(str === "target") {
            return this._socialBehaviourToEmployee[0];
        } else {
            return this._socialBehaviourToEmployee[1];
        }
    }

    setSocialBehaviourToEmployee(value) {
        this._socialBehaviourToEmployee = value;
    }

    getAttitudeTowardsClient(str) {
        if(str === "target") {
            return this._attitudeTowardsClient[0];
        } else {
            return this._attitudeTowardsClient[1];
        }
    }

    setAttitudeTowardsClient(value) {
        this._attitudeTowardsClient = value;
    }

    getCommunicationSkills(str) {
        if(str === "target") {
            return this._communicationSkills[0];
        } else {
            return this._communicationSkills[1];
        }
    }

    setCommunicationSkills(value) {
        this._communicationSkills = value;
    }

    getIntegrityToCompany(str) {
       if(str === "target") {
           return this._integrityToCompany[0];
       } else {
           return this._integrityToCompany[1];
       }
    }

    setIntegrityToCompany(value) {
        this._integrityToCompany = value;
    }

    /**
     * First the social performance criteria are added into a sum and divided by 6 to get the average
     * Then the average is divided to get the percentage of maximal points that are reached
     * Finally the percentage is multiplied by the max possible bonus the employee can get
     *
     * Example:
     * 1) (2+3+4+2+4+5)=21 -> 21 / 6 = 3,5
     * 2) 3,5 / 5(Target Value) = 0,
     * 3) 500 (maxBonus) * 0,7 = 350 (return)
     */
    calculateBonusSocialPerformanceEvaluation() {
        this._attitudeTowardsClientBonus =
            this.getMaxBonus() * (this.getAttitudeTowardsClient()
                / this.getAttitudeTowardsClient("target"));
        this._socialBehaviourToEmployeeBonus =
            this.getMaxBonus() * (this.getSocialBehaviourToEmployee()
                / this.getSocialBehaviourToEmployee("target"));
        this._leadershipCompetenceBonus =
            this.getMaxBonus() * (this.getLeadershipCompetence()
                / this.getLeadershipCompetence("target"));
        this._communicationSkillsBonus =
            this.getMaxBonus() * (this.getCommunicationSkills()
                / this.getCommunicationSkills("target"));
        this._opennessToEmployeeBonus =
            this.getMaxBonus() * (this.getOpennessToEmployee()
                / this.getOpennessToEmployee("target"));
        this._integrityToCompanyBonus =
            this.getMaxBonus() * (this.getIntegrityToCompany()
                / this.getIntegrityToCompany("target"));

        return this.getSocialBehaviourToEmployeeBonus() +
            this.getAttitudeTowardsClientBonus() +
            this.getOpennessToEmployeeBonus() +
            this.getIntegrityToCompanyBonus() +
            this.getCommunicationSkillsBonus() +
            this.getLeadershipCompetenceBonus()
    }
}

module.exports = socialPerformanceEvaluation;