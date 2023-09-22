package com.stackroute.util;


import com.stackroute.dto.PatientDto;
import com.stackroute.model.Patient;
import org.springframework.stereotype.Component;

@Component
public class PatientUtility {
    public PatientDto toDto(Patient patient)
    {
        return new PatientDto(
                patient.getPatientId(),
                patient.getCity()
        );
    }

    public Patient toEntity(PatientDto dto) {
        return Patient
                .builder()
                .patientId(dto.patientId())
                .city(dto.city())
                .build();
    }

}
