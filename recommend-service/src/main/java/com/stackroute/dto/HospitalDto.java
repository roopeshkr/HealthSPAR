package com.stackroute.dto;

import jakarta.validation.constraints.*;

import java.util.List;

public record HospitalDto(
        Long id,
        @NotBlank(message = "HCP must have a name")
        String name,
        @NotBlank(message = "HCP must have a email")
        String email,
        @NotBlank(message = "HCP must have a city")
        String city,
        @NotBlank(message = "HCP must have a image")
        String imageURL,
        @NotNull(message = "HCP must have a rating")
        @DecimalMin(value = "0", message = "Rating must be greater than or equal to 0")
        @DecimalMax(value = "5", message = "Rating must be less than or equal to 5")
        Double rating,
        @NotEmpty(message = "HCP must have specialities")
        @Size(min = 1, message = "At least one speciality is required")
        List<String> speciality
) {
}
