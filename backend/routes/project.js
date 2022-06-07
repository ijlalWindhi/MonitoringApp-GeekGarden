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
    destination:(req,file,cb) => {
        cb(null,"./public/image/project")
    },
    filename: (req,file,cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage: storage})

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

// endpoint get data sort by deadline
app.get("/sort/", async (req,res) => {
    project.findAll({
        order: [
            ["deadline", "ASC"]
        ]
    })
        .then(result => {
            let hasil = []
            for(let i = 0; i < 2; i++){
                hasil.push(result[i])
            }
            res.json({
                status: "success",
                project :
                hasil
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
app.get("/recent/", async (req,res) => {
    project.findAll({
        order: [
            ["id", "DESC"]
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
            image: req.file.filename,
            deadline: req.body.deadline
        }
        project
        .create(data)
        .then(result => {
            res.json({
                status: "success",
                message: "Project has been inserted"
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

// endpoint edit
app.put("/edit/:id", upload.single("image"), async (req, res) =>{
    let param = {id: req.params.id}
    let data = {
        name: req.body.name,
        description: req.body.description,           
        deadline: req.body.deadline
    }

    // check if image is empty
    if (req.file) {
        // get data by id
        project.findOne({where: param})
        .then(result => {
            let oldFileName = result.image
            // delete old file
            let dir = path.join(__dirname,"../public/image/project",oldFileName)
            fs.unlink(dir, err => console.log(err))
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
        // set new filename
        data.image = req.file.filename
    }
    project.update(data, {where: param})
        .then(result => {
            res.json({
                status: "success",
                message: "Project has been updated",
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
app.delete("/delete/:id", async (req, res) =>{
        let param = {
            id: req.params.id
        }
        let result = await project.findOne({where: param})
        let oldFileName = result.image
        // delete old file
        let dir = path.join(__dirname,"../public/image/project",oldFileName)
        fs.unlink(dir, err => console.log(err))

        // delete data
        project.destroy({where : param})
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