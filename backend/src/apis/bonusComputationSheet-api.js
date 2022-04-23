const BonusComputationSheetService = require('../services/bonusComputationSheet-service');

exports.getBonusComputationSheetById = async (req, res) => {
    await BonusComputationSheetService
        .getBonusComputationSheetByID(req, res);
}

exports.getBonusComputationSheet = async (req, res) => {
    await BonusComputationSheetService
        .getBonusComputationSheet(req, res);
}

exports.createBonusComputationSheet = async (req, res) => {
    await BonusComputationSheetService
        .createBonusComputationSheet(req, res);
}

exports.updateBonusComputationSheet = async (req, res) => {
    await BonusComputationSheetService
        .updateBonusComputationSheet(req, res);
}

exports.deleteBonusComputationSheet = async (req, res) => {
    await BonusComputationSheetService
        .deleteBonusComputationSheet(req, res);
}




