const express = require('express');
const route = express.Router();

const incomeController = require('../Controller/Income')

route.get('/', (req, res) => {
    res.send("Budget App");
})

route.get('/api/income', incomeController.find)
route.post('/api/add-income', incomeController.create)
route.put('/api/update-income/:id', incomeController.update)
route.delete('/api/delete-income/:id', incomeController.delete)

module.exports = route