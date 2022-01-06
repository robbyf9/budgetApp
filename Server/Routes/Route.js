const express = require('express');
const route = express.Router();

const incomeController = require('../Controller/Income')

route.get('/', (req, res) => {
    res.send("Budget App");
})

route.get('/income', incomeController.find)
route.post('/add-income', incomeController.create)
route.put('/update-income', incomeController.update)
route.delete('/delete-income', incomeController.delete)

module.exports = route