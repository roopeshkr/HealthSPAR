package com.stackroute.controller;

import com.stackroute.dto.DepartmentDto;
import com.stackroute.model.Department;
import com.stackroute.service.DepartmentService;
import com.stackroute.util.DepartmentUtility;
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
public class DepartmentController {
    private final DepartmentService departmentService;
    private final DepartmentUtility utility;

    @PostMapping
    public ResponseEntity<DepartmentDto> createSpecialty(@Valid @RequestBody DepartmentDto dto)
    {
        var specialty=utility.toEntity(dto);
        var savedSpecialty= departmentService.createSpecialty(specialty);
        var savedSpecialtyDto=utility.toDto(savedSpecialty);
        return ResponseEntity.status(HttpStatusCode.valueOf(201)).body(savedSpecialtyDto);
    }

    @GetMapping("/{id}")
    public ResponseEntity<DepartmentDto> getSpecialtyById(@PathVariable Long id)
    {
        var specialty= departmentService.getSpecialtyById(id);
        var specialtyDto=utility.toDto(specialty);
        return ResponseEntity.ok(specialtyDto);
    }

    @GetMapping
    public ResponseEntity<List<DepartmentDto>> getAllSpecialty(){
        List<Department> department = departmentService.getAllSpecialty();
        var specialtyDto= department
                .stream()
                .map((utility::toDto))
                .collect(Collectors.toList());
        return ResponseEntity.ok(specialtyDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<DepartmentDto> updateHospital(@Valid @PathVariable Long id, @RequestBody DepartmentDto dto){
        Department newDepartment =utility.toEntity(dto);
        newDepartment.setId(id);
        var updatedSpecialty= departmentService.updateSpecialty(id, newDepartment);
        var updatedSpecialtyDto=utility.toDto(updatedSpecialty);
        return ResponseEntity.ok(updatedSpecialtyDto);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSpecialty(@PathVariable Long id)
    {
        boolean deleted= departmentService.deleteSpecialty(id);
        if (deleted){
            return ResponseEntity.noContent().build();
        }else {
            return ResponseEntity.notFound().build();
        }
    }
}
