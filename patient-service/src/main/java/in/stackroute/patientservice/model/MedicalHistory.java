package in.stackroute.patientservice.model;

import lombok.*;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Document(collection = "medical_history_collection")
public class MedicalHistory {

        private LocalDate date;
        private String description;
}
