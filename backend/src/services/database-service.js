/**
 * Services for fetching and storing data
 */
const salesmanService = require('../services/salesman-service');
const bonusComputationSheetService = require('../services/bonusComputationSheet-service');
const opencrxService = require('../services/openCRX-service');
const orangehrmService = require('../services/orangeHRM-service');

exports.fetchData = async (req, res) => {

    // Data for all salesmen and all bonusSheets
    let salesmen = [];
    let sales = [];

    // Fetch all employees from OrangeHRM
    salesmen = await orangehrmService.getEmployees(req, res);
    // Save all Employees in MongoDB
    await salesmanService.saveSalesmen(req, res, salesmen);
    // Fetch all sales from openCRX
    sales = await opencrxService.getCompleteSalesOrdersData(req, res);
    // Save all sales in MongoDb
    await bonusComputationSheetService.saveAllSales(req, res, sales);

    res.send("Salesman and sales Data successfully fetched and saved");
}
