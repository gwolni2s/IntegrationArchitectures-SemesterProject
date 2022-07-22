const orangeHRMService = require('../services/orangeHRM-service');

exports.getEmployees = async(req, res) => {
    await orangeHRMService.getEmployees(req, res);
}

exports.getEmployee = async(req, res) => {
    await orangeHRMService.getEmployee(req, res);
}

exports.getBonusSalary = async(req, res) => {
    await orangeHRMService.getBonusSalary(req, res);
}

exports.postBonusSalary = async(req, res) => {
    await orangeHRMService.postBonusSalary(req, res);
}







