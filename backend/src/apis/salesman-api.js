const salesmanService = require('../services/salesman-service');

exports.getSalesmanById = async (req, res) => {
    await salesmanService.getSalesmanByID(req, res);
}

exports.getSalesman = async (req, res) => {
    await salesmanService.getSalesmen(req, res);
}

exports.createSalesman = async (req, res) => {
    await salesmanService.createSalesman(req, res);
}

exports.updateSalesman = async (req, res) => {
    await salesmanService.updateSalesman(req, res);
}

exports.deleteSalesman = async (req, res) => {
    await salesmanService.deleteSalesman(req, res);
}


