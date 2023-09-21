package com.stackroute.controller;

import com.stackroute.dto.SpecialtyDto;
import com.stackroute.model.Specialty;
import com.stackroute.service.SpecialtyService;
import com.stackroute.util.SpecialtyUtility;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("/specialty")
public class SpecialtyController {
    private final SpecialtyService specialtyService;
    private final SpecialtyUtility utility;

    @PostMapping
    public ResponseEntity<SpecialtyDto> createSpecialty(@Valid @RequestBody SpecialtyDto dto)
    {
        var specialty=utility.toEntity(dto);
        var savedSpecialty=specialtyService.createSpecialty(specialty);
        var savedSpecialtyDto=utility.toDto(savedSpecialty);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(savedSpecialtyDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<SpecialtyDto> getSpecialtyById(@PathVariable Long id)
    {
        var specialty=specialtyService.getSpecialtyById(id);
        var specialtyDto=utility.toDto(specialty);
        return ResponseEntity.ok(specialtyDto);
    }

    @GetMapping
    public ResponseEntity<List<SpecialtyDto>> getAllSpecialty(){
        List<Specialty> specialty=specialtyService.getAllSpecialty();
        var specialtyDto=specialty
                .stream()
                .map((utility::toDto))
                .collect(Collectors.toList());
        return ResponseEntity.ok(specialtyDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<SpecialtyDto> updateHospital(@Valid @PathVariable Long id,@RequestBody SpecialtyDto dto){
        Specialty newSpecialty=utility.toEntity(dto);
        newSpecialty.setId(id);
        var updatedSpecialty=specialtyService.updateSpecialty(id,newSpecialty);
        var updatedSpecialtyDto=utility.toDto(updatedSpecialty);
        return ResponseEntity.ok(updatedSpecialtyDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSpecialty(@PathVariable Long id)
    {
        boolean deleted=specialtyService.deleteSpecialty(id);
        if (deleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
