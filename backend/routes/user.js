//import library
const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

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
const user = model.user

//config storage image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public/image/userProfile")
    },
    filename: (req, file, cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage })

// endpoint get all data user
app.get("/", async (req,res) => {
    user.findAll()
        .then(result => {
            res.json({
                status: "success",
                user : result
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
    user.findOne({
        where: {
            id: req.params.id
        }
    })
        .then(result => {
            res.json({
                status: "success",
                user : result
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint register
app.post("/register",upload.single("image"), async (req,res) => {
    const data = {
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        role : req.body.role,
        position : req.body.position,
        image : "userProfile.svg"
    }
    
    // bcrypt password
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);

    user.create(data)
        .then(result => {
            res.json({
                status: "success",
                message: "User has been add"
            })
        })
        .catch(error => {
            res.json({
                status: "error",
                message: error.message
            })
        })
})

// endpoint login
app.post("/login", async (req, res) => {
    const data = await user.findOne({where : {username: req.body.username}});
    if (data) {
        const validPassword = await bcrypt.compare(req.body.password, data.password);
        if (validPassword) {
            // token
            // let payload = JSON.stringify(user)
            // let token = jwt.sign(payload, SECRET_KEY)
            res.json({  status: "success",
                        message: "Valid password",
                    });
        } else {
            res.json({status: "error",
                      message: "Invalid Password"
                    });
        }
    } else {
        res.json({message: "User does not exist"});
    }
});

// endpoint delete
app.delete("/delete/:id", async (req,res) => {
    let param = {
        id : req.params.id
    }
    let result = await user.findOne({where: param})
    if(result.image != "userProfile.svg"){
        let oldFileName = result.image
        // delete old file
        let dir = path.join(__dirname,"../public/image/userProfile",oldFileName)
        fs.unlink(dir, err => console.log(err))
    }

    // delete data
    user.destroy({where : param})
        .then(result => {
            res.json({
                status: "success",
                message: "User has been deleted"
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
app.put("/edit/:id", async (req,res) => {
    let param = {id : req.params.id}
    const data = {
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        role : req.body.role,
        position : req.body.position
    }

    // check if password is empty
    if(data.password){
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
    }

    // check if image is empty
    if (req.file) {
        // get data by id
        user.findOne({where: param})
        .then(result => {
            let oldFileName = result.image
            // delete old file
            let dir = path.join(__dirname,"../public/image/userProfile",oldFileName)
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

    // console.log(data)

    user.update(data, {where: param})
        .then(result => {
            res.json({
                status: "success",
                message: "User has been updated"
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