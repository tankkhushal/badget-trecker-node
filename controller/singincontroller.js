 const badget = require("../models/singinmodel")

module.exports.singin = (req, res) => {
    try {

        return res.render('singin')
    }
    catch (err) {
        console.log(err)
        return res.redirect('back')
    }
}
module.exports.singinuser = async(req,res)=>{
    try{
       let  checkemail = await badget.findOne({email: req.body.email})
       if(!checkemail){
            if(req.body.password = req.body.confirmpassword){
                let registeruser = await badget.create(req.body)
                if(registeruser){
                    console.log(req.body)
                    console.log("register succesfully")
                    return res.redirect('/')
                }
                else{
                    console.log("rigister not found")
                  return res.redirect('back')
                }
            }
            else{
                console.log("password not found")
                  return res.redirect('back')
            }

       }
       else{
        console.log("email not found")
        return res.redirect('back')
       }
    }
    catch(err){
        console.log(err)
        return res.redirect('back')
    }
}
