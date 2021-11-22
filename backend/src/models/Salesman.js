const mongoose = require('mongoose');

const salesmanSchema = new mongoose.Schema({
    sid: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    }
});

const Salesman = mongoose.model('Salesman', salesmanSchema);
module.exports = Salesman;







