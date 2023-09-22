package in.stackroute.patientservice.model;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "patient_collection")
public class Patient {
    @Id
    private String id;

    private int patientId;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private LocalDate localDate;
    private String bloodGroup;
    private String gender;
//    private Address address;
    private String address;
//    private MedicalHistory medicalHistory;

    private String medicalHistory;
}
