
const mongoose = require('mongoose');

const schema = mongoose.Schema({
    name:{
        fname:{
            type:String,
        },
        lname:{
            type:String
        }
    },
    Marks:{
        type:Array,
        required:true,
        minlength:1
    },
    City:{
        type:String,
        required:true,
        minlength:3
    },
    Contact:{
        Email:{
            type:String,
        },
        Phnno:{
            type:Number,
        }
    },
    ERNO:{
        type:String,
        required:true,
        minlength:10
    },
    Study:{
        Branch:{
            type:String,
        },
        Sem:{
            type:Number
        }
        }
    
},{timestamps:true})

module.exports = mongoose.model("Student",schema);