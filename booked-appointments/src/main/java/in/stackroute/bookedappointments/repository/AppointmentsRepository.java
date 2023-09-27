package in.stackroute.bookedappointments.repository;

import in.stackroute.bookedappointments.model.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AppointmentsRepository extends JpaRepository<Appointments,Integer> {
    List<Appointments> findByPatientId(String patientId);
    List<Appointments> findByHospitalId(Long hospitalId);
}
