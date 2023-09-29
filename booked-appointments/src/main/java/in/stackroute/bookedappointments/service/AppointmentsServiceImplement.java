package in.stackroute.bookedappointments.service;

import in.stackroute.bookedappointments.exception.AppointmentsNotFoundException;
import in.stackroute.bookedappointments.model.Appointments;
import in.stackroute.bookedappointments.repository.AppointmentsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentsServiceImplement implements AppointmentsService{
    private final AppointmentsRepository repository;
    @Override
    public Appointments findById(int appointmentId) {
        return repository.findById(appointmentId).orElseThrow(
                ()->new AppointmentsNotFoundException("Hospital not found with id : "+appointmentId)
        );
    }

    @Override
    public Appointments save(Appointments appointments) {
        return repository.save(appointments);
    }

    @Override
    public Appointments updateAppointment(int appointmentId, Appointments appointments) {
        Appointments existingAppointment=findById(appointmentId);
        existingAppointment.setAction("RESCHEDULE");
        existingAppointment.setPatientId(appointments.getPatientId());
        existingAppointment.setHospitalId(appointments.getHospitalId());
        existingAppointment.setTreatmentType(appointments.getTreatmentType());
        existingAppointment.setLocalDateTime(appointments.getLocalDateTime());
        existingAppointment.setMessage(appointments.getMessage());
        existingAppointment.setDepartment(appointments.getDepartment());
        existingAppointment.setDoctor(appointments.getDoctor());
        existingAppointment.setPatientName(appointments.getPatientName());
        existingAppointment.setEmail(appointments.getEmail());
        existingAppointment.setPhoneNumber(appointments.getPhoneNumber());
        return repository.save(existingAppointment);
    }

    @Override
    public Appointments deleteAppointment(int appointmentId) {
        Appointments existingAppointment=findById(appointmentId);
        existingAppointment.setAction("CANCEL");
        return repository.save(existingAppointment);
    }


    @Override
    public List<Appointments> findAll() {
        return repository.findAll();
    }

    @Override
    public List<Appointments> findByPatientId(String patientId) {
        return repository.findByPatientId(patientId);
    }

    @Override
    public List<Appointments> findByHospitalId(Long hospitalId) {
        return repository.findByHospitalId(hospitalId);
    }


}
