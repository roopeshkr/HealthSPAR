package in.stackroute.bookedappointments.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

import java.time.LocalDate;

@Entity
@Table(name = "appointments_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Appointments {

    @Id
    @Column(name = "id")
    private int appointmentId;

    @Column(name = "patient_name")
    private String patientName;
    @Column(name = "doctor_name")
    private String doctorName;
    @Column(name = "treatment_type")
    private String treatmentType;
    @Column(name = "date")
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate localDate;
    @Column(name = "action")
    private String action;          //reschedule OR cancel
}
