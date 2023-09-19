package com.stackroute.service;

import com.stackroute.exception.PatientNotFoundException;
import com.stackroute.model.Hospital;
import com.stackroute.model.Patient;
import com.stackroute.repository.HospitalRepository;
import com.stackroute.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class RecommendationService {
    private final PatientRepository patientRepository;
    private final HospitalRepository hospitalRepository;

    public List<Hospital> recommendHospitalsForPatient(Long patientId)
    {
        Patient patient=patientRepository.findById(patientId).orElseThrow(
                ()->new PatientNotFoundException("Patient not found with id : "+patientId)
        );
        String patientCity=patient.getCity();
        return hospitalRepository.findByCity(patientCity);
    }
}
