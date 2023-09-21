package com.stackroute.service;

import com.stackroute.model.Patient;

import java.util.List;

public interface PatientService {
    public Patient createPatient(Patient patient);
    public Patient getPatientById(Long id);
    public List<Patient> getAllPatients();
    public boolean deletePatient(Long id);
    public Patient updatePatient(Long id,Patient patient);
}
