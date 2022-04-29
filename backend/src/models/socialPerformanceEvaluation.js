class socialPerformanceEvaluation {

    _maxBonus = 100; //default: 100 dollars, maximal possible Bonus for each criteria
    /**
        on a scale from 1 to 5
        1 equals 20% and 5 equals 100%
     */
    _targetValue;

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

    getTargetValue() {
        return this._targetValue;
    }

    setTargetValue(value) {
        this._targetValue = value;
    }

    getBonus() {
        return this._bonus;
    }

    setBonus(value) {
        this._bonus = value;
    }

    getLeadershipCompetence() {
        return this._leadershipCompetence;
    }

    setLeadershipCompetence(value) {
        this._leadershipCompetence = value;
    }

    getOpennessToEmployee() {
        return this._opennessToEmployee;
    }

    setOpennessToEmployee(value) {
        this._opennessToEmployee = value;
    }

    getSocialBehaviourToEmployee() {
        return this._socialBehaviourToEmployee;
    }

    setSocialBehaviourToEmployee(value) {
        this._socialBehaviourToEmployee = value;
    }

    getAttitudeTowardsClient() {
        return this._attitudeTowardsClient;
    }

    setAttitudeTowardsClient(value) {
        this._attitudeTowardsClient = value;
    }

    getCommunicationSkills() {
        return this._communicationSkills;
    }

    setCommunicationSkills(value) {
        this._communicationSkills = value;
    }

    getIntegrityToCompany() {
        return this._integrityToCompany;
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
            this.getMaxBonus() * (parseInt(this.getAttitudeTowardsClient())
                / this.getTargetValue());
        this._socialBehaviourToEmployeeBonus =
            this.getMaxBonus() * (parseInt(this.getSocialBehaviourToEmployee())
                / this.getTargetValue());
        this._leadershipCompetenceBonus =
            this.getMaxBonus() * (parseInt(this.getLeadershipCompetence())
                / this.getTargetValue());
        this._communicationSkillsBonus =
            this.getMaxBonus() * (parseInt(this.getCommunicationSkills())
                / this.getTargetValue());
        this._opennessToEmployeeBonus =
            this.getMaxBonus() * (parseInt(this.getOpennessToEmployee())
                / this.getTargetValue());
        this._integrityToCompanyBonus =
            this.getMaxBonus() * (parseInt(this.getIntegrityToCompany())
                / this.getTargetValue());

        return this.getSocialBehaviourToEmployeeBonus() +
            this.getAttitudeTowardsClientBonus() +
            this.getOpennessToEmployeeBonus() +
            this.getIntegrityToCompanyBonus() +
            this.getCommunicationSkillsBonus() +
            this.getLeadershipCompetenceBonus()
    }
}

module.exports = socialPerformanceEvaluation;