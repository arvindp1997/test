const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let Institute = new Schema({
        institute_name:{
          type:String
        },
        phone_number:{
            type:String
        },
        email:{
            type:String
        },
        address:{
            type:String
        },
        number_of_students:{
            type:String
        }
});


module.exports = mongoose.model('Institute',Institute);
