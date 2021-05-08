const express=require('express');
const app=express();
const mongoose=require('mongoose');
const bodyParser = require('body-parser');
let route = require('./routes/router'); 

//configure bodyparser to hande the post requests
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());


//connect to mongoose
const dbPath = 'mongodb://localhost/assignment';
const options = {
    useNewUrlParser: true, useUnifiedTopology: true
}
const mongo = mongoose.connect(dbPath, options);
mongo.then(() => {
    console.log('MongoDB connected');
}, error => {
    console.log(error, 'error');
});

//use route
app.use('/addform',route);
app.use('/getform',route);


//start server
app.listen('3000',(req,res)=>{
    console.log('Server Start at port 3000')
});