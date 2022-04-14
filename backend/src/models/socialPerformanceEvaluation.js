class socialPerformanceEvaluation {

    _maxBonus = 500; //default: 500 dollars, maximal possible Bonus, 100%
    /**
        on a scale from 1 to 5
        1 equals 20% and 5 equals 100%
     */
    _targetValue = 5; //default = 5

    _leadershipCompetence;
    _opennessToEmployee;
    _socialBehaviourToEmployee;
    _attitudeTowardsClient;
    _communicationSkills;
    _integrityToCompany;

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
        return this._maxBonus * (((
                parseInt(this.getSocialBehaviourToEmployee()) +
                parseInt(this.getCommunicationSkills()) +
                parseInt(this.getAttitudeTowardsClient()) +
                parseInt(this.getLeadershipCompetence()) +
                parseInt(this.getIntegrityToCompany()) +
                parseInt(this.getOpennessToEmployee())
        ) / 6) / this.getTargetValue());
    }
}

module.exports = socialPerformanceEvaluation;