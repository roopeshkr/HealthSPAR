package in.stackroute.patientservice.service;

import in.stackroute.patientservice.model.Patient;
import in.stackroute.patientservice.repository.PatientRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class PatientServiceImplement implements PatientService{
    private final PatientRepository repository;
    @Override
    public Patient save(Patient patient) {
        return repository.save(patient);
    }

    @Override
    public Patient findById(int id) {
        return repository.findById(id).orElseThrow();
    }

    @Override
    public Patient updateById(int id, Patient patient) {
        if(findById(id) != null){
            return repository.save(patient);
        }
        return null;
    }

    @Override
    public void deleteById(int id) {
        repository.deleteById(id);
    }

    @Override
    public List<Patient> findAll() {
        return repository.findAll();
    }
}
