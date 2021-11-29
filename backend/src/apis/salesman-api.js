const Salesman = require('../models/Salesman');
const {ObjectId} = require("mongodb");

exports.getSalesmanById = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const salesman = await db.collection('salesman').findOne({"sid": id});
    res.send(salesman);
}

exports.getSalesman = async (req, res) => {
    const db = req.app.get("db");
    const salesmen = await db.collection("salesman").find().toArray();
    res.send(salesmen);
}

exports.createSalesman = async (req, res) => {
    const db = req.app.get("db");
    const data = req.body;
    const salesman = new Salesman(data["sid"], data["firstname"], data["lastname"]);

    db.collection("salesman").insertOne(salesman);
    res.send(salesman);
    console.log(salesman.firstname + " " +  salesman.lastname + " inserted.");
}

exports.updateSalesman = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const data = req.body;
    const salesman = { $set: { sid: data.sid, firstname: data.firstname, lastname: data.lastname}};

    db.collection("salesman").updateOne({"sid": id}, salesman);
    res.send(salesman);
    console.log("Salesman with sid: " + id + " updated.");
}

exports.deleteSalesman = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const salesman = await db.collection('salesman').findOne({"sid": id});

    db.collection("salesman").deleteOne({"sid": id});
    res.send(salesman);
    console.log("Salesman with sid: " + id + " deleted.");
}


