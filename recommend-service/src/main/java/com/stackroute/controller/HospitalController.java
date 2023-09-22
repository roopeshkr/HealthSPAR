package com.stackroute.controller;

import com.stackroute.dto.HospitalDto;
import com.stackroute.model.Hospital;
import com.stackroute.service.HospitalService;
import com.stackroute.util.HospitalUtility;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hospitals")
public class HospitalController {
    private final HospitalService hospitalService;
    private final HospitalUtility utility;

    @PostMapping
    public ResponseEntity<HospitalDto> createHospital(@Valid @RequestBody HospitalDto dto)
    {
        var hospital=utility.toEntity(dto);
        var savedHospital=hospitalService.createHospital(hospital);
        var savedHospitalDto=utility.toDto(savedHospital);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(savedHospitalDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HospitalDto> getHospitalById(@PathVariable Long id)
    {
        var hospital=hospitalService.getHospitalById(id);
        var hospitalDto=utility.toDto(hospital);
        return ResponseEntity.ok(hospitalDto);
    }

    @GetMapping
    public ResponseEntity<List<HospitalDto>> getAllHospitals(){
        List<Hospital> hospitals=hospitalService.getAllHospitals();
        var hospitalsDto=hospitals
                .stream()
                .map((utility::toDto))
                .collect(Collectors.toList());
        return ResponseEntity.ok(hospitalsDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HospitalDto> updateHospital(@Valid @PathVariable Long id,@RequestBody HospitalDto dto){
        Hospital newHospital=utility.toEntity(dto);
        newHospital.setHospitalId(id);
        var updatedHospital=hospitalService.updateHospital(id,newHospital);
        var updatedHospitalDto=utility.toDto(updatedHospital);
        return ResponseEntity.ok(updatedHospitalDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteHospital(@PathVariable Long id)
    {
        boolean deleted=hospitalService.deleteHospital(id);
        if (deleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
