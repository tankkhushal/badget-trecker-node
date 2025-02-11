const express = require ('express')
const routes = express.Router();

const singinctl = require("../controller/singincontroller")

// console.log("routes connect")

routes.get('/',singinctl.singin);
routes.post("/singinuser",singinctl.singinuser);
routes.get("/singinup", (req,res)=> {
    try{
        return res.render('singup')
    }
catch(err) {
        console.log(err)
        return res.redirect('back')
    }

})



module.exports= routes;