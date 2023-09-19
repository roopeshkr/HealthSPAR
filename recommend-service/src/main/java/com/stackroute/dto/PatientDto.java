package com.stackroute.dto;

import jakarta.validation.constraints.NotBlank;

public record PatientDto(
        Long id,
        @NotBlank(message = "Patient must have a first name")
        String firstName,
        @NotBlank(message = "Patient must have a last name")
        String lastName,
        @NotBlank(message = "Patient must have a email")
        String email,
        @NotBlank(message = "Patient must have a city")
        String city
) {
}
