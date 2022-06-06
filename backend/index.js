//import library
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

//endpoint
const user = require('./routes/user')
app.use('/user', user);

const report = require('./routes/report')
app.use('/report', report);

const project = require('./routes/project')
app.use('/project', project);

//run server
const port = 3030;
app.listen(port, () => {
    console.log('server run on port ' + port);
})