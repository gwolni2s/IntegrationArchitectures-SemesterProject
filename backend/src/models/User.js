/**
 * this model specifies the format to exchange userdata with the frontend and store it in mongoDB
 * @param {string} username
 * @param {string} firstname
 * @param {string} lastname
 * @param {string} email
 * @param {string} password
 * @param {boolean} isAdmin
 * @param {string} role
 * @param {string} code
 */
class User{
    constructor(username, firstname, lastname, email, password, isAdmin, role, code) {
        this._id = undefined;
        this.username = username;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.password = password;
        this.isAdmin = isAdmin;
        this.role = role;
        this.code = code;
    }
}

module.exports = User;