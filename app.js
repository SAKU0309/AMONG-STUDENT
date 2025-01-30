var express=require("express");
var bodyParser=require("body-parser");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
    console.log("connection succeeded");
})
 
var app=express()
 
 
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
    extended: true
}));
 
app.post('/sign_up', function(req,res){
    var name = req.body.name;
    var username = req.body.username;
    var email =req.body.email;
    var phone = req.body.phone;
    var dob=req.body.dob;
    var usn=req.body.usn;
    var branch =req.body.branch;
    var pass = req.body.password;
 
    var data = {
        "name": name,
        "username":username,
        "email":email,
        "phone":phone,
        "dob":dob,
        "usn":usn,
        "branch":branch,
        "password":pass
        
    }
db.collection('details').insertOne(data,function(err, collection){
        if (err) throw err;
        console.log("Record inserted Successfully");
             
    });
    return res.redirect('http://127.0.0.1:5502/login.html');      
})
 


app.get('/',function(req,res){
res.set({
    'Access-control-Allow-Origin': '*'
    });
return res.redirect('SignUp.html');
}).listen(3000)
 
 
console.log("server listening at port 3000");