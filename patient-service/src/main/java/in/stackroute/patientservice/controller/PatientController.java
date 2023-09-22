package in.stackroute.patientservice.controller;

import in.stackroute.patientservice.dto.PatientDTO;
import in.stackroute.patientservice.model.Patient;
import in.stackroute.patientservice.repository.PatientRepository;
import in.stackroute.patientservice.service.PatientService;
import in.stackroute.patientservice.utility.DtoEntityConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/patient")
public class PatientController {
    private final PatientService service;
    private final DtoEntityConverter converter;

    @GetMapping
    public ResponseEntity<List<Patient>> showAllPatients(){
        var list = service.findAll();
        return ResponseEntity.ok(list);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Patient> findPatientById(@PathVariable int id){
        return ResponseEntity.ok(service.findById(id));
    }

    @PostMapping
    public ResponseEntity<PatientDTO> createPatientProfile(@RequestBody PatientDTO dto){
        var newPatient = converter.toEntity(dto);
        var savedPatient = service.save(newPatient);
        var savedPatientDto = converter.toDto(savedPatient);
        return ResponseEntity.status(201).body(savedPatientDto);

    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatientProfile(@PathVariable int id){
        service.deleteById(id);
        return ResponseEntity.noContent().build();

    }


}
