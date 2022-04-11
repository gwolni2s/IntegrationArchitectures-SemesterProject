class socialPerformanceEvaluation {

    _maxBonus; //maximal possible Bonus, 100%
    /**
        on a scale from 1 to 10
        1 equals 10% and 10 equals 100%
     */
    _targetValue = 10; //default
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

    /**
     * ToDo:
     * bonus will be calculated by an algorithm based on the
     * social performance values
     * @param value
     */
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
}

module.exports = socialPerformanceEvaluation;