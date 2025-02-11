
const mongoose = require ('mongoose');

    const badgetSchema = mongoose.Schema({
        name:{
            type : String,
            require : true
        },
        email:{
            type : String,
            require : true
        },
        password:{
            type : String,
            require : true
        },
        
    }
)




const badget = mongoose.model('badget',badgetSchema);
module.exports = badget;