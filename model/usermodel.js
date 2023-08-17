const Mongoose = require("mongoose");
const Schema = Mongoose.Schema


const UserSchema = new Schema({

    firstName  : {
        type : String,
      
    },
    lastName  : {
        type : String,
        
    },

    email : {
        type :String,
        unique: true,
        required : true
    },
    username:{
        type :String,
        unique: true,
    },
    password : {
        type : String,
        minlength: 6,
        required : true
    },

    
});

let UserModel = Mongoose.model("Users",UserSchema);

module.exports = UserModel; 