package in.stackroute.bookedappointments.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

import java.time.LocalDate;

@Builder
public record AppointmentsDTO(
    int appointmentId,
    @NotBlank(message = "Appointment must have patientId")
    String patientId,
    Long hospitalId,
    @NotBlank(message = "Appointment must have treatmentType")
    String treatmentType,
    @JsonFormat(pattern = "dd-MM-yyyy")
    LocalDate localDate,
    String message,
    String action
) {
}
