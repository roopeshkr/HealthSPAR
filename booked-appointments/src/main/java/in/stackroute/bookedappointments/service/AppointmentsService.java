package in.stackroute.bookedappointments.service;

import in.stackroute.bookedappointments.model.Appointments;

import java.util.List;

public interface AppointmentsService {
    public Appointments findById(int appointmentId);
    public Appointments save(Appointments appointments);
    public Appointments updateAppointment(int appointmentId,Appointments appointments);
    public boolean deleteAppointment(int appointmentId);

    public List<Appointments> findAll();
    public List<Appointments> findByPatientId(String patientId);
    public List<Appointments> findByHospitalId(Long hospitalId);

}
