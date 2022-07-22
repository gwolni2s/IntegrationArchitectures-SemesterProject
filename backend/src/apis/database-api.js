const databaseService = require('../services/database-service');

exports.fetchData = async (req, res) => {
    await databaseService.fetchData(req, res);
}