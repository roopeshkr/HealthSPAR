package in.stackroute.bookedappointments.repository;

import in.stackroute.bookedappointments.model.Appointments;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AppointmentsRepository extends JpaRepository<Appointments,Integer> {
}
