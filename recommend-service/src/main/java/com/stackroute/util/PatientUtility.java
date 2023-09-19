package com.stackroute.util;


import com.stackroute.dto.PatientDto;
import com.stackroute.model.Patient;
import org.springframework.stereotype.Component;

@Component
public class PatientUtility {
    public PatientDto toDto(Patient patient)
    {
        return new PatientDto(
                patient.getId(),
                patient.getFirstName(),
                patient.getLastName(),
                patient.getEmail(),
                patient.getCity());
    }

    public Patient toEntity(PatientDto dto) {
        return Patient
                .builder()
                .id(dto.id())
                .firstName(dto.firstName())
                .lastName(dto.lastName())
                .email(dto.email())
                .city(dto.city())
                .build();
    }

}
