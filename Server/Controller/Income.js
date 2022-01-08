let incomeModel = require('../Model/IncomeModel')

exports.create = (req, res) => {
    if (!req.body) {
        res.status(400).send({ message: "Data Cannot Be Empty!" })
        return;
    }

    const income = new incomeModel({
        income: req.body.income,
        income_date: req.body.income_date,
        amount: req.body.amount,
        notes: req.body.notes
    })

    income
        .save(income)
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

    incomeModel.findByIdAndUpdate(id, req.body, { useFindAndModify:false })
        .then(data => {
            if(!data){
                res.status(404).send({ message: `Cannot update income with ${id}. Maybe income not found!` })
            }else{
                res.send({
                    message: "Income updated sucessfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while update income data."
            })
        })
}

exports.find = (req, res) => {
    const id = req.query.id

    if(id){
        incomeModel.findById(id)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Oops! Something Happened While Get Income Data."
                })
            })
    } else {
        incomeModel.find()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Oops! Something Happened While Get Income Data."
                })
            })
    }
}

exports.total_income = (req, res) => {
    incomeModel.find()
            .then(data => {
                let total_income = 0;
                data.forEach(value => {
                    total_income += value.amount
                });
                res.status(200).send({ total: total_income});
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Oops! Something Happened While Get Income Data."
                })
            })
}

exports.delete = (req, res) => {
    const id = req.params.id

    incomeModel.findByIdAndDelete(id)
        .then(data => {
            if(!data){
                res.status(404).send({ message: `Cannot delete income with ${id}. Maybe id is wrong!` })
            }else{
                res.send({
                    message: "Income deleted sucessfully!"
                })
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while delete income data."
            })
        })
}