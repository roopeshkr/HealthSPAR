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
                patient.getPatientName(),
                patient.getEmail(),
                patient.getPhoneNumber(),
                patient.getDob(),
                patient.getBloodGroup(),
                patient.getGender(),
                patient.getCityName(),
                patient.getDistrict(),
                patient.getState(),
                patient.getCountry(),
                patient.getZip()
        );
    }

    public Patient toEntity(PatientDto dto)
    {
        return Patient
                .builder()
                .patientId(dto.patientId())
                .patientName(dto.patientName())
                .email(dto.email())
                .phoneNumber(dto.phoneNumber())
                .dob(dto.dob())
                .bloodGroup(dto.bloodGroup())
                .gender(dto.gender())
                .cityName(dto.cityName())
                .district(dto.district())
                .state(dto.state())
                .country(dto.country())
                .zip(dto.zip())
                .build();
    }
}
