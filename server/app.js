const express = require("express"); 
const app = express();
const cors = require('cors')
require('dotenv').config()
app.use(express.static("public"));
app.use(cors())
app.set("view engine", "ejs");
app.set("views", "./views");


const server = require("http").Server(app)
const io = require("socket.io")(server)

server.listen((process.env.PORT || '3000') , (err)=>{
    console.log(`Server listening on port ${server.address().port}... : `)
})

const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({extended:false}))

// Connect Mongoose
const mongoose = require("mongoose")
// Mongo bienpx: name: onepiece / pass: jPAnRTPGSxON0DP4
mongoose.connect(`${process.env.MONGODB_URI}`, function(err){
    if(err){
        console.log("Connect Mongo Error: "+ err)
    }else{
        console.log("Connect mongo success.")
    }
});

require('./controllers/user')(app)
require('./controllers/char')(app)

app.use(function(req,res,next){
    next(createError(404))
})

app.use(function(err, req,res,next){
    res.locals.message = err.message
    res.locals.error = req.app.get("env") === "development" ? err:{}

    res.status(err.status || 500)
    res.send('error')
})

module.exports = app