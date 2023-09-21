package in.stackroute.bookedappointments.service;

import in.stackroute.bookedappointments.model.Appointments;
import in.stackroute.bookedappointments.repository.AppointmentsRepository;
import in.stackroute.bookedappointments.utility.DtoEntityConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class AppointmentsServiceImplement implements AppointmentsService{
    private final AppointmentsRepository repository;
    private final DtoEntityConverter converter;
    @Override
    public Appointments findById(int appointmentId) {
        return repository.findById(appointmentId).orElseThrow();
    }

    @Override
    public Appointments save(Appointments appointments) {
        return repository.save(appointments);
    }

    @Override
    public void deleteById(int id) {
        repository.deleteById(id);
    }

    @Override
    public List<Appointments> findAll() {
        return repository.findAll();
    }
}
