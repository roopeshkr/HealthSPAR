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
        Appointments existingPatient=findById(appointmentId);
        existingPatient.setPatientId(appointments.getPatientId());
        existingPatient.setHospitalId(appointments.getHospitalId());
        existingPatient.setTreatmentType(appointments.getTreatmentType());
        existingPatient.setLocalDate(appointments.getLocalDate());
        existingPatient.setMessage(appointments.getMessage());
        existingPatient.setAction(appointments.getAction());
        return repository.save(existingPatient);
    }

    @Override
    public boolean deleteAppointment(int appointmentId) {
        if (repository.existsById(appointmentId)){
            repository.deleteById(appointmentId);
            return true;
        }
        return false;
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
