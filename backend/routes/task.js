//import library
const express = require('express');
const bodyParser = require('body-parser');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import model
const model = require('../models/index');
const task = model.task

// initial variable
let data;

// endpoint get all data task
app.get("/", async (req,res) => {
    task.findAll({
        include: {                        
            model: model.project,
            as : "project",
        }
    })
        .then(result => {
            res.json({
                status: "success",
                task : result
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint get data by id user and sort by deadline
app.get("/:id_user", async (req,res) => {
    task.findAll({
        where: {
            id_user: req.params.id_user
        },
        include: [
            "user",
            {
                model: model.user,
                as : "user",
                where: {
                    id: req.params.id_user
                }
            }
        ],
        order: [
            ["deadline", "ASC"]
        ]
    })
        .then(result => {
            res.json({
                status: "success",
                task : result
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint get data by id project
app.get("/getByProject/:id_project", async (req,res) => {
    task.findAll({
        where: {
            id_project: req.params.id_project
        },
        include: [
            "project",
            {
                model: model.project,
                as : "project",
            },
            "user",
            {
                model: model.user,
                as : "user",
            }
        ]
    })
        .then(result => {
            data = 100 / result.length;
            res.json({
                status: "success",
                dataProgress : data,
                task : result
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
app.post("/add/", async (req,res) => {
    const data = {
        name: req.body.name,
        description: req.body.description,
        deadline: req.body.deadline,
        status: req.body.status,
        id_user: req.body.id_user,
        id_project: req.body.id_project,
    }
    task.create(data)
        .then(result => {
            res.json({
                status: "success",
                message: "Task has been add"
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint edit
app.put("/edit/:id_task", async (req,res) => {
    let param = {
        id: req.params.id_task
    }
    const data = {
        name: req.body.name,
        description: req.body.description,
        deadline: req.body.deadline,
        status: req.body.status,
        id_user: req.body.id_user,
        id_project: req.body.id_project,
    }
    task.update(data, {where : param})
        .then(result => {
            res.json({
                status: "success",
                message: "Task has been updated"
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
    task.destroy({where : param})
        .then(result => {
            res.json({
                status: "success",
                message: "task has been deleted"
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