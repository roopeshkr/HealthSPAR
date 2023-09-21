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
                .patientName(dto.patientName())
                .doctorName(dto.doctorName())
                .treatmentType(dto.treatmentType())
                .localDate(dto.localDate())
                .action(dto.action())
                .build();
    }

    public AppointmentsDTO toDto(Appointments appointments){
        return AppointmentsDTO
                .builder()
                .appointmentId(appointments.getAppointmentId())
                .patientName(appointments.getPatientName())
                .doctorName(appointments.getDoctorName())
                .treatmentType(appointments.getTreatmentType())
                .localDate(appointments.getLocalDate())
                .action(appointments.getAction())
                .build();
    }
}
