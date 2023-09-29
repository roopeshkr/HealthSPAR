package in.stackroute.bookedappointments.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "appointments_table")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Appointments {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int appointmentId;
    private String patientId;
    private Long hospitalId;
    private String treatmentType;
    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDateTime localDateTime;
    private String message;
    private String action;          //reschedule/cancel/book
    private String department;
    private String doctor;
    private String patientName;
    private String email;
    private String phoneNumber;
}
