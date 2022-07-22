const openCRXService = require('../services/openCRX-service');

exports.getAllAccounts = async (req, res) => {
    await openCRXService.getAllAccounts(req, res);
}
exports.getAllSalesOrders = async (req, res) => {
    await openCRXService.getAllSalesOrders(req, res);
}
exports.getSalesOrder = async(req, res) => {
    await openCRXService.getSalesOrder(req, res);
}
exports.getCustomer = async(req, res) => {
    await openCRXService.getCustomer(req, res);
}
exports.getSalesRep = async(req, res) => {
    await openCRXService.getSalesRep(req, res);
}
exports.getSalesOrderPosition = async(req, res) => {
    await openCRXService.getSalesOrderPosition(req, res);
}
exports.getProduct = async(req, res) => {
    await openCRXService.getProduct(req, res);
}
exports.getAllData = async (req, res) => {
    await openCRXService.getCompleteSalesOrdersData(req, res);
}

