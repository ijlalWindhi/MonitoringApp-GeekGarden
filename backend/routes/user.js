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
const user = model.user

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
app.post("/register", async (req,res) => {
    const data = {
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        role : req.body.role,
        position : req.body.position
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
    let param = {
        id : req.params.id
    }
    const data = {
        name : req.body.name,
        username : req.body.username,
        password : req.body.password,
        email : req.body.email,
        role : req.body.role,
        position : req.body.position
    }

    // check password not null
    if(data.password){
        const salt = await bcrypt.genSalt(10);
        data.password = await bcrypt.hash(data.password, salt);
    }

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