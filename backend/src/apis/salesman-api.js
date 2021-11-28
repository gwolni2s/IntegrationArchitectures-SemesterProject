const Salesman = require('../models/Salesman');
const {ObjectId} = require("mongodb");

exports.getSalesmanById = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const salesmanCollection = db.collection('salesman');
    const salesman = await salesmanCollection.findOne({"sid": id});
    res.send(salesman);
    console.log(salesman);
}

exports.getSalesman = async (req, res) => {
    const db = req.app.get("db");
    const salesmen = [];
    const salesmanCursor = await db.collection("salesman").find();
    await salesmanCursor.forEach((man, index) => {
        salesmen[index] = man;
        //console.log(salesmen[index]);
    });
    //await console.log(salesmen);
    //console.log(salesmen);
    console.log(salesmen);
    res.send(salesmen);
}

exports.createSalesman = async (req, res) => {
    const db = req.app.get("db");
    const data = req.body;
    const salesman = new Salesman(data["sid"], data["firstname"], data["lastname"]);

    res.send(db.collection("salesman").insertOne(salesman));
    console.log(salesman.firstname + " " +  salesman.lastname + " inserted.");
}

exports.updateSalesman = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];
    const data = req.body;
    const salesman = { $set: { sid: data.sid, firstname: data.firstname, lastname: data.lastname}};

    res.send(db.collection("salesman").updateOne({"sid": id}, salesman));
}

exports.deleteSalesman = async (req, res) => {
    const db = req.app.get("db");
    const id = req.params["id"];

    res.send(db.collection("salesman").deleteOne({"sid": id}));
}


