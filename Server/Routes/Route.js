const express = require('express');
const route = express.Router();

const incomeController = require('../Controller/Income')
const expensesController = require('../Controller/Expenses')

route.get('/', (req, res) => {
    res.send("Budget App");
})

route.get('/api/income', incomeController.find)
route.post('/api/add-income', incomeController.create)
route.put('/api/update-income/:id', incomeController.update)
route.delete('/api/delete-income/:id', incomeController.delete)

route.get('/api/expenses', expensesController.find)
route.post('/api/add-expenses', expensesController.create)
route.put('/api/update-expenses/:id', expensesController.update)
route.delete('/api/delete-expenses/:id', expensesController.delete)

module.exports = route