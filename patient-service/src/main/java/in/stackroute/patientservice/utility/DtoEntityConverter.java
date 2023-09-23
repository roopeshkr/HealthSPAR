package in.stackroute.patientservice.utility;

import in.stackroute.patientservice.dto.PatientDTO;
import in.stackroute.patientservice.model.Patient;
import lombok.Builder;
import org.springframework.stereotype.Component;

@Component
public class DtoEntityConverter {

    public Patient toEntity(PatientDTO dto){
        return Patient
                .builder()
                .patientId(dto.patientId())
                .firstName(dto.firstName())
                .lastName(dto.lastName())
                .email(dto.email())
                .phoneNumber(dto.phoneNumber())
                .localDate(dto.localDate())
                .bloodGroup(dto.bloodGroup())
                .gender(dto.gender())
                .address(dto.address())
                .medicalHistory(dto.medicalHistory())
                .build();

    }

    public PatientDTO toDto(Patient patient){
        return PatientDTO
                .builder()
                .patientId(patient.getPatientId())
                .firstName(patient.getFirstName())
                .lastName(patient.getLastName())
                .email(patient.getEmail())
                .phoneNumber(patient.getPhoneNumber())
                .localDate(patient.getLocalDate())
                .bloodGroup(patient.getBloodGroup())
                .gender(patient.getGender())
                .address(patient.getAddress())
                .medicalHistory(patient.getMedicalHistory())
                .build();
    }


}
