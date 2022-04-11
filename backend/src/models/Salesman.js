class Salesman {

    _employeeID;
    _firstname;
    _lastname;
    _department;

    constructor(employeeID, firstname, lastname, department) {
        this._employeeID = employeeID;
        this._firstname = firstname;
        this._lastname = lastname;
        this._department = department;
    }

    getName() {
        return this.getFirstname() + " " + this.getLastname();
    }

    getEmployeeID() {
        return this._employeeID;
    }

    setEmployeeID(value) {
        this._employeeID = value;
    }

    getFirstname() {
        return this._firstname;
    }

    setFirstname(value) {
        this._firstname = value;
    }

    getLastname() {
        return this._lastname;
    }

    setLastname(value) {
        this._lastname = value;
    }

    getDepartment() {
        return this._department;
    }

    setDepartment(value) {
        this._department = value;
    }
}

module.exports = Salesman;





