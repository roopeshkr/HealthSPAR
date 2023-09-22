package com.stackroute.controller;

import com.stackroute.dto.DoctorDto;
import com.stackroute.model.Doctor;
import com.stackroute.service.DoctorService;
import com.stackroute.util.DoctorUtility;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/doctors")
public class DoctorController {
    private final DoctorService doctorService;
    private final DoctorUtility utility;

    @PostMapping
    public ResponseEntity<DoctorDto> createDoctor(@Valid @RequestBody DoctorDto dto)
    {
        var doctor=utility.toEntity(dto);
        var savedDoctor=doctorService.createDoctor(doctor);
        var savedDoctorDto=utility.toDto(savedDoctor);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(savedDoctorDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DoctorDto> getDoctorById(@PathVariable Long id)
    {
        var doctor=doctorService.getDoctorById(id);
        var doctorDto=utility.toDto(doctor);
        return ResponseEntity.ok(doctorDto);
    }

    @GetMapping
    public ResponseEntity<List<DoctorDto>> getAllDoctor(){
        List<Doctor> doctor=doctorService.getAllDoctor();
        var doctorDto=doctor
                .stream()
                .map((utility::toDto))
                .collect(Collectors.toList());
        return ResponseEntity.ok(doctorDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DoctorDto> updateDoctor(@Valid @PathVariable Long id,@RequestBody DoctorDto dto){
        Doctor newDoctor=utility.toEntity(dto);
        newDoctor.setDoctorId(id);
        var updatedDoctor=doctorService.updateDoctor(id,newDoctor);
        var updatedDoctorDto=utility.toDto(updatedDoctor);
        return ResponseEntity.ok(updatedDoctorDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteDoctor(@PathVariable Long id)
    {
        boolean deleted=doctorService.deleteDoctor(id);
        if (deleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
