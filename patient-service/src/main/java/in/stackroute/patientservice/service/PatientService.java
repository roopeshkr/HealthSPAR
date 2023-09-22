package in.stackroute.patientservice.service;

import in.stackroute.patientservice.model.Patient;

import java.util.List;

public interface PatientService {
    public Patient save(Patient patient);
    public Patient updateById(int id, Patient patient);
    public void deleteById(int id);
    public List<Patient> findAll();
    public Patient findById(int id);
}
