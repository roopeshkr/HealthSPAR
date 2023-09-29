package in.stackroute.bookedappointments.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.validation.constraints.NotBlank;
import lombok.Builder;

import java.time.LocalDateTime;

@Builder
public record AppointmentsDTO(
    int appointmentId,
    @NotBlank(message = "Appointment must have patientId")
    String patientId,
    Long hospitalId,
    @NotBlank(message = "Appointment must have treatmentType")
    String treatmentType,
    @JsonFormat(pattern = "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
    LocalDateTime localDateTime,
    String message,
    String action,
    @NotBlank(message = "Appointment must have department name")
    String department,
    @NotBlank(message = "Appointment must have doctor name")
    String doctor,
    @NotBlank(message = "Appointment must have patient name")
    String patientName,
    @NotBlank(message = "Appointment must have patient email")
    String email,
    @NotBlank(message = "Appointment must have patient phone number")
    String phoneNumber
) {
}
