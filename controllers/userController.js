const express=require('express');
const Patient = require('./../modals/patientModel');

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
  
  exports.updatePatient = async (req, res) => {
    try {
      const patient = await Patient.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
      res.status(200).json({
        status: "success",
        message: { patient },
      });
    } catch (err) {
      res.json({
        error: { err },
      });
    }
  };

  exports.deletePatient = async (req, res) => {
    try {
      await Patient.findByIdAndDelete(req.params.id);
      res.status(200).json({
        status: "success",
      });
    } catch (err) {
      res.status(204).json({ status: "error", data: err });
    }
  };