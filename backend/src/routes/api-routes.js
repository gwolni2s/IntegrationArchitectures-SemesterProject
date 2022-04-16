const express = require('express');
const router = express.Router();
const {checkAuthorization} = require('../middlewares/auth-middleware');

/*
    In this file is the routing for the REST-endpoints under /api managed
 */

const authApi = require('../apis/auth-api'); //api-endpoints are loaded from separate files
router.post('/login', authApi.login); //the function decides which request type should be accepted
router.delete('/login', checkAuthorization(),authApi.logout); //middlewares can be defined in parameters
router.get('/login', authApi.isLoggedIn); //the function, which handles requests is specified as the last parameter

const userApi = require('../apis/user-api');
router.get('/user', checkAuthorization(), userApi.getSelf);

/**
 * Additional code for exercise 3.2
 */
const salesmanApi = require("../apis/salesman-api");
router.get('/salesman/:id', salesmanApi.getSalesmanById);
router.get('/salesman/', salesmanApi.getSalesman);
router.post('/salesman/', salesmanApi.createSalesman);
router.put('/salesman/:id', salesmanApi.updateSalesman);
router.delete('/salesman/:id', salesmanApi.deleteSalesman);

const bonusComputationSheetApi = require("../apis/bonusComputationSheet-api");
router.get('/bonusComputationSheet/:id', bonusComputationSheetApi.getBonusComputationSheetById);
router.get('/bonusComputationSheet', bonusComputationSheetApi.getBonusComputationSheet);
router.post('/bonusComputationSheet', bonusComputationSheetApi.createBonusComputationSheet);
router.put('/bonusComputationSheet/:id', bonusComputationSheetApi.updateBonusComputationSheet);
router.delete('/bonusComputationSheet/:id', bonusComputationSheetApi.deleteBonusComputationSheet);

const orangeHRMapi = require("../apis/orangeHRM-api");
router.get('/orangeHrm/accessToken', orangeHRMapi.getAccessToken);
router.get('/orangeHrm/employees',  orangeHRMapi.getEmployees);
router.get('/orangeHrm/employee/:id',  orangeHRMapi.getEmployee);
router.get('/orangeHrm/bonusSalary/:id',  orangeHRMapi.getBonusSalary);
router.post('/orangeHrm/bonusSalary/:id',  orangeHRMapi.postBonusSalary);

const openCRXapi = require('../apis/openCRX-api');
router.get('/openCrx/customers', openCRXapi.getAllCustomers);
router.get('/openCrx/salesOrders', openCRXapi.getAllSalesOrders);

module.exports = router;