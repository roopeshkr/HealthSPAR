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
    public Patient createPatient(Patient patient) {
        return patientRepository.save(patient);
    }

    @Override
    public Patient getPatientById(Long id) {
        return patientRepository.findById(id).orElseThrow(
                ()->new PatientNotFoundException("Patient not found with id : "+id)
        );
    }

    @Override
    public List<Patient> getAllPatients() {
        return patientRepository.findAll();
    }

    @Override
    public boolean deletePatient(Long id) {
        if (patientRepository.existsById(id))
        {
            patientRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Patient updatePatient(Long id, Patient patient) {
        Patient existingPatient=getPatientById(id);
        existingPatient.setFirstName(patient.getFirstName());
        existingPatient.setLastName(patient.getLastName());
        existingPatient.setEmail(patient.getEmail());
        existingPatient.setCity(patient.getCity());
        return patientRepository.save(existingPatient);
    }
}
