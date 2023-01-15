const mongoose = require("mongoose")
const userScheme = mongoose.Schema({
    first_name :String,
    last_name :String,
    email :String,
    password :String,
})
const userModel =  mongoose.model('User',userScheme)
module.exports =userModel