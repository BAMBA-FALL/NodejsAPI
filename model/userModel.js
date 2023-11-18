const mongoose= require("mongoose");

const userSchema = new mongoose.Schema({
        name : {
        type : String,
        required : true,
        minlenght : [4, "Le nom doit comporter au moins 4 caractère"]
    },

    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required : true, 
        minlenght: [8, "Le mot de passe doit compoerter au minimun 8 caractère"]
    },

    token: {
        type : String
    }
});



const userModel  = mongoose.model('user', userSchema);
module.exports = userModel;