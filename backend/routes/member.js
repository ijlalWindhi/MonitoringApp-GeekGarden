//import library
const express = require('express');
const bodyParser = require('body-parser');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import model
const model = require('../models/index');
const member = model.member

// endpoint get all data member
app.get("/", async (req,res) => {
    member.findAll({
        include: [
            {model: model.project,
            as : "project"},
            {model: model.user,
            as: "user"}
        ]
    })
        .then(result => {
            res.json({
                status: "success",
                member : result
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint get data project by id user
app.get("/getProject/:id_user", async (req,res) => {
    member.findAll({
        where: {
            id_user: req.params.id_user
        },
        include: [
            {model: model.project,
            as : "project"},
            {model: model.user,
            as: "user"}
        ],
    })
        .then(result => {
            res.json({
                status: "success",
                member : result
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint get data team by id project
app.get("/getTeam/:id_project", async (req,res) => {
    member.findAll({
        where: {
            id_project: req.params.id_project
        },
        include: [
            {model: model.project,
            as : "project"},
            {model: model.user,
            as: "user"}
        ],
    })
        .then(result => {
            res.json({
                status: "success",
                member : result
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint get data recent add
app.get("/recent/:id_user", async (req,res) => {
    let param = {id_user: req.params.id_user}
    member.findAll({
        where: param,
        order: [
            ["id_project", "ASC"]
        ]
    })
        .then(result => {
            res.json({
                status: "success",
                project : result[0]
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
        id_user : req.body.id_user,
        role: req.body.role,
        position: req.body.position,
        id_project: req.body.id_project
    }
    member.create(data)
        .then(result => {
            res.json({
                status: "success",
                message: "member has been add"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

// endpoint edit
app.put("/edit/:id_member", async (req,res) => {
    let param = {
        id: req.params.id_member
    }
    const data = {
        id_user : req.body.id_user,
        role: req.body.role,
        position: req.body.position,
        id_project: req.body.id_project
    }
    member.update(data, {where : param})
        .then(result => {
            res.json({
                status: "success",
                message: "member has been updated"
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
app.delete("/delete/:id_member", async (req,res) => {
    let param = {
        id: req.params.id_member
    }
    member.destroy({where : param})
        .then(result => {
            res.json({
                status: "success",
                message: "member has been deleted"
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