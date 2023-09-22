package in.stackroute.patientservice.dto;

import lombok.Builder;

import java.time.LocalDate;

@Builder
public record PatientDTO(
        int patientId,
        String firstName,
        String lastName,
        String email,
        String phoneNumber,
        LocalDate localDate,
        String bloodGroup,
        String gender,
        String address,
        String medicalHistory
) {
}
