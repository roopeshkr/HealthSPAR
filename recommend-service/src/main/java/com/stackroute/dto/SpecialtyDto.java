package com.stackroute.dto;

import jakarta.validation.constraints.NotBlank;

public record SpecialtyDto(
        Long id,
        @NotBlank(message = "Speciality must have a name")
        String name,
        @NotBlank(message = "Speciality must have a name")
        String description
) {
}
