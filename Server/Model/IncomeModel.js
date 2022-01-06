const mongoose = require('mongoose');

let scheme = new mongoose.Schema({
    income_date:{
        type: Date,
        required: true
    },
    income:{
        type: String,
        required: true,
        unique: true
    },
    amount:{
        type: Number,
        required: true
    },
    notes:String

})

const incomeModel = mongoose.model('income', scheme);

module.exports = incomeModel