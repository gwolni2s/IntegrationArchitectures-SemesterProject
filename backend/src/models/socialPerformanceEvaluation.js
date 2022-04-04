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

    get maxBonus() {
        return this._maxBonus;
    }

    set maxBonus(value) {
        this._maxBonus = value;
    }

    get targetValue() {
        return this._targetValue;
    }

    set targetValue(value) {
        this._targetValue = value;
    }

    get bonus() {
        return this._bonus;
    }

    /**
     * ToDo:
     * bonus will be calculated by an algorithm based on the
     * social performance values
     * @param value
     */
    set bonus(value) {
        this._bonus = value;
    }

    get leadershipCompetence() {
        return this._leadershipCompetence;
    }

    set leadershipCompetence(value) {
        this._leadershipCompetence = value;
    }

    get opennessToEmployee() {
        return this._opennessToEmployee;
    }

    set opennessToEmployee(value) {
        this._opennessToEmployee = value;
    }

    get socialBehaviourToEmployee() {
        return this._socialBehaviourToEmployee;
    }

    set socialBehaviourToEmployee(value) {
        this._socialBehaviourToEmployee = value;
    }

    get attitudeTowardsClient() {
        return this._attitudeTowardsClient;
    }

    set attitudeTowardsClient(value) {
        this._attitudeTowardsClient = value;
    }

    get communicationSkills() {
        return this._communicationSkills;
    }

    set communicationSkills(value) {
        this._communicationSkills = value;
    }

    get integrityToCompany() {
        return this._integrityToCompany;
    }

    set integrityToCompany(value) {
        this._integrityToCompany = value;
    }
}

module.exports = socialPerformanceEvaluation;