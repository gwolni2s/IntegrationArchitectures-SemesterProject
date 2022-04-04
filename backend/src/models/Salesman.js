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

    get name() {
        return this._firstname + " " + this._lastname;
    }

    get employeeID() {
        return this._employeeID;
    }

    set employeeID(value) {
        this._employeeID = value;
    }

    get firstname() {
        return this._firstname;
    }

    set firstname(value) {
        this._firstname = value;
    }

    get lastname() {
        return this._lastname;
    }

    set lastname(value) {
        this._lastname = value;
    }

    get department() {
        return this._department;
    }

    set department(value) {
        this._department = value;
    }
}

module.exports = Salesman;





