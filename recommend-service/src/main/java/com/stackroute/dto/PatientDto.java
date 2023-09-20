package com.stackroute.dto;

import com.stackroute.model.City;
import jakarta.validation.constraints.NotNull;

public record PatientDto(
        Long patientId,
        @NotNull(message = "Patient must have a city")
        City city
) {
}
