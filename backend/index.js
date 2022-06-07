//import library
const express = require('express');
const cors = require('cors');
const path = require('path')

//implementasi library
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')))

//endpoint
const user = require('./routes/user')
const report = require('./routes/report')
const project = require('./routes/project')
const task = require('./routes/task')

app.use('/user', user);
app.use('/report', report);
app.use('/project', project);
app.use('/task', task);

//run server
const port = 3030;
app.listen(port, () => {
    console.log('server run on port ' + port);
})