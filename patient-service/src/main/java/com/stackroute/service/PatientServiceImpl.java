package com.stackroute.service;

import com.stackroute.exception.PatientNotFoundException;
import com.stackroute.model.Patient;
import com.stackroute.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientServiceImpl implements PatientService {
    private final PatientRepository patientRepository;
    @Override
    public Patient savePatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public Patient updatePatient(String patientId, Patient patient) {
        Patient existingPatient=getPatientById(patientId);
        existingPatient.setPatientName(patient.getPatientName());
        existingPatient.setEmail(patient.getEmail());
        existingPatient.setPhoneNumber(patient.getPhoneNumber());
        existingPatient.setDob(patient.getDob());
        existingPatient.setBloodGroup(patient.getBloodGroup());
        existingPatient.setGender(patient.getGender());
        existingPatient.setCityName(patient.getCityName());
        existingPatient.setDistrict(patient.getDistrict());
        existingPatient.setState(patient.getState());
        existingPatient.setCountry(patient.getCountry());
        existingPatient.setZip(patient.getZip());
        return patientRepository.save(existingPatient);
    }

    @Override
    public boolean deletePatient(String patientId) {
        if (patientRepository.existsById(patientId))
        {
            patientRepository.deleteById(patientId);
            return true;
        }
        return false;
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public Patient getPatientById(String patientId) {
        return patientRepository.findById(patientId).orElseThrow(
                ()->new PatientNotFoundException("Hospital not found with id : "+patientId)
        );
    }
}
