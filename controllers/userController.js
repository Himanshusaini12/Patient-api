const express=require('express')
const Patient = require("./../modals/patientModel");

exports.getAllPatient = async(req, res) => {
  
  const patient = await Patient.find();
  res.status(500).json({
    status: "success",
    message: patient
  });
};

exports.createPatient = async (req, res) => {
    try {
      const newPatient = await Patient.create(req.body);
  
      res.status(201).json({
        status: "success",
        data: {
          Patient: newPatient,
        },
      });
    } catch (err) {
      res.json({
        status: "error",
        message: err,
      });
    }
  };
  