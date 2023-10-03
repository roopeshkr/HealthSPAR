package com.stackroute.controller;

import com.stackroute.dto.HospitalRequestDto;
import com.stackroute.dto.HospitalResponseDto;
import com.stackroute.model.Hospital;
import com.stackroute.service.HospitalService;
import com.stackroute.util.HospitalRequestUtility;
import com.stackroute.util.HospitalResponseUtility;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/hospitals")
@CrossOrigin("*")
public class HospitalController {
    private final HospitalService hospitalService;
    private final HospitalRequestUtility hospitalRequestUtility;
    private final HospitalResponseUtility hospitalResponseUtility;

    @PostMapping
    public ResponseEntity<HospitalRequestDto> createHospital(@RequestBody HospitalRequestDto dto)
    {
        var hospital=hospitalRequestUtility.toEntity(dto);
        var savedHospital=hospitalService.createHospital(hospital);
        var savedHospitalDto=hospitalRequestUtility.toDto(savedHospital);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(savedHospitalDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<HospitalResponseDto> getHospitalById(@PathVariable Long id)
    {
        var hospital=hospitalService.getHospitalById(id);
        var hospitalDto=hospitalResponseUtility.toDto(hospital);
        return ResponseEntity.ok(hospitalDto);
    }

    @GetMapping
    public ResponseEntity<List<HospitalResponseDto>> getAllHospitals(){
        List<Hospital> hospitals=hospitalService.getAllHospitals();
        var hospitalsDto=hospitals
                .stream()
                .map((hospitalResponseUtility::toDto))
                .collect(Collectors.toList());
        return ResponseEntity.ok(hospitalsDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<HospitalRequestDto> updateHospital( @PathVariable Long id,@RequestBody HospitalRequestDto dto){
        Hospital newHospital=hospitalRequestUtility.toEntity(dto);
        newHospital.setHospitalId(id);
        var updatedHospital=hospitalService.updateHospital(id,newHospital);
        var updatedHospitalDto=hospitalRequestUtility.toDto(updatedHospital);
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
