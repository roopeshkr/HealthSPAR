package in.stackroute.patientservice.repository;

import in.stackroute.patientservice.model.Patient;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PatientRepository extends MongoRepository<Patient,Integer> {

}
