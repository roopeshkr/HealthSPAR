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
                .localDateTime(dto.localDateTime())
                .message(dto.message())
                .action(dto.action())
                .department(dto.department())
                .doctor(dto.doctor())
                .patientName(dto.patientName())
                .email(dto.email())
                .phoneNumber(dto.phoneNumber())
                .build();
    }

    public AppointmentsDTO toDto(Appointments appointments){
        return AppointmentsDTO
                .builder()
                .appointmentId(appointments.getAppointmentId())
                .patientId(appointments.getPatientId())
                .hospitalId(appointments.getHospitalId())
                .treatmentType(appointments.getTreatmentType())
                .localDateTime(appointments.getLocalDateTime())
                .message(appointments.getMessage())
                .action(appointments.getAction())
                .department(appointments.getDepartment())
                .doctor(appointments.getDoctor())
                .patientName(appointments.getPatientName())
                .email(appointments.getEmail())
                .phoneNumber(appointments.getPhoneNumber())
                .build();
    }
}
