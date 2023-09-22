package in.stackroute.patientservice.controller;

import in.stackroute.patientservice.model.Patient;
import in.stackroute.patientservice.repository.PatientRepository;
import in.stackroute.patientservice.service.PatientService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/patient")
public class PatientController {
    private final PatientRepository repository;
    private final PatientService service;

    @GetMapping
    public ResponseEntity<List<Patient>> showAllPatients(){
        var list = service.findAll();
        return ResponseEntity.ok(list);
    }

    @PostMapping
    public ResponseEntity<Patient> createPatientProfile(@RequestBody Patient patient){
        return ResponseEntity.ok(patient);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatientProfile(@PathVariable int id){
        service.deleteById(id);
        return ResponseEntity.noContent().build();

    }


}
