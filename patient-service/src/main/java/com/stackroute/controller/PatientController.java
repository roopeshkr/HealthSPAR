package com.stackroute.controller;

import com.stackroute.dto.PatientDto;
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
@CrossOrigin("*")
public class PatientController {
    private final PatientService patientService;
    private final PatientUtility utility;

    @PostMapping
    public ResponseEntity<PatientDto> addPatient(@Valid @RequestBody PatientDto dto)
    {
        var patient=utility.toEntity(dto);
        var savedPatient=patientService.savePatient(patient);
        var savedPatientDto=utility.toDto(savedPatient);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(savedPatientDto);
    }

    @GetMapping("/{patientId}")
    public ResponseEntity<PatientDto> getPatientById(@PathVariable String patientId)
    {
        var patient=patientService.getPatientById(patientId);
        var patientDto=utility.toDto(patient);
        return ResponseEntity.ok(patientDto);
    }

    @GetMapping
    public ResponseEntity<List<PatientDto>> getAllPatients()
    {
        var patients=patientService.getAllPatients();
        var patientsDto=patients.stream()
                .map(utility::toDto)
                .collect(Collectors.toList());
        return ResponseEntity.ok(patientsDto);
    }

    @PutMapping("/{patientId}")
    public ResponseEntity<PatientDto> updatePatient(@Valid @PathVariable String patientId,@RequestBody PatientDto dto)
    {
        var patient=utility.toEntity(dto);
        patient.setPatientId(patientId);
        var updatedPatient=patientService.updatePatient(patientId,patient);
        var updatedPatientDto=utility.toDto(updatedPatient);
        return ResponseEntity.ok(updatedPatientDto);
    }

    @DeleteMapping("/{patientId}")
    public ResponseEntity<Void> deletePatient(@PathVariable String patientId)
    {
        boolean deleted= patientService.deletePatient(patientId);
        if (deleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
