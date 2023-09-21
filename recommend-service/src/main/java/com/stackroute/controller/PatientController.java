package com.stackroute.controller;

import com.stackroute.dto.PatientDto;
import com.stackroute.model.Patient;
import com.stackroute.service.PatientService;
import com.stackroute.util.PatientUtility;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/patients")
public class PatientController {
    private final PatientService patientService;
    private final PatientUtility utility;
    @PostMapping
    public ResponseEntity<PatientDto> createPatient(@Valid @RequestBody PatientDto dto)
    {
        var patient=utility.toEntity(dto);
        var savedPatient=patientService.createPatient(patient);
        var savedPatientDto=utility.toDto(savedPatient);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(savedPatientDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PatientDto> getPatientById(@PathVariable Long id)
    {
        var patient=patientService.getPatientById(id);
        var patientDto=utility.toDto(patient);
        return ResponseEntity.ok(patientDto);
    }

    @GetMapping
    public ResponseEntity<List<PatientDto>> getAllPatients(){
        List<Patient> patients=patientService.getAllPatients();
        var patientsDto=patients
                .stream()
                .map((utility::toDto))
                .collect(Collectors.toList());
        return ResponseEntity.ok(patientsDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<PatientDto> updatePatient(@Valid @PathVariable Long id,@RequestBody PatientDto dto){
        Patient newPatient=utility.toEntity(dto);
        newPatient.setPatientId(id);
        var updatedPatient=patientService.updatePatient(id,newPatient);
        var updatedPatientDto=utility.toDto(updatedPatient);
        return ResponseEntity.ok(updatedPatientDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deletePatient(@PathVariable Long id)
    {
        boolean deleted=patientService.deletePatient(id);
        if (deleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
