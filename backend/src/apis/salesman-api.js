const Salesman = require('../models/Salesman');
const {ObjectId} = require("mongodb");

exports.getSalesmanById = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const salesman = await db.collection('salesman').findOne({"_employeeID": id});
    res.send(salesman);
    console.log(salesman);
}

exports.getSalesman = async (req, res) => {
    const db = req.app.get("db");
    const salesmen = await db.collection("salesman").find().toArray();
    res.send(salesmen);
    console.log(salesmen);
}

exports.createSalesman = async (req, res) => {
    const db = req.app.get("db");
    const data = req.body;
    const salesman = new Salesman(data["_employeeID"], data["_firstname"], data["_lastname"], data["_department"]);

    db.collection("salesman").insertOne(salesman);
    res.send(salesman);
    console.log(salesman.firstname + " " +  salesman.lastname + " inserted.");
}

exports.updateSalesman = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const data = req.body;
    const salesman = { $set: { _employeeID: data._employeeID, _firstname: data._firstname, _lastname: data._lastname, _department: data._department}};

    db.collection("salesman").updateOne({"_employeeID": id}, salesman);
    res.send(salesman);
    console.log("Salesman with employeeID: " + id + " updated.");
}

exports.deleteSalesman = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const salesman = await db.collection('salesman').findOne({"_employeeID": id});

    db.collection("salesman").deleteOne({"_employeeID": id});
    res.send(salesman);
    console.log("Salesman with employeeID: " + id + " deleted.");
}


