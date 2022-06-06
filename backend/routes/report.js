//import library
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//import model
const model = require('../models/index');
const report = model.report

// endpoint get all data report
app.get("/", async (req,res) => {
    report.findAll({
        include: [
            "user",
            {
                model: model.user,
                as : "user",
            }
        ]
    })
        .then(result => {
            res.json({
                status: "success",
                report : result
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint get data by id
app.get("/:id", async (req,res) => {
    report.findOne({
        where: {
            id: req.params.id
        },
        include: [
            "user",
            {
                model: model.user,
                as : "user",
            }
        ]
    })
        .then(result => {
            res.json({
                status: "success",
                report : result
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint add
app.post("/add/:id", async (req,res) => {
    const data = {
        id_user : req.params.id,
        date : req.body.date,
        description : req.body.description
    }
    report.create(data)
        .then(result => {
            res.json({
                status: "success",
                message: "Report has been add"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

// endpoint edit
app.put("/edit/:id", async (req,res) => {
    let param = {
        id: req.params.id
    }
    const data = {
        id_user : req.body.id_user,
        date : req.body.date,
        description : req.body.description
    }
    report.update(data, {where : param})
        .then(result => {
            res.json({
                status: "success",
                message: "Report has been updated"
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint delete
app.delete("/delete/:id", async (req,res) => {
    let param = {
        id: req.params.id
    }
    report.destroy({where : param})
        .then(result => {
            res.json({
                status: "success",
                message: "Report has been deleted"
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})
module.exports = app