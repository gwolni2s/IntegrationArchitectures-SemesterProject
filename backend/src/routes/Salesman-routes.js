const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Salesman = require('../models/Salesman');

router.get('/', (req, res) => {
    try {
        const salesmen = Salesman.find();
        res.send(salesmen);
    } catch(err) {
        console.log(err);
    }
});

router.get('/:id', (req, res) => {
    const salesman = Salesman.findOne({sid: req.params.id});
    res.send(salesman);
});
router.post('/', (req, res) => {
    const salesman = new Salesman({
        sid: req.body.sid,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });

    salesman.save()
            .catch(err => {
                console.log({message: err});
            });
});

router.put(':id', (req, res) => {
    Salesman.findOneAndUpdate({sid: req.params.id},{
        sid: req.body.sid,
        firstname: req.body.firstname,
        lastname: req.body.lastname
    });
});

router.delete(':id', (req, res) => {
    Salesman.deleteOne({sid: req.params.id});
});

module.exports = router;

