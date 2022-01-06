const mongoose = require('mongoose');

let scheme = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    gender:String,
    status:String

})

const incomeModel = mongoose.model('income', scheme);

module.exports = incomeModel