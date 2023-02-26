const mongoose = require('mongoose');


const patientSchema =new mongoose.Schema({
  name: {
    type: String
   
  }
  })
  
  
  

const Patient = mongoose.model('Patient',patientSchema)
module.exports=Patient;

