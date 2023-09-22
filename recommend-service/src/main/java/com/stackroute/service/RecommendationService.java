package com.stackroute.service;

import com.stackroute.exception.PatientNotFoundException;
import com.stackroute.model.Hospital;
import com.stackroute.model.Patient;
import com.stackroute.repository.HospitalRepository;
import com.stackroute.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
@Slf4j
public class RecommendationService {
    private final PatientRepository patientRepository;
    private final HospitalRepository hospitalRepository;

//    public List<Hospital> recommendHospitalsForPatient(Long patientId)
//    {
//        Patient patient=patientRepository.findById(patientId).orElseThrow(
//                ()->new PatientNotFoundException("Patient not found with id : "+patientId)
//        );
//        String patientCity= patient.getCity().getName();
//        System.out.println("city : "+patientCity);
//        List<Hospital> recommendedHospitals=hospitalRepository.findByCity(patientCity);
//        log.info("query result : {}", recommendedHospitals);
//        return recommendedHospitals;
//    }

    public List<Hospital> recommendHospitalsForPatient(Long patientId)
    {
        Patient patient = patientRepository.findById(patientId)
                .orElseThrow(() -> new IllegalArgumentException("Patient not found"));

        String patientCity = patient.getCity().getName();

        List<Hospital> allHospitals = hospitalRepository.findAll();

        return allHospitals.stream()
                .filter(hospital -> hospital.getCity().getName().equals(patientCity))
                .collect(Collectors.toList());
    }




}
