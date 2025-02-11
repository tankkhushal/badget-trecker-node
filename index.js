const express = require ('express')
const port = 8001;
const app = express();

const path = require('path')
const db =require('./config/db')

app.use(express.urlencoded());

app.set('view engine','ejs')
app.set('views',path.join(__dirname,"views"))

app.use("/",require('./routes/singinrouter'))



app.listen(port,(err)=>{
    err ? console.log(err) : console.log("server  is running" +port)
})