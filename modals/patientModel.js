const mongoose = require('mongoose');


const patientSchema =new mongoose.Schema({
  name: {
    type: String
   
  },

  
contactDetails :{
  type: Number

},


address:{
  type: String
},
pincode:{
  type: Number

}

  })
  
  
  

const Patient = mongoose.model('Patient',patientSchema)
module.exports=Patient;

