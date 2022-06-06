//import library
const express = require('express');
const bodyParser = require('body-parser');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import multer
const multer = require("multer")
const path = require("path")
const fs = require("fs")

//import model
const model = require('../models/index');
const project = model.project

//config storage image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../public/image/project")
    },
    filename: (req, file, cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage })

// endpoint get all data project
app.get("/", async (req,res) => {
    project.findAll()
        .then(result => {
            res.json({
                status: "success",
                project : result
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint get data by id user
app.get("/getByOut/:id_user", async (req, res) => {
    let result =  await paket.findAll({
        where: {id_user: req.params.id_user},
        include: [
            "outlet",
            {
                model: model.outlet,
                as : "outlet",
            }
        ]
    })
    res.json({
        paket: result
    })
    
})

// endpoint add
app.post("/add/", upload.single("image"), async (req, res) =>{
    if (!req.file) {
        res.json({
            status: "error",
            message: "No uploaded file"
        })
    } else {
        let data = {
            name: req.body.name,
            description: req.body.description,
            leader: req.body.leader,
            id_member: req.body.member,
            image: req.file.filename
        }
        project
        .create(data)
        .then(result => {
            res.json({
                status: "success",
                message: "Data has been inserted"
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
    }
})

module.exports = app