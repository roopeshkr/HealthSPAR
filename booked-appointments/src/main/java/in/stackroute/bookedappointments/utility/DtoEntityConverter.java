package in.stackroute.bookedappointments.utility;

import in.stackroute.bookedappointments.dto.AppointmentsDTO;
import in.stackroute.bookedappointments.model.Appointments;
import org.springframework.stereotype.Component;

@Component
public class DtoEntityConverter {
    public Appointments toEntity(AppointmentsDTO dto){
        return Appointments
                .builder()
                .appointmentId(dto.appointmentId())
                .patientId(dto.patientId())
                .hospitalId(dto.hospitalId())
                .treatmentType(dto.treatmentType())
                .localDate(dto.localDate())
                .message(dto.message())
                .action(dto.action())
                .build();
    }

    public AppointmentsDTO toDto(Appointments appointments){
        return AppointmentsDTO
                .builder()
                .appointmentId(appointments.getAppointmentId())
                .patientId(appointments.getPatientId())
                .hospitalId(appointments.getHospitalId())
                .treatmentType(appointments.getTreatmentType())
                .localDate(appointments.getLocalDate())
                .message(appointments.getMessage())
                .action(appointments.getAction())
                .build();
    }
}
