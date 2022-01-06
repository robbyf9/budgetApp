const mongoose = require('mongoose');

let scheme = new mongoose.Schema({
    expenses_date:{
        type:Date,
        required:true
    },
    expenses:{
        type:String,
        required:true,
    },
    amount:{
        type:Number,
        required:true
    },
    notes:String

})

const expensesModel = mongoose.model('expenses', scheme);

module.exports = expensesModel