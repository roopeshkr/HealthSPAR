package com.stackroute.dto;

import com.stackroute.model.Specialty;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotEmpty;

import java.time.LocalTime;
import java.util.List;

public record DoctorDto(
        Long doctorId,
        @NotBlank(message = "Doctor must have a name")
        String doctorName,
        @NotEmpty(message = "Doctor must have at least one specialization")
        List<Specialty> specialization,
        @NotEmpty(message = "Doctor must have at least one qualification")
        List<String> qualification,
        @NotEmpty(message = "Doctor must have at least one qualification")
        List<String> languagesSpoken,
        int yearOfExperience,
        LocalTime startTime,
        LocalTime endTime,
        String bio

) {
}
