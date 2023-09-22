package com.stackroute.service;

import com.stackroute.exception.PatientNotFoundException;
import com.stackroute.model.Patient;
import com.stackroute.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PatientServiceImpl implements PatientService {

    private final PatientRepository patientRepository;
    @Override
    public Patient createPatient(Patient patient) {
        log.info("Creating an patient :"+patient+" in the database");
        return patientRepository.save(patient);
    }

    @Override
    public Patient getPatientById(Long id) {
        log.info("Fetching an patient with id :"+id+" in the database");
        return patientRepository.findById(id).orElseThrow(
                ()->new PatientNotFoundException("Patient not found with id : "+id)
        );
    }

    @Override
    public List<Patient> getAllPatients() {
        log.info("Fetching all patient in the database");
        return patientRepository.findAll();
    }

    @Override
    public boolean deletePatient(Long id) {
        log.info("Deleting an patient with id :"+id+" in the database");
        if (patientRepository.existsById(id))
        {
            patientRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Patient updatePatient(Long id, Patient patient) {
        log.info("Updating an patient with id :"+id+" in the database");
        Patient existingPatient=getPatientById(id);
        existingPatient.setCity(patient.getCity());
        return patientRepository.save(existingPatient);
    }
}
