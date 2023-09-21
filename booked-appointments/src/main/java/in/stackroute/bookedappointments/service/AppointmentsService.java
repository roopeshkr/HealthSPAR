package in.stackroute.bookedappointments.service;

import in.stackroute.bookedappointments.model.Appointments;

import java.util.List;

public interface AppointmentsService {
    Appointments findById(int appointmentId);
    Appointments save(Appointments appointments);
    void deleteById(int id);
    List<Appointments> findAll();

}
