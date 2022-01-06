let expensesModel = require('../Model/ExpensesModel')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Data Cannot Be Empty!" })
        return;
    }

    const expenses = new expensesModel({
        expenses: req.body.expenses,
        expenses_date: req.body.expenses_date,
        amount: req.body.amount,
        notes: req.body.notes
    })

    expenses
        .save(expenses)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "Oops! Something Wrong Happened!" })
        })
}

exports.update = (req, res) => {
    if(!req.body){
        res.status(400).send({ message: 'Data to update cannot be empty!' })
        return;
    } 

    const id = req.params.id

    expensesModel.findByIdAndUpdate(id, req.body, { useFindAndModify:false })
        .then(data => {
            if(!data){
                res.status(404).send({ message: `Cannot update expenses with ${id}. Maybe expenses not found!` })
            }else{
                res.send({
                    message: "Expenses updated sucessfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while update expenses data."
            })
        })
}

exports.find = (req, res) => {
    const id = req.query.id

    if(id){
        expensesModel.findById(id)
            .then(user => {
                res.send(user)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Oops! Something Happened While Get Expenses Data."
                })
            })
    } else {
        expensesModel.find()
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Oops! Something Happened While Get Expenses Data."
                })
            })
    }
}

exports.delete = (req, res) => {
    const id = req.params.id

    expensesModel.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message: `Cannot delete expenses with ${id}. Maybe id is wrong!` })
            }else{
                res.send({
                    message: "Expenses deleted sucessfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while delete expenses data."
            })
        })
}