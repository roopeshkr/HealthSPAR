package in.stackroute.bookedappointments.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;

import java.time.LocalDate;

@Builder
public record AppointmentsDTO(
    int appointmentId,
    String patientName,
    String doctorName,
    String treatmentType,
    @JsonFormat(pattern = "dd-MM-yyyy")
    LocalDate localDate,
    String action
) {
}
