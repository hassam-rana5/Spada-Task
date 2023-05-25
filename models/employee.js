const mongoose = require("mongoose");

const employeeschma = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    imageurls:[],
    designation:{
        type: String,
        required:true
    }
},{
    timeStamps : true,
})
const employeeModel = mongoose.model('employees', employeeschma)
module.exports = employeeModel