const Salesman = require('../models/Salesman');

exports.getSalesmanByID = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const salesman = await db.collection('salesman').findOne({"_employeeID": id});
    res.send(salesman);
}

exports.getSalesmen = async (req, res) => {
    const db = req.app.get("db");
    const salesmen = await db.collection("salesman").find().toArray();
    res.send(salesmen);
}

exports.createSalesman = async (req, res) => {
    const db = req.app.get("db");
    const data = req.body;
    const salesman = new Salesman(
        data["_employeeID"],
        data["_code"],
        data["_firstname"],
        data["_lastname"],
        data["_department"]);
    db.collection("salesman").insertOne(salesman);
    res.send(salesman);
}
exports.updateSalesman = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const data = req.body;
    const salesman = {
        $set: {
                _employeeID: data._employeeID,
                _code: data._code,
                _firstname: data._firstname,
                _lastname: data._lastname,
                _department: data._department
            }
    };
    db.collection("salesman").updateOne({"_employeeID": id}, salesman);
    res.send(salesman);
}
exports.deleteSalesman = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const salesman = await db.collection('salesman').findOne({"_employeeID": id});
    db.collection("salesman").deleteOne({"_employeeID": id});
    res.send(salesman);
}